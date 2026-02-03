import React from 'react';
import Link from '@docusaurus/Link';
import type { BookConfig } from '../config/books';
import styles from './BookCard.module.css';

interface BookCardProps {
  book: BookConfig;
}

export default function BookCard({ book }: BookCardProps): JSX.Element {
  const authorText = book.authors
    .map((a) => `${a.name}${a.credentials ? `, ${a.credentials}` : ''}`)
    .join(' & ');

  return (
    <article className={styles.card}>
      <Link to={book.slug} className={styles.cardLink}>
        <div className={styles.content}>
          <h3 className={styles.title}>{book.titleBg || book.title}</h3>
          {book.titleBg && <p className={styles.titleEn}>{book.title}</p>}
          <p className={styles.authors}>{authorText}</p>
          {book.year && <p className={styles.year}>{book.year}</p>}
          <p className={styles.description}>
            {book.descriptionBg || book.description}
          </p>
          <div className={styles.badges}>
            {book.pdfPath && <span className={styles.badge}>PDF</span>}
            {book.hasPrintVersion && <span className={styles.badge}>Print</span>}
            {book.language === 'bilingual' && (
              <span className={styles.badge}>EN/BG</span>
            )}
            {book.language === 'bg' && <span className={styles.badge}>BG</span>}
          </div>
        </div>
      </Link>
    </article>
  );
}
