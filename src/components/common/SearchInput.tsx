import React from 'react';
import styles from './SearchInput.module.css';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  wrapperClassName?: string;
}

export function SearchInput({
  label,
  icon,
  wrapperClassName = '',
  id,
  ...inputProps
}: SearchInputProps) {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className={`${styles.inputWrapper} ${wrapperClassName}`.trim()}>
      {icon && <div className={styles.iconWrapper}>{icon}</div>}
      <div className={styles.content}>
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
        <input
          id={inputId}
          className={styles.input}
          {...inputProps}
        />
      </div>
    </div>
  );
}
