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
  xxxs: 2,
  xxs1: 5,
  xxs: 8,
  xs: 10,
  s: 12,
  m: 15,
  l: 20,
  xl: 25,
  xl1: 30,
  xxl: 35,
  xxxl: 50,
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

export const bottomSpacings = {
  xxs: { marginBottom: sizes.xxs },
  xs: { marginBottom: sizes.xs },
  s: { marginBottom: sizes.s },
  m: { marginBottom: sizes.m },
  l: { marginBottom: sizes.l },
  xl: { marginBottom: sizes.xl },
  xl1: { marginBottom: sizes.xl1 },
};

export const topSpacings = {
  xxs: { marginTop: sizes.xxs },
  xs: { marginTop: sizes.xs },
  s: { marginTop: sizes.s },
  m: { marginTop: sizes.m },
  l: { marginTop: sizes.l },
  xl: { marginTop: sizes.xl },
  xl1: { marginTop: sizes.xl1 },
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
