import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link as UILink, LinkProps as UILinkProps } from '@material-ui/core';

interface LinkProps extends UILinkProps {
  to: string;
}

const Link: React.FC<LinkProps> = (props) => {
  return (
    <UILink component={RouterLink} {...props}>
      {props.children}
    </UILink>
  );
};

export default Link;
