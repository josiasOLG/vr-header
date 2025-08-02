import React from 'react';
import { DialogContent, List } from '@mui/material';
import { CartItem } from '../../core';
import EmptyState from '../atoms/EmptyState';
import CartItemComponent from './CartItemComponent';

interface CartContentProps {
  items: CartItem[];
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartContent: React.FC<CartContentProps> = ({
  items,
  onQuantityChange,
  onRemove
}) => {
  const isEmpty = items.length === 0;

  return (
    <DialogContent className="p-0">
      {isEmpty ? (
        <EmptyState
          icon="🛒"
          title="Seu carrinho está vazio"
          description="Adicione alguns produtos para começar suas compras"
        />
      ) : (
        <List className="max-h-96 overflow-auto">
          {items.map((item, index) => (
            <CartItemComponent
              key={item.id}
              item={item}
              showDivider={index < items.length - 1}
              onQuantityChange={onQuantityChange}
              onRemove={onRemove}
            />
          ))}
        </List>
      )}
    </DialogContent>
  );
};

export default CartContent;
