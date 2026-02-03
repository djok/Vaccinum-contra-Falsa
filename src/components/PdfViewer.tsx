import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { getBookById } from '../config/books';
import styles from './PdfViewer.module.css';

interface PdfViewerProps {
  bookId: string;
}

export default function PdfViewer({ bookId }: PdfViewerProps): JSX.Element {
  const book = getBookById(bookId);

  if (!book || !book.pdfPath) {
    return (
      <Layout title="Not Found">
        <div className="container margin-vert--xl">
          <h1>PDF Not Available / PDF не е наличен</h1>
          <p>This book does not have a PDF version.</p>
          <p>Тази книга няма PDF версия.</p>
          <Link to="/" className="button button--primary">
            Return to Library / Към библиотеката
          </Link>
        </div>
      </Layout>
    );
  }

  const pdfUrl = useBaseUrl(book.pdfPath);
  const downloadName = `${book.id}.pdf`;

  return (
    <Layout
      title={`PDF: ${book.titleBg || book.title}`}
      description={`View the original PDF: ${book.title}`}
    >
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{book.titleBg || book.title}</h1>
          {book.titleBg && <p className={styles.subtitle}>{book.title}</p>}
          {book.source && <p className={styles.source}>{book.source}</p>}
          <a href={pdfUrl} download={downloadName} className={styles.downloadButton}>
            Download PDF / Изтегли PDF
          </a>
        </header>
        <iframe src={pdfUrl} className={styles.viewer} title={book.title} />
      </div>
    </Layout>
  );
}
