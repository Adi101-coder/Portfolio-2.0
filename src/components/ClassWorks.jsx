import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Folder, Download, X, File, FileText, Image, Video, Archive } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const API_KEY = 'AIzaSyDhs1Z3zH342aYYPXrHA1rSTsLJ5kNaqJ0';

const folders = [
  { name: 'DAA', color: '#3b82f6', folderId: '1HJQlhM6YTyzkSQEgoMeqsuD1cQMc11zS' },
  { name: 'OS', color: '#22c55e', folderId: '1el5I9UgARk5jssPcWsswTd8VCO0eXrcV' },
  { name: 'DL', color: '#f59e0b', folderId: '1s_kY5lg97ISMK-ygx6PxDATvN1QJqJQA' },
];

const ClassWorks = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFiles = async (folderId) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType,webViewLink,webContentLink,size,modifiedTime)`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch files');
      }
      
      const data = await response.json();
      const sortedFiles = (data.files || []).sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
      setFiles(sortedFiles);
    } catch (err) {
      setError('Failed to load files. Please try again.');
      console.error('Error fetching files:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
    fetchFiles(folder.folderId);
  };

  const closeModal = () => {
    setSelectedFolder(null);
    setFiles([]);
    setError(null);
  };

  const getFileIcon = (mimeType) => {
    if (mimeType.includes('pdf')) return <FileText size={20} />;
    if (mimeType.includes('image')) return <Image size={20} />;
    if (mimeType.includes('video')) return <Video size={20} />;
    if (mimeType.includes('zip') || mimeType.includes('rar')) return <Archive size={20} />;
    return <File size={20} />;
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return 'Unknown size';
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: isDark ? '#0a0a0a' : '#fff',
      color: isDark ? '#fff' : '#000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '5rem',
      transition: 'all 0.3s',
    },
    title: {
      fontSize: 'clamp(2.5rem, 6vw, 4rem)',
      fontWeight: 900,
      marginBottom: '2rem',
      letterSpacing: '-0.02em',
      textAlign: 'center',
    },
    grid: {
      display: 'flex',
      gap: '2.5rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: (color) => ({
      background: isDark ? '#18181b' : '#f8f9fa',
      border: `2px solid ${color}`,
      borderRadius: '18px',
      padding: '2.5rem 2.5rem 2rem 2.5rem',
      minWidth: '200px',
      minHeight: '180px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: isDark
        ? '0 4px 24px rgba(0,0,0,0.4)'
        : '0 4px 24px rgba(0,0,0,0.08)',
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }),
    folderName: {
      marginTop: '1.5rem',
      fontWeight: 700,
      fontSize: '1.3rem',
      letterSpacing: '0.01em',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '2rem',
    },
    modalContent: {
      background: isDark ? '#1a1a1a' : '#fff',
      borderRadius: '20px',
      padding: '2rem',
      maxWidth: '800px',
      width: '100%',
      maxHeight: '80vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      borderBottom: `1px solid ${isDark ? '#333' : '#e0e0e0'}`,
    },
    modalTitle: {
      fontSize: '1.5rem',
      fontWeight: 700,
      color: isDark ? '#fff' : '#000',
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: isDark ? '#fff' : '#000',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background 0.2s',
    },
    fileList: {
      flex: 1,
      overflowY: 'auto',
      paddingRight: '0.5rem',
    },
    fileItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem',
      marginBottom: '0.5rem',
      background: isDark ? '#2a2a2a' : '#f8f9fa',
      borderRadius: '12px',
      border: `1px solid ${isDark ? '#333' : '#e0e0e0'}`,
      transition: 'all 0.2s',
    },
    fileInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      flex: 1,
    },
    fileName: {
      fontWeight: 600,
      color: isDark ? '#fff' : '#000',
      marginBottom: '0.25rem',
    },
    fileMeta: {
      fontSize: '0.8rem',
      color: isDark ? '#999' : '#666',
    },
    downloadButton: {
      background: isDark ? '#3b82f6' : '#3b82f6',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      padding: '0.5rem 1rem',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.9rem',
      fontWeight: 600,
      transition: 'all 0.2s',
    },
    loading: {
      textAlign: 'center',
      padding: '2rem',
      color: isDark ? '#999' : '#666',
    },
    error: {
      textAlign: 'center',
      padding: '2rem',
      color: '#ef4444',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Class Works</div>
      <div style={styles.grid}>
        {folders.map((folder, idx) => (
          <motion.div
            key={folder.name}
            style={styles.card(folder.color)}
            whileHover={{ scale: 1.07, boxShadow: `0 8px 32px ${folder.color}55` }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleFolderClick(folder)}
          >
            <Folder size={56} color={folder.color} />
            <div style={styles.folderName}>{folder.name}</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedFolder && (
          <motion.div
            style={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              style={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeader}>
                <h2 style={styles.modalTitle}>
                  {selectedFolder.name} - Course Materials
                </h2>
                <button style={styles.closeButton} onClick={closeModal}>
                  <X size={24} />
                </button>
              </div>

              <div style={styles.fileList}>
                {loading && (
                  <div style={styles.loading}>Loading files...</div>
                )}
                
                {error && (
                  <div style={styles.error}>{error}</div>
                )}
                
                {!loading && !error && files.length === 0 && (
                  <div style={styles.loading}>No files found in this folder.</div>
                )}
                
                {!loading && !error && files.map((file) => (
                  <motion.div
                    key={file.id}
                    style={styles.fileItem}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div style={styles.fileInfo}>
                      {getFileIcon(file.mimeType)}
                      <div>
                        <div style={styles.fileName}>{file.name}</div>
                        <div style={styles.fileMeta}>
                          {formatFileSize(file.size)} • Modified: {formatDate(file.modifiedTime)}
                        </div>
                      </div>
                    </div>
                    
                    {file.webContentLink && (
                      <a
                        href={file.webContentLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.downloadButton}
                      >
                        <Download size={16} />
                        Download
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ClassWorks; 