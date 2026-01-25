import React from 'react';
import styles from './ParallelText.module.css';

interface ParallelTextProps {
  en: string;
  bg: string;
}

export default function ParallelText({ en, bg }: ParallelTextProps) {
  return (
    <div className={styles.container}>
      <div className={styles.columnEn}>
        <div className={styles.content}>{en}</div>
      </div>
      <div className={styles.columnBg}>
        <div className={styles.content}>{bg}</div>
      </div>
    </div>
  );
}
