import { createContext, ReactNode, useContext } from "react";
import { IProduct } from "../utils/interfaces/product.interface";
import { useLocalStorage } from "react-use";
import { ICart, ICartItem } from "../utils/interfaces/cart.interface";
import { currencyExchangerNumber } from "../utils/utils";
import { toast } from "react-toastify";

interface ICartContext {
  handleAddToCart: (product: IProduct, quantity: number) => void;
  handleRemoveFromCart: (cartItem: ICartItem) => void;
  modifyCartItem: (cartItem: ICartItem, quantity: number) => void;
  clearCart: () => void;
  cart: ICart;
}

const cartInitialValue: ICart = {
  items: [],
  totalPrice: 0,
  totalItems: 0,
};

const CartContext = createContext<ICartContext | null>(null);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("CartContext must be used in Provider");
  return context;
};

interface IProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: IProps) => {
  const [cart, setCart] = useLocalStorage<ICart>("cart", cartInitialValue);

  const safeCart = cart ?? cartInitialValue;

  const handleAddToCart = (product: IProduct, quantity: number) => {
    const currentCart = cart ?? cartInitialValue;
    
    const existingIndex = currentCart.items.findIndex((p) => p.id === product.id);

    let newItems: ICartItem[];
    
    if (existingIndex !== -1) {
      newItems = currentCart.items.map((item, index) => 
        index === existingIndex 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      const newItem: ICartItem = {
        id: product.id,
        images: product.images,
        price: currencyExchangerNumber(product.price),
        quantity,
        title: product.title,
      };
      newItems = [...currentCart.items, newItem];
    }

    const newCart: ICart = {
      items: newItems,
      totalPrice: currentCart.totalPrice + currencyExchangerNumber(product.price) * quantity,
      totalItems: newItems.length,
    };

    setCart(newCart);
    toast.success("Mahsulot savatga qo'shildi!");
  };

  const handleRemoveFromCart = (cartItem: ICartItem) => {
    const currentCart = cart ?? cartInitialValue;
    const newItems = currentCart.items.filter((item) => item.id !== cartItem.id);
    
    setCart({
      items: newItems,
      totalPrice: Math.max(0, currentCart.totalPrice - cartItem.price * cartItem.quantity),
      totalItems: newItems.length,
    });
    toast.success("Mahsulot o'chirildi");
  };

  const modifyCartItem = (cartItem: ICartItem, newQuantity: number) => {
    const currentCart = cart ?? cartInitialValue;
    const priceDiff = cartItem.price * (newQuantity - cartItem.quantity);
    
    const newItems = currentCart.items.map((item) =>
      item.id === cartItem.id ? { ...item, quantity: newQuantity } : item
    );

    setCart({
      items: newItems,
      totalPrice: currentCart.totalPrice + priceDiff,
      totalItems: newItems.length,
    });
  };

  const clearCart = () => {
    setCart(cartInitialValue);
  };

  return (
    <CartContext.Provider
      value={{
        handleAddToCart,
        handleRemoveFromCart,
        modifyCartItem,
        clearCart,
        cart: safeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
