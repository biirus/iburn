### Image avatars

Image avatars can be created by passing standard img props `src` or `srcSet` into the component.

```js
<Avatar src="http://i.pravatar.cc/100" alt="John Doe" />
<Avatar src="http://i.pravatar.cc/200" style={{width: 80, height: 80}} alt="John Doe" />
<Avatar src="http://i.pravatar.cc/300" style={{width: 100, height: 100}} alt="John Doe" />
<Avatar
  srcSet="http://i.pravatar.cc/100, http://i.pravatar.cc/200 2x, http://i.pravatar.cc/300 3x"
  alt="John Doe"
/>
```

### Icon avatars

Icon avatars are created by passing an icon as `children`.

```js
<Avatar><Icon label="atlassian" /></Avatar>
<Avatar style={{backgroundColor: "tomato", color: "#333"}}><Icon label="lock" /></Avatar>
<Avatar><Icon label="backlog" /></Avatar>
```

### Letter avatars

Avatars containing simple characters can be created by passing your string as `children`.

```js
<Avatar>IB</Avatar>
<Avatar>AB</Avatar>
```
