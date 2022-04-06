const { paddingCssProps, boxShadowProps } = require("./helper");

function TableCellComponent(props) {
  let style = { position: "relative" };

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

  let el = (
    <td className={props.cssClassName} style={style} onClick={props.onClick}>
      {props.children}
    </td>
  );

  if (props.cellType === "th") {
    el = (
      <th className={props.cssClassName} style={style} onClick={props.onClick}>
        {props.children}
      </th>
    );
  }

  return el;
}

const TableCellNode = Noodl.defineReactNode({
  name: "Table Cell",
  category: "Table",
  getReactComponent() {
    return TableCellComponent;
  },
  inputProps: {
    cellType: {
      group: "Element",
      displayName: "Cell type",
      type: {
        name: "enum",
        enums: [
          { label: "Data", value: "td" },
          { label: "Header", value: "th" },
        ],
      },
      default: "td",
    },
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
      default: "table-header-cell",
    },
    ...boxShadowProps,
  },
  inputCss: {
    height: {
      index: 100,
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
    ...paddingCssProps,
  },
  outputProps: {
    onClick: { type: "signal", displayName: "Click" },
  },
});

module.exports = TableCellNode;
