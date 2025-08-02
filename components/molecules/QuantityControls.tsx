import React from 'react';
import { Box, Paper } from '@mui/material';
import QuantityButton from '../atoms/QuantityButton';
import QuantityDisplay from '../atoms/QuantityDisplay';

interface QuantityControlsProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
  onRemove: () => void;
}

const QuantityControls: React.FC<QuantityControlsProps> = ({
  quantity,
  onQuantityChange,
  onRemove
}) => {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        ml: { xs: 0, sm: 2 },
        mt: { xs: 2, sm: 0 },
        flexWrap: { xs: 'wrap', sm: 'nowrap' },
        justifyContent: { xs: 'center', sm: 'flex-end' }
      }}
    >
      <Paper
        elevation={1}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 2,
          p: 0.5,
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'divider'
        }}
      >
        <QuantityButton
          onClick={() => onQuantityChange(quantity - 1)}
          variant="decrement"
          disabled={quantity <= 1}
        >
          ➖
        </QuantityButton>
        
        <QuantityDisplay quantity={quantity} />
        
        <QuantityButton
          onClick={() => onQuantityChange(quantity + 1)}
          variant="increment"
        >
          ➕
        </QuantityButton>
      </Paper>
      
      <QuantityButton
        onClick={onRemove}
        variant="remove"
      >
        🗑️
      </QuantityButton>
    </Box>
  );
};

export default QuantityControls;
