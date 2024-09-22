import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';

const ErrorPage: React.FC = () => {
   const error = useRouteError();
   const navigate = useNavigate();

   let errorMessage: string;

   if (isRouteErrorResponse(error)) {
      // error is type `ErrorResponse`
      errorMessage = error.statusText || error.data?.message || 'Unknown error';
   } else if (error instanceof Error) {
      errorMessage = error.message;
   } else {
      console.error(error);
      errorMessage = 'Unknown error';
   }

   return (
      <div className="hero min-h-screen bg-base-200">
         <div className="hero-content text-center">
            <div className="max-w-md">
               <h1 className="text-5xl font-bold text-error">Oops!</h1>
               <p className="py-6 text-xl">
                  Sorry, an unexpected error has occurred.
               </p>
               <p className="text-lg font-semibold mb-6">{errorMessage}</p>
               <div className="flex gap-2 justify-center">
                  <button
                     onClick={() => navigate(-1)}
                     className="btn btn-sm bg-green-500 text-white hover:text-red-400"
                  >
                     Go back
                  </button>
                  <button
                     onClick={() => navigate('/')}
                     className="btn btn-sm  bg-green-500 text-white hover:text-red-400"
                  >
                     Go back to homepage
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ErrorPage;
