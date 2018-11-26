import React from 'react';
import classNames from 'classnames';
import { Route, Link as BaseLink } from 'react-router-dom';
import styles from './Link.module.css';

const Link = ({
  to,
  children,
}) => (
  <Route
    path={to}
    exact
    children={({ match }) => (
      <BaseLink className={classNames(styles.link, { [styles.active]: match })} to={to}>
        {children}
      </BaseLink>
    )}
  />
);

export default Link;
