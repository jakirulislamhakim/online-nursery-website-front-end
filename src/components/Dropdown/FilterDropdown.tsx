import React from 'react';
import { useGetAllCategoryQuery } from '../../redux/features/categories/categoriesApi';
import { searchTerm } from '../../redux/features/products/productSlice';
import { useAppDispatch } from '../../redux/hooks';
import { TCategory } from '../../types/category.types';

type TFilterProps = {
   setCategory: (category: string) => void;
};

const FilterDropdown = ({ setCategory }: TFilterProps) => {
   const { data, isLoading } = useGetAllCategoryQuery(undefined);
   const dispatch = useAppDispatch();

   if (isLoading) {
      return <p>Loading.....</p>;
   }

   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCategory(e.target.value);
      dispatch(searchTerm(''));
   };

   return (
      <select
         onChange={handleCategoryChange}
         className="select select-bordered w-full max-w-xs"
         defaultValue=""
      >
         <option disabled>Filter by category</option>
         <option value={''}>All category</option>
         {data?.data?.map((category: TCategory) => (
            <option key={category._id} value={category.category}>
               {category.category}
            </option>
         ))}
      </select>
   );
};

export default FilterDropdown;
