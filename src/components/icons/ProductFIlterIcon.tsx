const ProductFIlterIcon = () => {
   return (
      <div className="dropdown dropdown-hover dropdown-end">
         <div
            tabIndex={0}
            role="button"
            className="btn btn-success btn-outline btn-sm lg:btn-md m-1"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               strokeWidth="1.5"
               stroke="currentColor"
               className="size-6"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
               />
            </svg>
         </div>
         <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
         >
            <li>
               <a>Item 1</a>
            </li>
            <li>
               <a>Item 2</a>
            </li>
         </ul>
      </div>
   );
};

export default ProductFIlterIcon;
