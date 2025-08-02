import React from 'react';
import { Typography, Box, Chip } from '@mui/material';

interface PriceDisplayProps {
  price: number;
  discountPercentage?: number;
  variant?: 'small' | 'large';
}

const PriceDisplay: React.FC<PriceDisplayProps> = ({ 
  price, 
  discountPercentage,
  variant = 'large'
}) => {
  const formatPrice = (value: number) => value.toFixed(2);
  
  const getDiscountedPrice = () => {
    if (!discountPercentage) return price;
    return price * (1 - discountPercentage / 100);
  };

  const hasDiscount = discountPercentage && discountPercentage > 0;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      {hasDiscount ? (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography 
              variant="caption" 
              sx={{ 
                textDecoration: 'line-through',
                color: 'text.disabled',
                fontWeight: 400
              }}
            >
              ${formatPrice(price)}
            </Typography>
            <Typography 
              variant={variant === 'large' ? 'h6' : 'body1'} 
              sx={{ 
                color: 'success.main',
                fontWeight: 700,
                lineHeight: 1
              }}
            >
              ${formatPrice(getDiscountedPrice())}
            </Typography>
          </Box>
          <Chip
            label={`-${discountPercentage}%`}
            size="small"
            color="error"
            sx={{
              height: 20,
              fontSize: '0.75rem',
              fontWeight: 600
            }}
          />
        </>
      ) : (
        <Typography 
          variant={variant === 'large' ? 'h6' : 'body1'} 
          sx={{ 
            color: 'primary.main',
            fontWeight: 700
          }}
        >
          ${formatPrice(price)}
        </Typography>
      )}
    </Box>
  );
};

export default PriceDisplay;
