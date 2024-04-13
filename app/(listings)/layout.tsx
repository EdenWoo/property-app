import React, { FC } from 'react';
import Header from '@/app/components/Header';

export interface CommonLayoutProps {
  children?: React.ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className=''>{children}</div>
    </div>
  );
};

export default CommonLayout;
