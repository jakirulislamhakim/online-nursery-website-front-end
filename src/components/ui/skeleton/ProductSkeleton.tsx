import Container from "../../../utils/Container";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductSkeleton = () => {
   return (
      <Container className=" my-12">
         <div className="flex justify-center my-6">
            <h2 className="skeleton h-16  w-[200px]"></h2>
         </div>
         <div className="flex justify-between gap-4 mb-2 px-10">
            <div className="skeleton h-5 w-[200px]"></div>
            <div className="skeleton h-5 w-[200px]"></div>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
         </div>{' '}
      </Container>
   );
};

export default ProductSkeleton;
