import React from 'react';
import TOC from '@theme-original/TOC';
import type TOCType from '@theme/TOC';
import type {WrapperProps} from '@docusaurus/types';
import styles from './styles.module.css';

type Props = WrapperProps<typeof TOCType>;

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

export default function TOCWrapper(props: Props): React.ReactNode {
  // Only show the heading when there are TOC items
  if (!props.toc || props.toc.length === 0) {
    return <TOC {...props} />;
  }

  return (
    <div className={styles.tocWrapper}>
      <button
        type="button"
        className={styles.tocHeading}
        onClick={scrollToTop}
        title="Scroll to top"
      >
        On this page
      </button>
      <TOC {...props} />
    </div>
  );
}
