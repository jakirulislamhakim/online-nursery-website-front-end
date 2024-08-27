import { ReactNode } from 'react';

type TContainerProps = {
   children: ReactNode;
   className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
   return (
      <div
         className={`max-w-screen-2xl mx-auto px-1 md:px-2 ${
            className ? className : ''
         }`}
      >
         {children}
      </div>
   );
};

export default Container;
