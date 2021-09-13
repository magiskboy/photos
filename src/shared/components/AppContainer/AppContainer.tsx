import React from 'react';
import useStyle from './styles';

const AppContainer: React.FC = ({ children }) => {
  const style = useStyle();
  return <div className={style.root}>{children}</div>;
};

export default AppContainer;
