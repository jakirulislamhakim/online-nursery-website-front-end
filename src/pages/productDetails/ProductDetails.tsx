import { Leaf, Sun, Droplet, ShoppingCart, Minus, Plus } from 'lucide-react';
import StarRatings from 'react-star-ratings';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
   addToCart,
   decrementQuantity,
   incrementQuantity,
} from '../../redux/features/addToCart/addToCartSlice';
import { RootState } from '../../redux/store';
import PageTitle from '../../components/PageTitle';
import { useGetAProductQuery } from '../../redux/features/products/productsApi';
import { useNavigate, useParams } from 'react-router-dom';
import ProductDetailsSkeleton from '../../components/ui/skeleton/ProductDetailsSkeleton';
import { TProduct } from '../../types';

// ts type
type TActionsType = 'increment' | 'decrement';

const ProductDetails = () => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const { products } = useAppSelector((state: RootState) => state.cart);
   const { id } = useParams();
   console.log(id);
   const { data, isError, isLoading } = useGetAProductQuery(id as string);

   const product = data?.data;

   const cartItem = products.find(item => product?._id === item._id);
   const productQuantity = cartItem?.selectQuantity ?? 1;

   const handleQuantityUpdate = (actionsType: TActionsType, id: string) => {
      if (actionsType === 'increment') {
         dispatch(incrementQuantity(id));
      } else if (actionsType === 'decrement') {
         dispatch(decrementQuantity(id));
      }
   };

   const handleAddToCart = (selectedProduct: TProduct) => {
      dispatch(
         addToCart({
            ...selectedProduct,
            selectQuantity: 1,
         })
      );
      navigate('/cart');
   };

   if (isLoading) {
      return <ProductDetailsSkeleton />;
   }

   if (isError) {
      if (isError) {
         return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
               <div className="w-full max-w-md">
                  <h2 className="font-bold mb-2">Error</h2>
                  <p>
                     There was an error loading the product. Please try again later.
                  </p>
               </div>
            </div>
         );
      }
   }

   return (
      <>
         <PageTitle title="Product Details" />
         <div className=" py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto border rounded-lg border-green-300">
               <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
                  <div className="lg:flex">
                     <div className="lg:w-1/2">
                        <div className="h-64 sm:h-96 lg:h-full relative">
                           <img
                              className="absolute inset-0 w-full h-full object-cover object-center"
                              src={product?.image}
                              alt={product?.title}
                           />
                           <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                           <div className="absolute top-4 left-4 bg-white py-1 px-2 rounded-full text-sm font-semibold text-gray-700">
                              {product?.category}
                           </div>
                        </div>
                     </div>
                     <div className="lg:w-1/2 p-4 lg:p-12">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 leading-tight mb-2">
                           {product?.title}
                        </h1>
                        <div className="flex items-center mb-6">
                           <div className="flex items-center">
                              <StarRatings
                                 rating={product?.rating}
                                 starRatedColor="gold"
                                 numberOfStars={5}
                                 name="rating"
                                 starDimension="18px"
                                 starSpacing="0px"
                                 starEmptyColor="gray"
                              />
                           </div>
                           <span className="ml-3 text-sm text-gray-500">
                              {product?.rating} out of 5 stars
                           </span>
                        </div>
                        <p className="text-lg md:text-xl text-green-600 mb-8">
                           {product?.description}
                        </p>

                        <div className="mb-8 space-y-4">
                           <div className="flex items-center text-gray-700">
                              <Sun className="h-6 w-6 mr-3 text-yellow-500" />
                              <span>{product?.lightRequirements}</span>
                           </div>
                           <div className="flex items-center text-gray-700">
                              <Leaf className="h-6 w-6 mr-3 text-green-500" />
                              <span>{product?.growthRate} Growth Rate</span>
                           </div>
                           <div className="flex items-center text-gray-700">
                              <Droplet className="h-6 w-6 mr-3 text-blue-500" />
                              <span>{product?.soilType}</span>
                           </div>
                        </div>

                        <div className="flex items-baseline mb-8">
                           <span className="text-4xl font-bold text-gray-900">
                              ${product?.price}
                           </span>
                           <span className="ml-4 text-lg text-gray-500">
                              In stock: {product?.quantity}
                           </span>
                        </div>

                        <div className="flex items-center mb-8">
                           <label
                              htmlFor="quantity"
                              className="mr-4 text-gray-700 font-medium"
                           >
                              Quantity:
                           </label>
                           {/* <div className="flex items-center border rounded-lg overflow-hidden"> */}
                           <div className="flex items-center border rounded-full border-green-400">
                              <button
                                 disabled={!cartItem}
                                 className="btn btn-circle btn-sm btn-outline hover:bg-green-500"
                                 onClick={() =>
                                    handleQuantityUpdate(
                                       'decrement',
                                       cartItem?._id as string
                                    )
                                 }
                              >
                                 <Minus size={16} />
                              </button>
                              <span className="mx-2 w-8 text-lg text-center ">
                                 {productQuantity}
                              </span>
                              <button
                                 disabled={!cartItem}
                                 className="btn btn-circle btn-sm btn-outline hover:bg-green-500"
                                 onClick={() =>
                                    handleQuantityUpdate(
                                       'increment',
                                       cartItem?._id as string
                                    )
                                 }
                              >
                                 <Plus size={16} />
                              </button>
                           </div>
                           {/* </div> */}
                        </div>

                        <button
                           onClick={() => handleAddToCart(product)}
                           disabled={!product?.quantity}
                           className="btn btn-sm lg:btn-md btn-success text-base font-semibold text-white w-full flex items-center justify-center"
                        >
                           <ShoppingCart className="w-5 h-5 mr-2" />
                           Add to Cart
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default ProductDetails;
