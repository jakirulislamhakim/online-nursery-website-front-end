import { ReactNode } from 'react';

type TContainerProps = {
   children: ReactNode;
   cssClass?: string;
};

const Container = ({ children, cssClass }: TContainerProps) => {
   return (
      <div className={`max-w-screen-2xl mx-auto p-2 border-2 ${cssClass}`}>
         {children}
      </div>
   );
};

export default Container;
