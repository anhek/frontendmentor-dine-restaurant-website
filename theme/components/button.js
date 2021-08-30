import { sharedBaseStyle, light, dark } from './sharedStyleLinkButton';

const button = {
  baseStyle: {
    ...sharedBaseStyle,
  },
  sizes: {
    sm: {},
    md: {
      py: '30px',
      px: '50px',
      fontSize: '14px',
    },
    lg: {},
  },
  variants: {
    ...light,
    ...dark,
  },
  defaultProps: {
    size: 'md',
    variant: 'light',
  },
};

export default button;
