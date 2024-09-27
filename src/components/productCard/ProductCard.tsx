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

type TActionsType = 'increment' | 'decrement';

const ProductCard = (product: TProduct) => {
   const navigate = useNavigate();
   const { category, description, image, price, quantity, rating, title, _id } =
      product;
   const dispatch = useAppDispatch();
   const { products } = useAppSelector((state: RootState) => state.cart);
   const item = products.find(product => product._id === _id);
   const perProductQuantity = item?.selectQuantity ?? 0;

   const handleAddToCart = (selectedProduct: TProduct, e: React.MouseEvent) => {
      e.stopPropagation();
      dispatch(
         addToCart({
            ...selectedProduct,
            selectQuantity: 1,
         })
      );
      navigate('/cart');
   };

   const handleQuantityUpdate = (
      actionsType: TActionsType,
      id: string,
      e: React.MouseEvent
   ) => {
      e.stopPropagation();
      if (actionsType === 'increment') {
         dispatch(incrementQuantity(id));
      } else if (actionsType === 'decrement') {
         dispatch(decrementQuantity(id));
      }
   };

   const handleNavigateDetailsPage = (id: string) => {
      navigate(`/products/${id}`);
   };

   return (
      // <Link to={`/products/${_id}`}>
      <div
         onClick={() => handleNavigateDetailsPage(_id)}
         className="card bg-base-100  mx-auto shadow-xl hover:cursor-pointer"
      >
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
                     onClick={e => handleQuantityUpdate('decrement', _id, e)}
                     className="hover:bg-green-400 px-2 text-xl border-r"
                  >
                     -
                  </button>
                  <p>
                     {perProductQuantity}
                     {/* dynamically show increment or decrement value */}
                  </p>
                  <button
                     onClick={e => handleQuantityUpdate('increment', _id, e)}
                     className="hover:bg-green-400 px-2 text-xl border-l"
                  >
                     +
                  </button>
               </div>
               {quantity > 0 && (
                  <button
                     className={`tooltip btn btn-sm btn-success text-base font-semibold text-white`}
                     data-tip="Add to cart"
                     onClick={e => handleAddToCart(product, e)}
                  >
                     <ShoppingCart size={18} />
                  </button>
               )}
            </div>
         </div>
      </div>
      // </Link>
   );
};

export default ProductCard;
