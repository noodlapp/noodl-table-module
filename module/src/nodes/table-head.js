function TableHeadComponent(props) {
  let style = { position: "relative" };
  return (
    <thead className={props.cssClassName} style={style} onClick={props.onClick}>
      {props.children}
    </thead>
  );
}

const TableHeadNode = Noodl.defineReactNode({
  name: "Table Head",
  category: "Table",
  getReactComponent() {
    return TableHeadComponent;
  },
  inputProps: {
    cssClassName: {
      index: 100000,
      displayName: "CSS Class",
      group: "Advanced Style",
      type: "string",
      default: "table-head",
    },
  },
  inputCss: {
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

module.exports = TableHeadNode;
