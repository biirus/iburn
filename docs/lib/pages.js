import pagesMap from "./pages-map.json";

export function getPages (blackList, parentRoute) {
  return pagesMap
    .filter(component => !blackList.includes(component.id))
    .map(component => {
      return {
        ...component,
        path: `/${parentRoute}/${component.path}`,
      };
    });
}

export function getDemoPages () {
  const demoBlackList = [
    "Avatar-Stack",
    "Button-Group",
    "Calendar-Controls",
    "Checkbox-Group",
    "Dialog-Content",
    "Dialog-Footer",
    "Dialog-Title",
    "Dropdown-CheckboxItem",
    "Dropdown-RadioItem",
    "Dropdown-Item",
    "Dropdown-Group",
    "Flag-Content",
    "Flag-Footer",
    "Flag-Title",
    "Nav-Item",
    "Page-Header",
    "Radio-Group",
    "Reset",
    "Select-Group",
    "Select-Item",
    "Table-Body",
    "Table-Head",
    "Table-Foot",
    "Table-Row",
    "Table-Cell",
    "Table-Pagination",
    "Tabs-Tab",
  ];

  return getPages(demoBlackList, "demo");
}

export function getApiPages () {
  const apiBlackList = [];

  return getPages(apiBlackList, "api");
}
