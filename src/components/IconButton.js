import React from 'react';
import cn from 'classnames';
import styles from '../Styles/Pages.module.scss';

const colorMap = {
  primary: 'bg-amber-600 text-white',
  secondary: 'bg-slate-800 text-slate-400',
};

const sizeMap = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
};

function IconButton({ intent = 'primary', size = 'md', className, ...props }) {
  const colorClass = colorMap[intent];
  const sizeClass = sizeMap[size];
  const classes = cn(
    'rounded-full flex items-center justify-center ring-offset-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 disabled:opacity-60',
    colorClass,
    sizeClass,
    className
  );

  return <button className={`${styles.twentyone} ${classes}`} {...props} />;
}

export default IconButton;
