import React from 'react';
import BlogPostItemContent from '@theme-original/BlogPostItem/Content';
import type BlogPostItemContentType from '@theme/BlogPostItem/Content';
import type {WrapperProps} from '@docusaurus/types';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import TOCCollapsible from '@theme/TOCCollapsible';
import styles from './styles.module.css';

type Props = WrapperProps<typeof BlogPostItemContentType>;

export default function BlogPostItemContentWrapper(
  props: Props,
): React.ReactNode {
  const {isBlogPostPage, metadata, toc} = useBlogPost();
  const {frontMatter} = metadata;
  const hideTableOfContents = frontMatter.hide_table_of_contents;
  const tocMinHeadingLevel = frontMatter.toc_min_heading_level;
  const tocMaxHeadingLevel = frontMatter.toc_max_heading_level;

  const showMobileToc =
    isBlogPostPage && !hideTableOfContents && toc.length > 0;

  return (
    <>
      {showMobileToc && (
        <div className={styles.blogMobileToc}>
          <TOCCollapsible
            toc={toc}
            minHeadingLevel={tocMinHeadingLevel}
            maxHeadingLevel={tocMaxHeadingLevel}
          />
        </div>
      )}
      <BlogPostItemContent {...props} />
    </>
  );
}
