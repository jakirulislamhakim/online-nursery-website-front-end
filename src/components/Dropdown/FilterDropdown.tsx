import React from 'react';
import { useGetAllCategoryQuery } from '../../redux/features/categories/categoriesApi';
import { pages, searchTerm } from '../../redux/features/products/productSlice';
import { useAppDispatch } from '../../redux/hooks';
import { TCategory } from '../../types/category.types';
import Container from '../../utils/Container';

type TFilterProps = {
   setCategory: (category: string) => void;
};

const FilterDropdown = ({ setCategory }: TFilterProps) => {
   const { data, isLoading } = useGetAllCategoryQuery(undefined);
   const dispatch = useAppDispatch();

   if (isLoading) {
      return (
         <Container className="ml-0">
            <div className="skeleton h-5 w-[200px]"></div>
         </Container>
      );
   }

   const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setCategory(e.target.value);
      dispatch(searchTerm(''));
      dispatch(pages(1));
   };

   return (
      <select
         onChange={handleCategoryChange}
         className="select select-bordered w-full max-w-[200px] select-sm"
         defaultValue=""
      >
         <option className="text-[10px] md:text-sm" disabled>
            Filter by category
         </option>
         <option className="text-[10px] md:text-sm" value={''}>
            All category
         </option>
         {data?.data?.map((category: TCategory) => (
            <option
               className="text-[10px] md:text-sm"
               key={category._id}
               value={category.category}
            >
               {category.category}
            </option>
         ))}
      </select>
   );
};

export default FilterDropdown;
