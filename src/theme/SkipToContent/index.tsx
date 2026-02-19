import type {ReactNode} from 'react';
import styles from './styles.module.css';

export default function SkipToContent(): ReactNode {
  return (
    <a href="/blog" className={styles.skipToContent}>
      Skip to main content
    </a>
  );
}
