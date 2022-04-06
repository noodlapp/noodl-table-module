function TableComponent(props) {
  let style = {
    position: "relative",
    borderSpacing: props.borderSpacingVertical + " " + props.borderSpacingHorizontal,
    borderCollapse: props.borderCollapse,
  };

  return (
    <table className={props.cssClassName} style={style} onClick={props.onClick}>
      {props.children}
    </table>
  );
}

const TableNode = Noodl.defineReactNode({
  name: "Table",
  category: "Table",
  getReactComponent() {
    return TableComponent;
  },
  inputProps: {
    borderSpacingHorizontal: {
      default: 0,
      displayName: "Horizontal Gap",
      group: "Table Style",
      type: {
        name: "number",
        units: ["px", "rem", "em", "cm"],
        defaultUnit: "px",
      },
    },
    borderSpacingVertical: {
      default: 0,
      displayName: "Vertical Gap",
      group: "Table Style",
      type: {
        name: "number",
        units: ["px", "rem", "em", "cm"],
        defaultUnit: "px",
      },
    },
    borderCollapse: {
      type: {
        name: "enum",
        enums: [
          { label: "Collapse", value: "collapse" },
          { label: "Separate", value: "separate" },
        ],
      },
      default: "separate",
      displayName: "Border Collapse",
      group: "Table Style",
    },
    cssClassName: {
      index: 100000,
      displayName: "CSS Class",
      group: "Advanced Style",
      type: "string",
      default: "table",
    },
  },
  inputCss: {
    opacity: {
      index: 200,
      group: "Style",
      displayName: "Opacity",
      type: "number",
      default: 1,
      allowVisualStates: true,
    },
    backgroundColor: {
      index: 201,
      displayName: "Background Color",
      group: "Style",
      type: "color",
      allowVisualStates: true,
      default: "transparent",
      applyDefault: false,
    },
  },
  outputProps: {
    onClick: { type: "signal", displayName: "Click" },
  },
});

module.exports = TableNode;
