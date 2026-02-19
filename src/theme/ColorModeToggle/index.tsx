/**
 * Swizzled ColorModeToggle — 2-way toggle only (light ↔ dark).
 * Initialises from system preference via `respectPrefersColorScheme: true`
 * in docusaurus.config.ts, but never exposes the "system" third state.
 */

import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import {useColorMode} from '@docusaurus/theme-common';
import type {ColorMode} from '@docusaurus/theme-common';
import IconLightMode from '@theme/Icon/LightMode';
import IconDarkMode from '@theme/Icon/DarkMode';
import type {Props} from '@theme/ColorModeToggle';
import styles from './styles.module.css';

function CurrentColorModeIcon(): ReactNode {
  return (
    <>
      <IconLightMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.lightToggleIcon)}
      />
      <IconDarkMode
        aria-hidden
        className={clsx(styles.toggleIcon, styles.darkToggleIcon)}
      />
    </>
  );
}

function ColorModeToggle({
  className,
  buttonClassName,
  onChange,
}: Props): ReactNode {
  const isBrowser = useIsBrowser();
  const {colorMode} = useColorMode(); // always 'light' | 'dark', never null

  const nextMode: ColorMode = colorMode === 'dark' ? 'light' : 'dark';

  const currentModeLabel =
    colorMode === 'dark'
      ? translate({
          message: 'dark mode',
          id: 'theme.colorToggle.ariaLabel.mode.dark',
          description: 'The name for the dark color mode',
        })
      : translate({
          message: 'light mode',
          id: 'theme.colorToggle.ariaLabel.mode.light',
          description: 'The name for the light color mode',
        });

  const ariaLabel = translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the color mode toggle',
    },
    {mode: currentModeLabel},
  );

  return (
    <div className={clsx(styles.toggle, className)}>
      <button
        className={clsx(
          'clean-btn',
          styles.toggleButton,
          !isBrowser && styles.toggleButtonDisabled,
          buttonClassName,
        )}
        type="button"
        onClick={() => onChange(nextMode)}
        disabled={!isBrowser}
        title={ariaLabel}
        aria-label={ariaLabel}>
        <CurrentColorModeIcon />
      </button>
    </div>
  );
}

export default React.memo(ColorModeToggle);
