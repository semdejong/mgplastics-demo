import type { Metadata } from "next";
import ProductView from "@/components/ProductView";
import { products } from "@/lib/site";

const product = products["lateislabbe"];

export const metadata: Metadata = {
  title: product.metaTitle,
  description: product.metaDescription,
};

export default function Page() {
  return <ProductView product={product} />;
}
