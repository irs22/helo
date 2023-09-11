import React, { FC } from 'react';

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tab: FC<TabProps> = ({ label, children }) => {
  return <div>{children}</div>;
};

export default Tab;
