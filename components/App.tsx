'use client';

import React from "react";
import { 
  IconButton, 
  Badge, 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Tooltip, 
  Avatar
} from '@mui/material';
import CartModal from './CartModal';
import { useCart } from 'host/useCart';

const App = () => {
  const { itemCount, toggleCartModal } = useCart();

  return (
    <>
      <AppBar 
        position="static" 
        elevation={0}
        sx={{ 
          backgroundColor: '#455a64',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <Container maxWidth="xl">
          <Toolbar 
            disableGutters 
            sx={{ 
              display: 'flex',
              justifyContent: 'space-between',
              height: '64px',
              px: { xs: 2, sm: 3 }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                sx={{ 
                  bgcolor: 'rgba(255, 255, 255, 0.15)', 
                  width: 40, 
                  height: 40,
                  mr: 1.5,
                  display: { xs: 'none', sm: 'flex' }
                }}
              >
                VR
              </Avatar>
              <Typography 
                variant="h6" 
                component="div"
                sx={{ 
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                  fontSize: { xs: '1.1rem', sm: '1.25rem' }
                }}
              >
                VR System
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Tooltip title="Ver carrinho">
                <IconButton
                  onClick={toggleCartModal}
                  size="large"
                  aria-label="carrinho de compras"
                  color="inherit"
                  sx={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.15)'
                    },
                    transition: 'all 0.2s'
                  }}
                >                    <Badge 
                    badgeContent={itemCount} 
                    color="error"
                    sx={{
                      '& .MuiBadge-badge': {
                        fontWeight: 'bold',
                        fontSize: '0.7rem'
                      }
                    }}
                  >
                    <Box component="span" sx={{ fontSize: '1.3rem' }}>🛒</Box>
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      
      <CartModal />
    </>
  );
};

export default App;
