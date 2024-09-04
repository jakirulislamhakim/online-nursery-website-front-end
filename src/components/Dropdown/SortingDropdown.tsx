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
         className="select select-bordered w-full max-w-xs"
      >
         <option value="">Default Sort</option>
         <option value="-rating">Sort by popularity</option>
         <option value="price">Sort by price: low to high</option>
         <option value="-price">Sort by price: high to low</option>
      </select>
   );
};

export default SortingDropdown;
