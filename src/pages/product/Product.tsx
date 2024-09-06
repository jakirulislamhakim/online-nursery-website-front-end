import { useState } from 'react';
import FilterDropdown from '../../components/Dropdown/FilterDropdown';
import SortingDropdown from '../../components/Dropdown/SortingDropdown';
import ProductCard from '../../components/productCard/ProductCard';
import { useGetAllProductsQuery } from '../../redux/features/products/productsApi';
import { TProduct } from '../../types';
import Container from '../../utils/Container';
import { useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';
import Paginate from '../../components/paginate/Paginate';

const Product = () => {
   const [sort, setSort] = useState('');
   const [category, setCategory] = useState('');
   // const [page, setPage] = useState(1);
   const limit = 12; // set direct limit value
   // searchTerm value from redux state
   const searchTerm = useAppSelector((state: RootState) => state.product.searchTerm);
   // page value from redux state
   const page = useAppSelector((state: RootState) => state.product.pages);

   const { data, isLoading, isError } = useGetAllProductsQuery({
      sort,
      category,
      searchTerm,
      page,
      limit,
   });

   if (isLoading) {
      // fixme --> loading component
      return <p>Loading....</p>;
   }
   if (isError) {
      // fixme --> error handling
      return <p>Something went wrong !</p>;
   }

   const products = data?.data?.products;

   if (!products) {
      return (
         <p>
            No products found for <span className='text-red-500 font-medium'>[ {searchTerm} ]</span>
         </p>
      );
   }

   const totalProductsLength = data?.data?.totalProductsCount;

   const needTotalPage = Math.ceil(totalProductsLength / limit);

   return (
      <Container className="my-12">
         <div className="flex justify-between gap-4">
            <FilterDropdown setCategory={setCategory} />
            <SortingDropdown setSort={setSort} />
         </div>
         <h2> Product </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products?.map((product: TProduct) => (
               <ProductCard key={product._id} {...product} />
            ))}
         </div>
         {needTotalPage > 1 && <Paginate needTotalPage={needTotalPage} />}
      </Container>
   );
};

export default Product;
