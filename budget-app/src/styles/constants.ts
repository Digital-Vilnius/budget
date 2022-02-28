import hexToRgba from 'hex-to-rgba';

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  background: '#F7F8F9',
  transparentHeaderBackground: '#0a0a0a',
  primary: '#FF5C58',
  grey: {
    light: '#6A748A',
  },
  button: {
    primary: '#FF5C58',
  },
  switch: {
    activeBackground: '#FF5C58',
    inactiveBackground: hexToRgba('#6A748A', 0.15),
    circle: '#FFFFFF',
  },
  text: {
    primary: '#112031',
    secondary: '#6A748A',
  },
};

export const sizes = {
  xxs: 2,
  xs: 4,
  s: 8,
  m: 12,
  l: 16,
  xl: 24,
  xxl: 30,
};

export const borderRadius = {
  s: sizes.xs,
  m: sizes.l,
};

export const fontSizes = {
  xs: 10,
  s: 12,
  m: 14,
  l: 16,
  xl: 18,
};

export const lineHeights = {
  xs: 14,
  s: 16,
  m: 18,
  l: 20,
  xl: 22,
};

export const spacings = {
  padding: sizes.m,
};

export const paddings = {
  xxs: { padding: sizes.xxs },
  xs: { padding: sizes.xs },
  s: { padding: sizes.s },
  m: { padding: sizes.m },
  l: { padding: sizes.l },
  xl: { padding: sizes.xl },
  xxl: { padding: sizes.xxl },
};

export const bottomSpacings = {
  xxs: { marginBottom: sizes.xxs },
  xs: { marginBottom: sizes.xs },
  s: { marginBottom: sizes.s },
  m: { marginBottom: sizes.m },
  l: { marginBottom: sizes.l },
  xl: { marginBottom: sizes.xl },
  xxl: { marginTop: sizes.xxl },
};

export const topSpacings = {
  xxs: { marginTop: sizes.xxs },
  xs: { marginTop: sizes.xs },
  s: { marginTop: sizes.s },
  m: { marginTop: sizes.m },
  l: { marginTop: sizes.l },
  xl: { marginTop: sizes.xl },
  xxl: { marginTop: sizes.xxl },
};

export const fonts = {
  primary: {
    light: 'Merriweather-Light',
    regular: 'Merriweather-Regular',
    bold: 'Merriweather-Bold',
    black: 'Merriweather-Black',
  },
  secondary: {
    light: 'OpenSans-Light',
    regular: 'OpenSans-Regular',
    medium: 'OpenSans-Medium',
    semiBold: 'OpenSans-SemiBold',
    bold: 'OpenSans-Bold',
    extraBold: 'OpenSans-ExtraBold',
  },
};
