import { useState } from "react";
import { Divider } from "../divider";
import { ProductQuantityInput } from "./product-quantity-input";
import { ProductPrice } from "./product-price";
import { ProductButtons } from "./product-buttons";
import { ProductDescription } from "./product-description";

export const ProductDetails = () => {
  const [productQuantity, setProductQuantity] = useState<number>(1);
  return (
    <div>
      <p className="text-2xl">
        Qo'goz sochiqlar Oila tanlovi, 2 qatlamli, 2 dona
      </p>

      <Divider className="my-3" />
      <ProductQuantityInput
        setValue={setProductQuantity}
        value={productQuantity}
      />
      <ProductPrice />
      <ProductButtons />
      <ProductDescription />
    </div>
  );
};
