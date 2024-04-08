"use client";
import BannerHeader from "@/src/components/headers/BannerHeader";
import NavBar from "@/src/components/layout/NavBar";
import ProductDetail from "@/src/components/layout/ProductDetail";
import { getSingleproduct } from "@/src/helper";
import { Product } from "@/src/types/productTypes";
import { useEffect, useState } from "react";

export default function page({ params }: any) {
  const [singleProduct, setSingleProduct] = useState<Product | null>(null);

  const { id } = params;

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const { singleProduct } = await getSingleproduct(id);
        setSingleProduct(singleProduct);
      };

      fetchData();
    }
  }, [id]);

  if (!singleProduct) return; // Loading state or spinner

  return <ProductDetail product={singleProduct} />;
}
