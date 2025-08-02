import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface EmptyStateProps {
  icon: string;
  title: string;
  description?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description }) => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 4,
        textAlign: 'center'
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 120,
          height: 120,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'grey.50',
          border: '2px dashed',
          borderColor: 'grey.300',
          mb: 3
        }}
      >
        <Box
          component="span"
          sx={{
            fontSize: '48px',
            opacity: 0.7,
            filter: 'grayscale(100%)'
          }}
        >
          {icon}
        </Box>
      </Paper>
      
      <Typography 
        variant="h6" 
        sx={{ 
          color: 'text.secondary',
          fontWeight: 600,
          mb: 1
        }}
      >
        {title}
      </Typography>
      
      {description && (
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.disabled',
            maxWidth: 300,
            lineHeight: 1.6
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default EmptyState;
