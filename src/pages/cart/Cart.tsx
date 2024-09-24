import { RootState } from '../../redux/store';
import { useAppSelector } from '../../redux/hooks';
import Container from '../../utils/Container';
import EmptyCart from '../../components/EmptyCart';
import CartTable from '../../components/CartTable';
import OrderSummary from '../../components/OrderSummary';
import PageTitle from '../../components/PageTitle';

const Cart = () => {
   const { products } = useAppSelector((state: RootState) => state.cart);

   return (
      <>
         <PageTitle title="Cart" />
         <div className="min-h-screen py-8">
            <Container className="px-4">
               <h1 className="text-3xl font-bold mb-8 text-center text-green-800">
                  Your Cart
               </h1>
               {products.length === 0 ? (
                  <EmptyCart />
               ) : (
                  <div className="bg-white rounded-lg shadow-lg p-6 gap-2 border-2 border-green-300 flex flex-col md:flex-row">
                     <CartTable />
                     <OrderSummary />
                  </div>
               )}
            </Container>
         </div>{' '}
      </>
   );
};

export default Cart;
