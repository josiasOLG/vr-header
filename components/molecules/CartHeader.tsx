import React from 'react';
import { DialogTitle, Box, Typography, Badge, Button, Divider } from '@mui/material';

interface CartHeaderProps {
  itemCount: number;
  hasItems: boolean;
  onClearAll: () => void;
}

const CartHeader: React.FC<CartHeaderProps> = ({
  itemCount,
  hasItems,
  onClearAll
}) => {
  return (
    <>
      <DialogTitle 
        sx={{ 
          px: 3,
          py: 2.5,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          gap: 2
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                backgroundColor: 'primary.main',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px'
              }}
            >
              🛒
            </Box>
            
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  color: 'text.primary',
                  lineHeight: 1.2
                }}
              >
                Carrinho de Compras
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  display: 'block'
                }}
              >
                {itemCount} {itemCount === 1 ? 'item' : 'itens'}
              </Typography>
            </Box>
            
            {itemCount > 0 && (
              <Badge 
                badgeContent={itemCount} 
                color="primary"
                sx={{
                  '& .MuiBadge-badge': {
                    right: -8,
                    top: -8,
                    fontWeight: 600
                  }
                }}
              >
                <Box sx={{ width: 20, height: 20 }} />
              </Badge>
            )}
          </Box>
          
          {hasItems && (
            <Button
              onClick={onClearAll}
              variant="outlined"
              color="error"
              size="small"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                px: 2,
                '&:hover': {
                  backgroundColor: 'error.50'
                }
              }}
            >
              🗑️ Limpar Tudo
            </Button>
          )}
        </Box>
      </DialogTitle>
      <Divider />
    </>
  );
};

export default CartHeader;
