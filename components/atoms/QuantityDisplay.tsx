import React from 'react';
import { Typography, Box } from '@mui/material';

interface QuantityDisplayProps {
  quantity: number;
}

const QuantityDisplay: React.FC<QuantityDisplayProps> = ({ quantity }) => {
  return (
    <Box 
      sx={{
        minWidth: '48px',
        height: '36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 1,
        backgroundColor: 'background.paper',
        mx: 1
      }}
    >
      <Typography 
        variant="body1" 
        sx={{ 
          fontWeight: 600,
          color: 'text.primary',
          userSelect: 'none'
        }}
      >
        {quantity}
      </Typography>
    </Box>
  );
};

export default QuantityDisplay;
