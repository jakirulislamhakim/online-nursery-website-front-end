import { Helmet } from 'react-helmet';

const PageTitle = ({ title }: { title: string }) => {
   return (
      <Helmet>
         <title>{`Nursery Plant || ${title}`}</title>
      </Helmet>
   );
};

export default PageTitle;
