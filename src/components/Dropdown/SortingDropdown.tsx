import { useState } from 'react';

type TSortProps = {
   setSort: (value: string) => void;
};

const SortingDropdown = ({ setSort }: TSortProps) => {
   const [selectedOption, setSelectedOption] = useState('');

   const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSelectedOption(value);
      setSort(value);
   };

   return (
      <select
         value={selectedOption}
         onChange={handleSelectChange}
         className="select select-bordered w-full max-w-[300px] select-sm"
      >
         <option className="text-[10px] md:text-sm" value="">
            Default Sort
         </option>
         <option className="text-[10px] md:text-sm" value="-rating">
            Sort by popularity
         </option>
         <option className="text-[10px] md:text-sm" value="price">
            Sort by price: low to high
         </option>
         <option className="text-[10px] md:text-sm" value="-price">
            Sort by price: high to low
         </option>
      </select>
   );
};

export default SortingDropdown;
