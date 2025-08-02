import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import PriceDisplay from '../atoms/PriceDisplay';

interface ProductInfoProps {
  title: string;
  category: string;
  price: number;
  discountPercentage?: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  title,
  category,
  price,
  discountPercentage
}) => {
  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography 
        variant="subtitle1" 
        sx={{ 
          fontWeight: 600,
          mb: 0.5,
          lineHeight: 1.3,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          color: 'text.primary'
        }}
      >
        {title}
      </Typography>
      
      <Box sx={{ mb: 1 }}>
        <Chip
          label={category}
          size="small"
          variant="outlined"
          sx={{
            height: 24,
            fontSize: '0.75rem',
            textTransform: 'capitalize',
            backgroundColor: 'primary.50',
            borderColor: 'primary.200',
            color: 'primary.700'
          }}
        />
      </Box>
      
      <Box sx={{ mt: 1 }}>
        <PriceDisplay 
          price={price} 
          discountPercentage={discountPercentage}
          variant="large"
        />
      </Box>
    </Box>
  );
};

export default ProductInfo;
