import React from 'react';

import ToastShelf from '../ToastShelf/ToastShelf';
import Button from '../Button';

import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');

  const { toasts, setToasts } = React.useContext(ToastContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setToasts([...toasts, { id: crypto.randomUUID(), variant, message }]);
    setMessage('');
    setVariant('notice');
  };

  return (
    <form className={styles.wrapper} onSubmit={handleFormSubmit}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: 'baseline' }}>
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => {
              return (
                <label htmlFor={`variant-${option}`} key={`variant-${option}`}>
                  <input
                    id={`variant-${option}`}
                    type='radio'
                    name='variant'
                    value={option}
                    checked={option === variant}
                    onChange={(e) => setVariant(e.target.value)}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type='submit'>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ToastPlayground;
