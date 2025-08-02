import React from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider
} from '@mui/material';
import { CartItem } from '../../core';
import ProductInfo from '../molecules/ProductInfo';
import QuantityControls from '../molecules/QuantityControls';

interface CartItemProps {
  item: CartItem;
  showDivider: boolean;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({
  item,
  showDivider,
  onQuantityChange,
  onRemove
}) => {
  return (
    <React.Fragment key={item.id}>
      <ListItem className="px-6 py-4">
        <ListItemAvatar>
          <Avatar
            src={item.thumbnail}
            alt={item.title}
            variant="rounded"
            className="w-16 h-16"
          />
        </ListItemAvatar>
        
        <ListItemText
          primary={
            <ProductInfo
              title={item.title}
              category={item.category}
              price={item.price}
              discountPercentage={item.discountPercentage}
            />
          }
        />
        
        <QuantityControls
          quantity={item.quantity}
          onQuantityChange={(newQuantity) => onQuantityChange(item.id, newQuantity)}
          onRemove={() => onRemove(item.id)}
        />
      </ListItem>
      
      {showDivider && <Divider />}
    </React.Fragment>
  );
};

export default CartItemComponent;
