import { useGetAllProductsQuery } from '../../redux/features/products/productsApi';
import Container from '../../utils/Container';

const Product = () => {
   const { data } = useGetAllProductsQuery(undefined);
   console.log(data);

   return (
      <Container>
         <h2> Product Component </h2>
      </Container>
   );
};

export default Product;
