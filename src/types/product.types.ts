export type TProduct = {
   _id: string;
   title: string;
   price: number;
   category: string;
   quantity: number;
   description: string;
   rating: number;
   image: string;
   lightRequirements: string;
   growthRate: string;
   soilType: string;
};

export type TAddNewProduct = {
   title: string;
   price: number;
   category: string;
   quantity: number;
   description: string;
   image: string;
   lightRequirements: string;
   growthRate: string;
   soilType: string;
};
