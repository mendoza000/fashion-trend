import { defineStore } from "pinia";
import { reactive } from "vue";

export interface Product {
  title: string;
  brand: string;
  description: string;
  image: object;
  price: number;
  category: string;
  size: string[];
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

export const useProductsStore = defineStore("products", () => {
  const productList = reactive<Product[]>([]);

  const addProducts = (list: Product[]) => {
    list.forEach((p) => {
      productList[productList.length] = p;
    });
  };

  const filterProduct = (id: any) => {
    const p = productList.find((p) => p._id === id);
    return p;
  };

  return { productList, addProducts, filterProduct };
});
