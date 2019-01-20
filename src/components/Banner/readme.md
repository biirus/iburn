```js
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      default: false,
      warning: false,
      error: false,
      success: false,
      info: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    const { name } = e.currentTarget;
    this.setState(state => ({ [name]: !state[name] }));
  }

  render() {
    const banners = ["default", "warning", "error", "success", "info"];

    return (
      <div>
        {banners.map(banner => (
          <Button
            key={banner}
            name={banner}
            color={banner}
            onClick={this.toggle}
            style={{ margin: 8 }}
          >
            Toggle {banner}
          </Button>
        ))}

        {banners.map(banner => (
          <Banner
            key={banner}
            isOpen={this.state[banner]}
            color={banner}
            icon={banner === "default" && <Icon label="lock" />}
          >
            {banner} banner content
          </Banner>
        ))}
      </div>
    );
  }
}
<Example />;
```
