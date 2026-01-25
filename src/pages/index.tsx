import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/memphis/introduction">
            Read the Study / Прочетете изследването
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="The Spurious Rites of Memphis and Misraim - A Historical Analysis by Albert Pike and William L. Cummings">
      <HomepageHeader />
      <main>
        <div className="container margin-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <Heading as="h2" className="text--center margin-bottom--lg">
                About This Publication / За тази публикация
              </Heading>
              <p className="text--center">
                This bilingual (English/Bulgarian) digital edition presents two important historical studies
                on the Rites of Memphis and Misraim: Albert Pike's 1865 Allocution and William L. Cummings's
                1936 comprehensive study.
              </p>
              <p className="text--center">
                Това двуезично (английско/българско) дигитално издание представя две важни исторически изследвания
                за Обредите на Мемфис и Мицраим: Алокуцията на Алберт Пайк от 1865 г. и изчерпателното изследване
                на Уилям Л. Къмингс от 1936 г.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
