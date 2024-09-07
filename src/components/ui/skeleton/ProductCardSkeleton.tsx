const ProductCardSkeleton = () => {
   return (
      <div className="card bg-base-100 mx-auto shadow-xl">
         <figure className="h-[200px] w-[250px] lg:w-[280px] bg-cover">
            <div className="w-full h-full  skeleton"></div>
         </figure>
         <div className="card-body">
            <h2 className="card-title">
               <div className="h-6 w-3/4 bg-gray-200 skeleton"></div>
            </h2>
            <div className="mt-2">
               <p className="h-4 w-full bg-gray-200 animate-pulse"></p>
               <p className="h-4 w-5/6 mt-2 bg-gray-200 animate-pulse"></p>
            </div>
            <div className="flex justify-between mt-2">
               <p>
                  <span className="h-4 w-20 bg-gray-200 animate-pulse block"></span>
               </p>
               <p>
                  <span className="h-4 w-20 bg-gray-200 animate-pulse block"></span>
               </p>
            </div>
            <div className="flex items-center mt-2">
               <div className="h-4 w-24 bg-gray-200 animate-pulse"></div>
               <span className="h-4 w-6 ml-2 bg-gray-200 animate-pulse"></span>
            </div>
            <div className="card-actions justify-between items-center mt-4">
               <div className="flex gap-2 items-center border border-black rounded-[4px] justify-center">
                  <div className="h-8 w-16 bg-gray-200 animate-pulse"></div>
               </div>
               <div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
         </div>
      </div>
   );
};

export default ProductCardSkeleton;
