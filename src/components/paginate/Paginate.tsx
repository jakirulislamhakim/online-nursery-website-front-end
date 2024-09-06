import { pages } from '../../redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { RootState } from '../../redux/store';

type TPaginateProps = {
   needTotalPage: number;
};

const Paginate = ({ needTotalPage }: TPaginateProps) => {
   // create a dynamic array for pages [1,2,3...]
   const pageForPagination = Array.from({ length: needTotalPage }, (_, i) => i + 1);

   const dispatch = useAppDispatch();
   // page value from redux state
   const page = useAppSelector((state: RootState) => state.product.pages);

   return (
      <div className="join flex justify-center items-center my-6 ">
         <div className="border-2 border-green-500 mb-4">
            {pageForPagination?.map(item => (
               <button
                  onClick={() => dispatch(pages(item))}
                  key={item}
                  className={`join-item btn   ${
                     page === item ? 'btn-active border-x-green-400' : ''
                  }`}
               >
                  {item}
               </button>
            ))}
         </div>
      </div>
   );
};

export default Paginate;
