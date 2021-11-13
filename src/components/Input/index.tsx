import React, { useRef } from 'react';
import classNames from 'classnames';

import styles from './index.module.css';
import close from '../../assets/img/close.svg';
import { useForceUpdate } from '../../hooks';

interface IProps {
  label: string;
  value: string;
  placeholder?: string;
  type?: string;

  onChange(string: string): void
}

const Input = ({ label, value, onChange, type = 'text', placeholder }: IProps) => {
  const forceUpdate = useForceUpdate();
  const inputRef = useRef<HTMLInputElement>();

  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <input
        // @ts-ignore
        ref={inputRef}
        onChange={(e) => {
          onChange(e.target.value);
          forceUpdate();
        }}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      <button className={classNames(styles.close, !inputRef.current?.value && styles.hidden)} onClick={() => {
        if (inputRef.current) {
          inputRef.current.value = '';
        }
        forceUpdate();
        onChange('');
      }}>
        <img src={close} alt='menu'/>
      </button>
    </div>
  );
}

export default Input;
