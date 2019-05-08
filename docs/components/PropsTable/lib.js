import { compose } from "lodash/fp";

const wrapBy = (open, close, level) => data => {
  const openTab = "\t".repeat(level);
  const closingTab = "\t".repeat(level - 1);

  return `${open}\n${openTab}${data}\n${closingTab}${close}`;
};

const join = level => arr => {
  const tab = "\t".repeat(level);
  return arr.join(`,\n${tab}`);
};

const map = level => arr => {
  return arr.map(s => typeToString(s, level + 1));
};

export const typeToString = (type, level = 1) => {
  const { name, value } = type;

  if (!name) {
    return value;
  }

  if (value) {
    let inner;

    switch (name) {
      case "union": {
        const wrap = compose(
          wrapBy("(", ")", level),
          join(level),
          map(level)
        );
        inner = wrap(value);
        break;
      }

      case "arrayOf": {
        const wrap = compose(
          wrapBy("(", ")", level),
          join(level),
          map(level)
        );
        inner = wrap([value]);
        break;
      }

      case "shape": {
        const wrap = compose(
          wrapBy("{", "}", level),
          join(level),
          map(level)
        );
        inner = wrap(
          Object.keys(value).map(key => ({
            name: key,
            value: typeToString(value[key], level + 1),
          }))
        );
        break;
      }

      case "enum": {
        const wrap = compose(
          wrapBy("[", "]", level),
          join(level),
          map(level)
        );
        inner = wrap(value);
        break;
      }

      default: {
        inner = value;
        break;
      }
    }

    return `${name}: ${inner}`;
  }

  return name;
};
