import { useCallback } from 'react';

import { useCart as useHostCart } from 'host/useCart';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  discountPercentage?: number;
  thumbnail: string;
  category: string;
  quantity: number;
  rating: number;
}

export const useCartModal = () => {
  const {
    items,
    isOpen,
    total,
    itemCount,
    removeItem,
    updateItemQuantity,
    clearAllItems,
    closeCartModal
  } = useHostCart();

  const formatPrice = useCallback((price: number, discountPercentage?: number): string => {
    if (discountPercentage && discountPercentage > 0) {
      return (price * (1 - discountPercentage / 100)).toFixed(2);
    }
    return price.toFixed(2);
  }, []);

  const handleQuantityChange = useCallback((id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateItemQuantity(id, newQuantity);
    }
  }, [removeItem, updateItemQuantity]);

  const handleRemoveItem = useCallback((id: number) => {
    removeItem(id);
  }, [removeItem]);

  const handleClearAll = useCallback(() => {
    clearAllItems();
  }, [clearAllItems]);

  const handleClose = useCallback(() => {
    closeCartModal();
  }, [closeCartModal]);

  return {
    items: items as CartItem[],
    isOpen,
    total,
    itemCount,
    formatPrice,
    handleQuantityChange,
    handleRemoveItem,
    handleClearAll,
    handleClose,
  };
};
