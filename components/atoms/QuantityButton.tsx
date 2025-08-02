import React from 'react';
import { IconButton, Tooltip } from '@mui/material';

interface QuantityButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'increment' | 'decrement' | 'remove';
  disabled?: boolean;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'increment',
  disabled = false 
}) => {
  const getColor = () => {
    if (variant === 'remove') return 'error';
    return 'primary';
  };

  const getTooltip = () => {
    switch (variant) {
      case 'increment': return 'Aumentar quantidade';
      case 'decrement': return 'Diminuir quantidade';
      case 'remove': return 'Remover item';
      default: return '';
    }
  };

  const getStyles = () => {
    const baseStyles = {
      width: 36,
      height: 36,
      border: '1px solid',
      borderRadius: 1,
      fontSize: '14px',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: 1
      }
    };

    if (variant === 'remove') {
      return {
        ...baseStyles,
        borderColor: 'error.main',
        color: 'error.main',
        ml: 1,
        '&:hover': {
          ...baseStyles['&:hover'],
          backgroundColor: 'error.light',
          color: 'error.contrastText'
        }
      };
    }

    return {
      ...baseStyles,
      borderColor: 'primary.main',
      color: 'primary.main',
      '&:hover': {
        ...baseStyles['&:hover'],
        backgroundColor: 'primary.light',
        color: 'primary.contrastText'
      }
    };
  };

  return (
    <Tooltip title={getTooltip()} arrow>
      <span>
        <IconButton
          onClick={onClick}
          disabled={disabled}
          color={getColor()}
          sx={getStyles()}
        >
          {children}
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default QuantityButton;
