import React from 'react';
import Layout from '@theme/Layout';
import {
  getAllBooks,
  getBilingualBooks,
  getBulgarianBooks,
  getEnglishBooks,
} from '../config/books';
import BookCard from '../components/BookCard';
import styles from './library.module.css';

export default function Library(): JSX.Element {
  const bilingualBooks = getBilingualBooks();
  const bulgarianBooks = getBulgarianBooks();
  const englishBooks = getEnglishBooks();

  return (
    <Layout
      title="Library / Библиотека"
      description="Browse our collection of Masonic historical texts and translations"
    >
      <main className={styles.libraryPage}>
        <div className="container">
          <header className={styles.header}>
            <h1>Library / Библиотека</h1>
            <p>
              A collection of historical Masonic texts and translations.
              <br />
              Колекция от исторически масонски текстове и преводи.
            </p>
          </header>

          {bilingualBooks.length > 0 && (
            <section className={styles.section}>
              <h2>Bilingual / Двуезични</h2>
              <div className={styles.bookGrid}>
                {bilingualBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </section>
          )}

          {bulgarianBooks.length > 0 && (
            <section className={styles.section}>
              <h2>На български</h2>
              <div className={styles.bookGrid}>
                {bulgarianBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </section>
          )}

          {englishBooks.length > 0 && (
            <section className={styles.section}>
              <h2>In English</h2>
              <div className={styles.bookGrid}>
                {englishBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </Layout>
  );
}
