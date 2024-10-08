import React, { useState } from 'react';
import { pages, searchTerm } from '../../redux/features/products/productSlice';
import { useAppDispatch } from '../../redux/hooks';

const SearchBarIcon = () => {
   const [searchInputValue, setSearchInputValue] = useState('');

   const dispatch = useAppDispatch();

   const handleSearch = () => {
      if (!searchInputValue) return;
      dispatch(searchTerm(searchInputValue));
      dispatch(pages(1));
      setSearchInputValue('');

      // Close the modal after search
      const modal = document.getElementById('my_modal_2') as HTMLDialogElement;
      if (modal) {
         modal.close();
      }
   };

   const openModal = () => {
      setSearchInputValue(''); // Reset input before opening modal
      const dialog = document.getElementById('my_modal_2') as HTMLDialogElement;
      if (dialog) {
         dialog.showModal();
      }
   };

   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   };

   return (
      <>
         <label className="input input-bordered flex items-center gap-2 pr-2 hidden lg:flex">
            <input
               onChange={e => setSearchInputValue(e.target.value)}
               onKeyDown={handleKeyDown}
               value={searchInputValue}
               type="text"
               className="grow p-1 font-medium"
               placeholder="Search"
            />
            <svg
               onClick={handleSearch}
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 16 16"
               fill="currentColor"
               className="size-6 opacity-70 w-full h-[32px] cursor-pointer "
            >
               <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
               />
            </svg>
         </label>
         {/* Open the modal using document.getElementById('ID').showModal() method */}
         <button
            className="btn btn-success btn-outline btn-sm cursor-pointer border rounded-lg lg:hidden"
            onClick={openModal}
         >
            {' '}
            <svg
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 16 16"
               fill="currentColor"
               className="  size-6 opacity-70 w-full"
            >
               <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
               />
            </svg>
         </button>
         <dialog id="my_modal_2" className="modal">
            <div className="modal-box max-w-[350px] p-5 border-2 border-red-400 flex items-center justify-center">
               <label className="input input-bordered flex items-center gap-2 pr-2 max-w-[300px]">
                  <input
                     onChange={e => setSearchInputValue(e.target.value)}
                     onKeyDown={handleKeyDown}
                     value={searchInputValue}
                     type="text"
                     className="grow font-medium "
                     placeholder="Search"
                  />
                  <svg
                     onClick={handleSearch}
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 16 16"
                     fill="currentColor"
                     className="size-6 opacity-70 w-full h-[32px] cursor-pointer "
                  >
                     <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd"
                     />
                  </svg>
               </label>
            </div>
            <form method="dialog" className="modal-backdrop">
               <button>close</button>
            </form>
         </dialog>
      </>
   );
};

export default SearchBarIcon;
