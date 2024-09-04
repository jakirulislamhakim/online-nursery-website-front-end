import { NavLink, useLocation } from 'react-router-dom';
import SearchBarIcon from '../icons/SearchBarIcon';
import CheckoutIcon from '../icons/CheckoutIcon';
import DropdownMenu from '../icons/DropdownMenu';

const Navbar = () => {
   const location = useLocation();

   const navItems = (
      <>
         <li>
            <NavLink to={'/'}>Home</NavLink>
         </li>
         <li>
            <NavLink to={'/products'}>Products</NavLink>
         </li>
         <li>
            <NavLink to={'/cart'}>Cart</NavLink>
         </li>
         <li>
            <NavLink to={'/checkout'}>Checkout</NavLink>
         </li>
      </>
   );

   return (
      <div className="bg-green-200 shadow-xl border-b-2 border-base-200 lg:rounded-xl">
         <div className="max-w-screen-2xl mx-auto ">
            <nav className="navbar">
               <div className="navbar-start  p-0  lg:w-1/3">
                  <div className="dropdown z-50">
                     <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                     >
                        <DropdownMenu />
                     </div>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow uppercase"
                     >
                        {navItems}
                     </ul>
                  </div>
                  <img
                     src="https://i.ibb.co/kx8YVrF/Screenshot-80.png"
                     alt="logo"
                     className="size-[40px] md:size-[60px] lg:size-[100px] rounded-full"
                  />
                  {/* <a className="btn btn-ghost text-xl">Anisha</a> */}
               </div>
               <div className="navbar-center uppercase hidden lg:flex">
                  <ul className="menu menu-horizontal ">{navItems}</ul>
               </div>
               <div className="navbar-end gap-1 md:gap-8">
                  {location.pathname === '/products' && <SearchBarIcon />}
                  {/* {location.pathname === '/products' && <ProductFIlterIcon />} */}
                  {/* <LoginIcon /> */}
                  <CheckoutIcon />
               </div>
            </nav>
         </div>
      </div>
   );
};

export default Navbar;
