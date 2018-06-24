export default ({ spacing, }) => {
  return {
    root: {
      width: "100%",
      tableLayout: "fixed",
    },

    cell: {
      padding: [[spacing.small / 2, 0,],],
    },

    headerCell: {
      padding: [[spacing.small, 0,],],
    },

    tile: {
      width: "100%",
      justifyContent: "center",
    },

    tileContent: {
      textAlign: "center",
    },
  };
};
