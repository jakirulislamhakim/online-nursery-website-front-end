export type TProduct = {
   _id: string;
   title: string;
   price: number;
   category: string;
   quantity: number;
   description: string;
   rating: number;
   image: string;
};

export type TAddNewProduct = {
   title: string;
   price: number;
   category: string;
   quantity: number;
   description: string;
   image: string;
};
