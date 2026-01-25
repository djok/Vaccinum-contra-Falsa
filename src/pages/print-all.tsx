import React from 'react';
import Layout from '@theme/Layout';
import styles from './print-all.module.css';

// Import all MDX documents
import Introduction from '@site/docs/memphis/01-introduction.mdx';
import PikeAllocution from '@site/docs/memphis/02-pike-allocution.mdx';
import PikeAppendix from '@site/docs/memphis/03-pike-appendix.mdx';
import CummingsStudy from '@site/docs/memphis/04-cummings-study.mdx';
import Appendix1 from '@site/docs/memphis/05-appendix-1.mdx';
import Appendix2 from '@site/docs/memphis/06-appendix-2.mdx';

// Import ParallelText for MDX usage
import ParallelText from '@site/src/theme/components/ParallelText';

// MDXContent wrapper with components
const components = {
  ParallelText,
};

export default function PrintAll(): JSX.Element {
  const handlePrint = () => {
    window.print();
  };

  return (
    <Layout
      title="Print All / Печат на всичко"
      description="Print the complete document"
      noFooter
    >
      <div className={styles.printContainer}>
        {/* Print controls - hidden when printing */}
        <div className={styles.printControls}>
          <h1>Print Complete Document / Печат на пълния документ</h1>
          <p>
            This page contains all chapters for printing as a single document.
            <br />
            Тази страница съдържа всички глави за печат като един документ.
          </p>
          <button onClick={handlePrint} className={styles.printButton}>
            Print / Печат (Ctrl+P)
          </button>
          <p className={styles.hint}>
            Tip: Use "Save as PDF" in the print dialog for a PDF file.
            <br />
            Съвет: Използвайте "Запази като PDF" в диалога за печат.
          </p>
        </div>

        {/* Document content */}
        <article className={styles.documentContent}>
          {/* Title page */}
          <section className={styles.titlePage}>
            <h1>The Spurious Rites of Memphis and Misraim</h1>
            <h2>Фалшивите обреди на Мемфис и Мицраим</h2>
            <p className={styles.authors}>
              Albert Pike, 33° &amp; William L. Cummings, 33°
            </p>
            <p className={styles.source}>
              Heredom, Volume 9, 2001
              <br />
              Scottish Rite Research Society
            </p>
          </section>

          {/* Table of Contents */}
          <section className={styles.toc}>
            <h2>Contents / Съдържание</h2>
            <ol>
              <li>Introduction / Въведение</li>
              <li>Pike's Allocution: The Grand Orient of France and the Rite of Memphis</li>
              <li>Pike's Appendix: The Rite of Memphis</li>
              <li>The Spurious Rites of Memphis and Misraim (Cummings Study)</li>
              <li>Appendix 1: Proceedings of the Sovereign Sanctuary</li>
              <li>Appendix 2: Filial Descent of the Rite of Memphis</li>
            </ol>
          </section>

          {/* Chapter 1 */}
          <section className={styles.chapter}>
            <Introduction components={components} />
          </section>

          {/* Chapter 2 */}
          <section className={styles.chapter}>
            <PikeAllocution components={components} />
          </section>

          {/* Chapter 3 */}
          <section className={styles.chapter}>
            <PikeAppendix components={components} />
          </section>

          {/* Chapter 4 */}
          <section className={styles.chapter}>
            <CummingsStudy components={components} />
          </section>

          {/* Chapter 5 */}
          <section className={styles.chapter}>
            <Appendix1 components={components} />
          </section>

          {/* Chapter 6 */}
          <section className={styles.chapter}>
            <Appendix2 components={components} />
          </section>
        </article>
      </div>
    </Layout>
  );
}
