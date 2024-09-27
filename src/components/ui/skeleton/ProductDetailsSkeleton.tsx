const ProductDetailsSkeleton = () => {
   return (
      <div className="py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden animate-pulse">
               <div className="lg:flex">
                  {/* Image Skeleton */}
                  <div className="lg:w-1/2">
                     <div className="h-64 sm:h-96 lg:h-full bg-gray-300"></div>
                  </div>

                  {/* Content Skeleton */}
                  <div className="lg:w-1/2 p-8 lg:p-12">
                     {/* Title Skeleton */}
                     <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>

                     {/* Rating Skeleton */}
                     <div className="flex items-center mb-6">
                        <div className="flex space-x-1">
                           {[...Array(5)].map((_, i) => (
                              <div
                                 key={i}
                                 className="w-5 h-5 bg-gray-300 rounded-full"
                              ></div>
                           ))}
                        </div>
                        <div className="w-24 h-4 bg-gray-300 rounded ml-3"></div>
                     </div>

                     {/* Description Skeleton */}
                     <div className="space-y-2 mb-8">
                        <div className="h-4 bg-gray-300 rounded w-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
                     </div>

                     {/* Product Details Skeleton */}
                     <div className="mb-8 space-y-4">
                        {[...Array(3)].map((_, i) => (
                           <div key={i} className="flex items-center">
                              <div className="w-6 h-6 bg-gray-300 rounded-full mr-3"></div>
                              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                           </div>
                        ))}
                     </div>

                     {/* Price Skeleton */}
                     <div className="flex items-baseline mb-8">
                        <div className="h-8 bg-gray-300 rounded w-24 mr-4"></div>
                        <div className="h-6 bg-gray-300 rounded w-32"></div>
                     </div>

                     {/* Quantity Selector Skeleton */}
                     <div className="flex items-center mb-8">
                        <div className="w-20 h-6 bg-gray-300 rounded mr-4"></div>
                        <div className="w-32 h-10 bg-gray-300 rounded"></div>
                     </div>

                     {/* Add to Cart Button Skeleton */}
                     <div className="w-full h-12 bg-gray-300 rounded"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductDetailsSkeleton;
