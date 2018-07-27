export default palette => {
  const fontFamily = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif`;

  const common = {
    fontFamily,
    // textRendering: "optimizeLegibility",
    // "-webkit-font-smoothing": "antialiased",
    // "-moz-osx-font-smoothing": "grayscale"
  };

  // Empty states and feature introductions
  const h800 = {
    ...common,
    fontSize: 29,
    fontWeight: 500,
    lineHeight: "32px",
    letterSpacing: "-0.01em",
    color: palette.text.heading,
  };

  // Main titles, use only once per page
  const h700 = {
    ...common,
    fontSize: 24,
    fontWeight: 500,
    lineHeight: "28px",
    letterSpacing: "-0.01em",
    color: palette.text.heading,
  };

  // Headings that identify key functionality
  const h600 = {
    ...common,
    fontSize: 20,
    fontWeight: 500,
    lineHeight: "24px",
    letterSpacing: "-0.008em",
    color: palette.text.heading,
  };

  // Sub-section and field group headings
  const h500 = {
    ...common,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: "20px",
    letterSpacing: "-0.006em",
    color: palette.text.heading,
  };

  // Deep headings and for highlighting important pieces of information
  const h400 = {
    ...common,
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "-0.003em",
    color: palette.text.heading,
  };

  // Heading up a group of list items
  const h300 = {
    ...common,
    fontSize: 13,
    fontWeight: 600,
    lineHeight: "16px",
    letterSpacing: 0,
    color: palette.text.heading,
  };

  // Low level headings
  const h200 = {
    ...common,
    fontSize: 12,
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: 0,
    color: palette.text.secondary,
  };

  // Lowest level headings
  const h100 = {
    ...common,
    fontSize: 10,
    fontWeight: 500,
    lineHeight: "16px",
    letterSpacing: "0.06em",
    color: palette.text.secondary,
    textTransform: "uppercase",
  };

  // Slogans, starting text
  const lead = {
    ...common,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: "24px",
    color: palette.text.secondary,
  };

  // Input labels
  const label = h200;

  // main text
  const body = {
    ...common,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "-0.006em",
    color: palette.text.primary,
  };

  const paragraph = {
    ...body,
    margin: [12, 0,],
  };

  return {
    h800,
    h700,
    h600,
    h500,
    h400,
    h300,
    h200,
    h100,
    lead,
    body,
    label,
    paragraph,
  };
};
