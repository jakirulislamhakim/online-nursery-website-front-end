import { NavLink, Outlet } from 'react-router-dom';
import Container from '../../utils/Container';

const Dashboard = () => {
   return (
      <div className="drawer lg:drawer-open max-w-[2100px] mx-auto">
         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

         {/* Main Content Area */}
         <div className="drawer-content flex flex-col items-center lg:items-start justify-start lg:justify-between w-full ">
            {/* Page content here */}
            <div className="w-full flex justify-between items-center bg-green-500 h-20">
               {/* <h1 className="text-2xl font-bold">Dashboard</h1> */}
               <label
                  htmlFor="my-drawer-2"
                  className="btn btn-primary drawer-button lg:hidden"
               >
                  Open Drawer
               </label>
            </div>

            {/* Main content can go here */}
            <div className="flex-grow w-full">
               {/* Your main content */}
               <Container>
                  <Outlet></Outlet>
               </Container>
            </div>
         </div>

         {/* Drawer Sidebar */}
         <div className="drawer-side">
            <label
               htmlFor="my-drawer-2"
               aria-label="close sidebar"
               className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-60 lg:w-72 p-4">
               {/* Sidebar content here */}
               <li>
                  <NavLink to={'/'}>Home</NavLink>
               </li>
               <li>
                  <details open>
                     <summary>Product Management</summary>
                     <ul>
                        <li>
                           <NavLink to={'/dashboard/product-table'}>
                              Product Table
                           </NavLink>
                        </li>
                        <li>
                           <NavLink to={'/dashboard/add-product'}>
                              Add product
                           </NavLink>
                        </li>
                     </ul>
                  </details>
               </li>
               <li>
                  <details>
                     <summary>Category Management</summary>
                     <ul>
                        <li>
                           <a>Submenu 1</a>
                        </li>
                        <li>
                           <a>Submenu 2</a>
                        </li>
                     </ul>
                  </details>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Dashboard;
