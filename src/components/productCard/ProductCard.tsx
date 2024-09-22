import StarRatings from 'react-star-ratings';
import { TProduct } from '../../types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
   addToCart,
   decrementQuantity,
   incrementQuantity,
} from '../../redux/features/addToCart/addToCartSlice';
import { RootState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const ProductCard = (product: TProduct) => {
   const navigate = useNavigate();
   const { category, description, image, price, quantity, rating, title, _id } =
      product;
   const dispatch = useAppDispatch();
   const { products } = useAppSelector((state: RootState) => state.cart);
   const item = products.find(product => product._id === _id);
   const perProductQuantity = item?.selectQuantity || 0;

   const handleAddToCart = (selectedProduct: TProduct) => {
      dispatch(
         addToCart({
            ...selectedProduct,
            selectQuantity: 1,
         })
      );
      navigate('/cart');
   };

   return (
      <div className="card bg-base-100  mx-auto shadow-xl">
         <figure className="max-h-[200px] md:max-h-[300px] bg-cover">
            <img className="w-full h-full" src={image} alt={category} />
         </figure>
         <div className="card-body ">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="flex mt-1 md:mt-2">
               <p className="">
                  Price:
                  <span className="font-semibold ">{price} $</span>
               </p>
               <p className="text-end">
                  Quantity:
                  <span className="font-semibold">
                     {quantity === 0 ? <del>Stock out</del> : quantity}
                  </span>
               </p>
            </div>
            <div className="flex items-center">
               <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  name="rating"
                  starDimension="18px"
                  starSpacing="0px"
                  starEmptyColor="gray"
               />
               <span>({rating})</span>
            </div>
            <div
               className={`card-actions ${
                  perProductQuantity ? 'justify-between' : 'justify-end'
               } items-center mt-4 `}
            >
               <div
                  className={`flex gap-2 items-center border border-black rounded-[4px] justify-center ${
                     perProductQuantity === 0 && 'hidden'
                  }`}
               >
                  <button
                     onClick={() => dispatch(decrementQuantity(_id))}
                     className="hover:bg-green-400 px-2 text-xl border-r"
                  >
                     -
                  </button>
                  <p>
                     {perProductQuantity}
                     {/* dynamically show increment or decrement value */}
                  </p>
                  <button
                     onClick={() => dispatch(incrementQuantity(_id))}
                     className="hover:bg-green-400 px-2 text-xl border-l"
                  >
                     +
                  </button>
               </div>
               <button
                  className={`tooltip btn btn-sm btn-success text-base font-semibold text-white ${
                     quantity === 0 && 'hidden'
                  }`}
                  data-tip="Add to cart"
                  onClick={() => handleAddToCart(product)}
               >
                  {/* <FaCartPlus className="text-4xl bg-black text-white rounded-full p-2" /> */}
                  <ShoppingCart size={18} />
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
