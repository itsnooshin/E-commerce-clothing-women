import { getImages } from "../lib/utilits/apImages";
import { Product } from "../types/productTypes";

export const getSingleproduct = async (id: string) => {
  const data = await getImages();
  const singleProduct: Product = data?.find(
    (product) => product.id.toString() === id
  );
  return { singleProduct };
};
