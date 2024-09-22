import { Link } from 'react-router-dom';

const TreePlantOnlineStoreSection = () => {
   return (
      <section className="bg-gradient-to-r from-green-100 to-green-200 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 my-12">
         <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-green-600 mb-2 md:mb-3">
               Check our best tree plants
            </h3>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
               Buy Tree Plant Online
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8">
               Want to buy tree plants online? See our latest plants. You are one
               step closer to getting the best trees.
            </p>
            <div className="mt-6 sm:mt-8">
               <Link
                  to={'/products'}
                  className="btn btn-primary bg-green-600 hover:bg-green-700 border-none text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm sm:text-base"
               >
                  Browse Plants
               </Link>
            </div>
         </div>
      </section>
   );
};

export default TreePlantOnlineStoreSection;
