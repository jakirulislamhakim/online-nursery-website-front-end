import StarRatings from 'react-star-ratings';
import { TProduct } from '../../types';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = (product: TProduct) => {
   const { category, description, image, price, quantity, rating, title } = product;

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
                  Quantity: <span className="font-semibold">{quantity}</span>
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
            <div className="card-actions justify-between items-center mt-4">
               <div className="flex gap-2 items-center border border-black rounded-[4px] justify-center">
                  <button className="hover:bg-green-400 px-2 text-xl border-r">
                     -
                  </button>
                  <p>10</p>
                  <button className="hover:bg-green-400 px-2 text-xl border-l">
                     +
                  </button>
               </div>
               <button className="tooltip" data-tip="Add to cart">
                  <FaCartPlus className="text-4xl bg-black text-white rounded-full p-2" />
               </button>
            </div>
         </div>
      </div>
   );
};

export default ProductCard;
