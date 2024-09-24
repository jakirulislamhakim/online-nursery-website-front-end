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
import ProductSkeleton from '../../components/ui/skeleton/ProductSkeleton';
import PageTitle from '../../components/PageTitle';

const Product = () => {
   const [sort, setSort] = useState('');
   const [category, setCategory] = useState('');
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
      return <ProductSkeleton />;
   }

   // handle error
   if (isError) {
      return (
         <div className="h-72 flex justify-center items-center text-xl text-red-500 ">
            <p> 'Something went wrong'!</p>
         </div>
      );
   }

   const products = data?.data?.products;

   //small component for no products found by search or category
   const NoProductsFound = () => {
      if (!products) {
         return (
            <div className="flex justify-center h-32 items-center md:text-xl text-red-400">
               <p>
                  No products found for this{' '}
                  {(searchTerm && 'search') || (category && 'category')} {`=> `}
                  {`${searchTerm}` || category}
               </p>
            </div>
         );
      }
   };

   const totalProductsLength = data?.data?.totalProductsCount;

   const needTotalPage = Math.ceil(totalProductsLength / limit);

   return (
      <>
         <PageTitle title="Products" />
         <Container className="md:my-12">
            <div className="flex justify-center">
               <h2 className="text-2xl md:text-4xl font-semibold my-4 border-b-2 inline-block p-2  border-green-500 text-green-800">
                  Product's
               </h2>
            </div>
            <div className="flex justify-between gap-4 mb-2">
               <FilterDropdown setCategory={setCategory} />
               <SortingDropdown setSort={setSort} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
               {products?.map((product: TProduct) => (
                  <ProductCard key={product._id} {...product} />
               ))}
            </div>
            <NoProductsFound />
            {needTotalPage > 1 && <Paginate needTotalPage={needTotalPage} />}
         </Container>{' '}
      </>
   );
};

export default Product;
