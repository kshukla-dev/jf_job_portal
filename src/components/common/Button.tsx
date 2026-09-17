import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'outlineBlue' | 'whiteOutline';
  size?: 'sm' | 'md' | 'lg';
  pill?: boolean;
  fullWidth?: boolean;
  href?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  fullWidth = false,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const combinedClassName = [
    styles.button,
    styles[variant],
    styles[size],
    pill ? styles.pill : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
