export default ({ typography, palette, colors, }) => {
  return {
    root: {
      textAlign: ({ align, }) => align,
    },

    h800: typography.h800,
    h700: typography.h700,
    h600: typography.h600,
    h500: typography.h500,
    h400: typography.h400,
    h300: typography.h300,
    h200: typography.h200,
    h100: typography.h100,
    lead: typography.lead,
    body: typography.body,
    label: typography.label,
    paragraph: typography.paragraph,
  };
};
