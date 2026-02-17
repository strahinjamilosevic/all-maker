import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

function Hero(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <img
          src="/img/logo.png"
          alt="All-maker logo"
          className={styles.heroLogo}
        />
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>Tech writer by trade. Maker by nature.</p>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  description: string;
  link: string;
};

const features: FeatureItem[] = [
  {
    title: 'Blog',
    description:
      'Opinions, experiences, and the occasional rant about technical writing, tools, and the craft.',
    link: '/blog',
  },
  {
    title: 'Projects',
    description:
      'Leatherworking, metalworking, and whatever else I happen to be building.',
    link: '/docs/intro',
  },
  {
    title: 'Resources',
    description:
      'Presentations, links, and learning materials for technical writers.',
    link: '/docs/Resources/get-started-with-technical-writing',
  },
];

function Feature({title, description, link}: FeatureItem): ReactNode {
  return (
    <div className="col col--4">
      <Link to={link} className={styles.featureCard}>
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Technical writing and other shenanigans">
      <Hero />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
