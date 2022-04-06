const { boxShadowProps } = require('./helper');

function TableRowComponent(props) {
  let style = { position: "relative", backgroundColor: props.backgroundColor };

  if (props.boxShadowEnabled) {
    style.boxShadow = `${props.boxShadowInset ? "inset " : ""}${
      props.boxShadowOffsetX
    } ${props.boxShadowOffsetY} ${props.boxShadowBlurRadius} ${
      props.boxShadowSpreadRadius
    } ${props.boxShadowColor}`;
  }

  if (props.visible === false) {
    style.visibility = "hidden";
  }

  return (
    <tr
      className={props.cssClassName}
      style={style}
      onClick={props.onClick}
      onMouseEnter={props.hoverStart}
      onMouseLeave={props.hoverEnd}
    >
      {props.children}
    </tr>
  );
}

const TableRowNode = Noodl.defineReactNode({
  name: "Table Row",
  category: "Table",
  getReactComponent() {
    return TableRowComponent;
  },
  inputs: {},
  inputProps: {
    visible: {
      index: 210,
      displayName: "Visible",
      group: "Style",
      default: true,
      type: "boolean",
    },
    cssClassName: {
      index: 100000,
      displayName: "CSS Class",
      group: "Advanced Style",
      type: "string",
      default: "table-row",
    },
    ...boxShadowProps,
  },
  inputCss: {
    height: {
      index: 1,
      group: "Dimensions",
      displayName: "Height",
      type: {
        name: "number",
        units: ["px"],
        defaultUnit: "px",
      },
      default: undefined,
      allowVisualStates: true,
    },
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
    justifyContent: {
      index: 14,
      group: "Align and justify content",
      displayName: "Justify Content",
      type: {
        name: "enum",
        enums: [
          { label: "Start", value: "flex-start" },
          { label: "End", value: "flex-end" },
          { label: "Center", value: "center" },
        ],
        alignComp: "justify-content",
      },
      default: "flex-start",
      applyDefault: false,
    },
  },
  outputProps: {
    onClick: { type: "signal", displayName: "Click" },
    hoverStart: { type: "signal", displayName: "Hover Start" },
    hoverEnd: { type: "signal", displayName: "Hover End" },
  },
});

module.exports = TableRowNode;
