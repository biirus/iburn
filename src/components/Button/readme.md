### Views

```js
const Wrapper = props => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, max-content)",
      gridGap: "16px"
    }}
  >
    {props.children}
  </div>
);

<Wrapper>
  <Button>Default Button</Button>
  <Button view="thin">Thin Button</Button>
  <Button view="link">Link Button</Button>
</Wrapper>;
```

### Sizes

#### Inline

`Inline` size helps you to align a text arounded buttons. Typically it has a `view="thin"` or `view="link"` prop.

```js
<p>
  The button inside paragraph{" "}
  <Button size="inline" color="primary">
    Inline Button
  </Button>. This is example of button along with text (button is colored blue just
  for better visibility).
</p>
```

#### Block

```js
<Button size="block" color="warning">
  Block button occupies full width of it's parrent
</Button>
```

#### Compact

It is a regular button but it's paddings are reduced a bit.

```js
<Button size="compact" color="primary">
  Compact Button
</Button>
```

### Colors

If `view` prop equals `thin` or `link` then `color` prop will be ignored

```js
const Wrapper = props => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(5, max-content)",
      gridGap: "16px"
    }}
  >
    {props.children}
  </div>
);

<Wrapper>
  <Button>Default Button</Button>
  <Button color="primary">Primary Button</Button>
  <Button color="warning">Warning Button</Button>
  <Button color="success">Success Button</Button>
  <Button color="error">Error Button</Button>
  <Button color="info">Info Button</Button>
</Wrapper>;
```

### Icons

You can use any icon before or after button label. It can be set only icon w/o label.

```js
const Wrapper = props => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, max-content)",
      gridGap: "16px"
    }}
  >
    {props.children}
  </div>
);

<Wrapper>
  <Button icon={<Icon label="calendar" />}>Icon before</Button>
  <Button iconAfter={<Icon label="chevron-down" />}>Icon after</Button>
  <Button iconAfter={<Icon label="search" />} />
</Wrapper>;
```

### Component

Button has a special `component` prop. By using it you can specify any component to render button. Eg. react-router's `Link` or `NavLink`.
If will pass a `href` prop to button, then `<a>` tag will be rendered.

```js
const Wrapper = props => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, max-content)",
      gridGap: "16px"
    }}
  >
    {props.children}
  </div>
);

<Wrapper>
  <Button component="div" color="primary">
    This is a div
  </Button>
  <Button href="https://google.com" target="_blank">
    Google.com
  </Button>
</Wrapper>;
```
