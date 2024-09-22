import Container from '../utils/Container';

const AboutUs = () => {
   return (
      <section className="py-12 bg-green-50">
         <Container className="px-4">
            <h2 className="text-3xl md:text-4xl text-center font-bold mb-6 text-green-800">
               About Us
            </h2>
            <p className="text-base md:text-lg  text-center mb-10 text-gray-700">
               Welcome to our online nursery! We are passionate about bringing
               greenery into your life. Whether you're a seasoned plant lover or just
               starting your plant journey, we have a wide range of plants and
               gardening tools to help you cultivate your green space. Our team is
               dedicated to providing high-quality plants and excellent customer
               service.
            </p>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8">
               <div className="lg:w-1/3 w-full">
                  <img
                     src="https://soltech.com/cdn/shop/articles/ca-ventures-offices-chicago-cannondesign-8-700x4011_1600x.jpg?v=1652284296"
                     alt="Alisha Nursery"
                     className="rounded-lg shadow-md"
                  />
               </div>
               <div className="lg:w-2/3 text-left">
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-green-700">
                     Our Mission
                  </h3>
                  <p className="text-gray-600">
                     Our mission is to provide plant enthusiasts with a convenient,
                     affordable, and delightful way to access high-quality plants and
                     gardening products. We believe in sustainability, and we ensure
                     our plants are grown in eco-friendly environments. We want to
                     make the world a greener, more beautiful place, one plant at a
                     time.
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-4 text-green-700">
                     Why Choose Us?
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600">
                     <li>Wide selection of indoor and outdoor plants</li>
                     <li>Eco-friendly packaging</li>
                     <li>Free consultation with gardening experts</li>
                     <li>Fast and reliable shipping</li>
                  </ul>
               </div>
            </div>
         </Container>
      </section>
   );
};

export default AboutUs;
