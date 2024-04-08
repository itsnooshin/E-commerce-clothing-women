export interface ColorData {
  name: string;
  hex: string;
  currentColor: string;
}

export interface Product {
  id: string;
  procuct_price: string;
  product_bestsellere: boolean;
  product_category: string;
  product_color: ColorData[];
  product_description: string;
  product_img: string[];
  product_instock: boolean;
  product_name: string;
  product_new: boolean;
  product_size: string[];
}
