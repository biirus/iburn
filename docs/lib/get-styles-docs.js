export default function getStylesDocs (avatarStyles) {
  let stylesDocs = [];
  const styleRegexp = /\/\* (.*) \*\/[\r\n]\s*(\w*)/gm;

  let m;
  while ((m = styleRegexp.exec(avatarStyles)) !== null) {
    if (m.index === styleRegexp.lastIndex) {
      styleRegexp.lastIndex++;
    }

    // eslint-disable-next-line
    const [_, description, name] = m;

    stylesDocs.push({ name, description });
  }

  return stylesDocs;
}
