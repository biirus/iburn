### Colors

You can specify `color` prop which will be passed to the child `Button` component.

```js
const style = {
  display: "grid",
  gridTemplateRows: "repeat(4, max-content)",
  gridGap: 8
};

<div style={style}>
  <div>
    <ButtonGroup>
      <Button>Reply</Button>
      <Button>Reply all</Button>
      <Button>Forward</Button>
    </ButtonGroup>
  </div>

  <div>
    <ButtonGroup color="error">
      <Button>Launch the missiles</Button>
      <Button>Alarm</Button>
      <Button>The panic button</Button>
    </ButtonGroup>
  </div>

  <div>
    <ButtonGroup color="info">
      <Button>Help</Button>
      <Button>Instructions</Button>
      <Button>The happy button</Button>
    </ButtonGroup>
  </div>
</div>;
```

If you don't pass any `color` prop, `Buttons` will be rendered with `default` value.
By the way, you can specify the `color` prop of any `Button` as you want.

```js
<ButtonGroup>
  <Button color="primary">Reply</Button>
  <Button>Reply all</Button>
  <Button>Forward</Button>
</ButtonGroup>
```

### Justified

The `justified` prop means that all `Buttons` will have same size.

```js
<ButtonGroup color="success" justified>
  <Button>Short</Button>
  <Button>Medium Button</Button>
  <Button>Large Large Button</Button>
</ButtonGroup>
```

### Selectable

If you pass the `selectable` prop then you'll be able to select a button. That moment `onChange` callback will be called.

```js
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "reply"
    };
  }

  render() {
    return (
      <div>
        <ButtonGroup
          value="reply"
          selectable
          onChange={e => {
            this.setState({ value: e.target.value });
          }}
        >
          <Button value="reply">Reply</Button>
          <Button value="replyAll">Reply all</Button>
          <Button value="forward">Forward</Button>
        </ButtonGroup>

        <Typography style={{ marginTop: 16 }}>
          Selected: {this.state.value}
        </Typography>
      </div>
    );
  }
}

<Example />;
```
