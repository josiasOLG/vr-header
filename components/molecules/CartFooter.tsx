import React from 'react';
import { DialogActions, Box, Typography, Button, Divider, Paper } from '@mui/material';

interface CartFooterProps {
  total: number;
  hasItems: boolean;
  onClose: () => void;
  onCheckout?: () => void;
}

const CartFooter: React.FC<CartFooterProps> = ({
  total,
  hasItems,
  onClose,
  onCheckout
}) => {
  return (
    <>
      <Divider />
      <Paper
        elevation={0}
        sx={{
          borderRadius: 0,
          backgroundColor: 'grey.50'
        }}
      >
        <DialogActions 
          sx={{ 
            px: 3,
            py: 2.5,
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2
          }}
        >
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              width: '100%',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: { xs: 2, sm: 0 }
            }}
          >
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: 'text.secondary',
                  display: 'block',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5
                }}
              >
                Total
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 800,
                  color: 'primary.main',
                  lineHeight: 1
                }}
              >
                ${total.toFixed(2)}
              </Typography>
            </Box>
            
            <Box 
              sx={{ 
                display: 'flex', 
                gap: 1.5,
                flexDirection: { xs: 'column-reverse', sm: 'row' },
                width: { xs: '100%', sm: 'auto' }
              }}
            >
              <Button 
                onClick={onClose} 
                variant="outlined"
                size="large"
                sx={{
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  px: 3,
                  py: 1,
                  borderColor: 'grey.300',
                  color: 'text.primary',
                  '&:hover': {
                    borderColor: 'grey.400',
                    backgroundColor: 'grey.50'
                  }
                }}
              >
                Continuar Comprando
              </Button>
              
              {hasItems && (
                <Button 
                  variant="contained" 
                  size="large"
                  onClick={onCheckout}
                  sx={{
                    borderRadius: 2,
                    textTransform: 'none',
                    fontWeight: 700,
                    px: 4,
                    py: 1,
                    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                    boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #1976D2 30%, #1565C0 90%)',
                      boxShadow: '0 4px 8px 3px rgba(33, 203, 243, .3)',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  🚀 Finalizar Compra
                </Button>
              )}
            </Box>
          </Box>
        </DialogActions>
      </Paper>
    </>
  );
};

export default CartFooter;

