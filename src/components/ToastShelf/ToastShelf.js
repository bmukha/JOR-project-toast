import React from 'react';

import Toast from '../Toast';

import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  const deleteToastById = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'>
      {toasts.map(({ id, variant, message }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast
              variant={variant}
              message={message}
              deleteToast={() => deleteToastById(id)}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
