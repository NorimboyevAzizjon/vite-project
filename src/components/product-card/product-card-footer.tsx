export const ProductCardFooter = () => {
  return (
    <div className="flex items-center justify-between mt-2 cursor-pointer">
      <p>200,000 sum</p>
      <div className="w-10 h-10 rounded-full border flex items-center justify-center">
        <img
          src="/icons/add-to-cart.svg"
          alt="add-to-cart-icon"
          className="w-7"
        />
      </div>
    </div>
  );
};
