import React from 'react';
import { Dialog } from '@mui/material';
import { useCartModal, CartHeader, CartContent, CartFooter } from './';

const CartModal: React.FC = () => {
  const {
    items,
    isOpen,
    total,
    itemCount,
    handleQuantityChange,
    handleRemoveItem,
    handleClearAll,
    handleClose,
  } = useCartModal();

  const hasItems = items.length > 0;

  const handleCheckout = () => {
    console.log('Iniciando checkout...', { items, total });

  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        className: "max-h-[80vh]"
      }}
    >
      <CartHeader 
        itemCount={itemCount}
        hasItems={hasItems}
        onClearAll={handleClearAll}
      />

      <CartContent
        items={items}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemoveItem}
      />

      <CartFooter
        total={total}
        hasItems={hasItems}
        onClose={handleClose}
        onCheckout={handleCheckout}
      />
    </Dialog>
  );
};

export default CartModal;
