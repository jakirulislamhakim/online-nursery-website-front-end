import { useState } from 'react';
import FilterDropdown from '../../components/Dropdown/FilterDropdown';
import SortingDropdown from '../../components/Dropdown/SortingDropdown';
import ProductCard from '../../components/productCard/ProductCard';
import { useGetAllProductsQuery } from '../../redux/features/products/productsApi';
import { TProduct } from '../../types';
import Container from '../../utils/Container';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

const Product = () => {
   const [sort, setSort] = useState('');
   const [category, setCategory] = useState('');
   const searchTerm = useAppSelector((state: RootState) => state.product.searchTerm);

   const { data, isLoading, isError } = useGetAllProductsQuery({
      sort,
      category,
      searchTerm,
   });

   if (isLoading) {
      // fixme --> loading component
      return <p>Loading....</p>;
   }
   if (isError) {
      // fixme --> error handling
      return <p>Something went wrong !</p>;
   }

   const products = data?.data;

   return (
      <Container className="my-12">
         <div className="flex justify-between">
            <FilterDropdown setCategory={setCategory} />
            <SortingDropdown setSort={setSort} />
         </div>
         <h2> Product </h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-2">
            {products?.map((product: TProduct) => (
               <ProductCard key={product._id} {...product} />
            ))}
         </div>
      </Container>
   );
};

export default Product;
