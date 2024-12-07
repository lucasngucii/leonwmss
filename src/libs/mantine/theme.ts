import { MantineThemeOverride } from '@mantine/core';
import Link from 'next/link';

const mantineTheme: MantineThemeOverride = {
  black: '#233C54',
  primaryColor: 'cyan',
  primaryShade: { light: 8, dark: 7 },
  cursorType: 'pointer',
  defaultRadius: 'sm',
  fontFamily: 'inherit',
  headings: {
    fontFamily: 'inherit',
    sizes: {
      h1: { fontSize: '2.25rem' },
    },
  },
  components: {
    Anchor: {
      defaultProps: {
        component: Link,
      },
    },
    // Card: {
    //   defaultProps: {
    //     background: 'gray',
    //   },
    // },
  },
};

export default mantineTheme;
