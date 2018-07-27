```js
<Breadcrumbs
  items={[
    { label: "Root", href: "/" },
    { label: "First child", href: "/first" }
  ]}
/>
```

### With PageHeader

```js
<PageHeader
  actions={
    <div
      style={{
        display: "grid",
        gridGap: "8px",
        gridTemplateColumns: "repeat(2, auto)"
      }}
    >
      <Button color="primary">Main action</Button>
      <Dropdown position="right" iconAfter={<Icon label="more" />}>
        <DropdownItem>Save XSLS</DropdownItem>
        <DropdownItem>Change view</DropdownItem>
      </Dropdown>
    </div>
  }
  breadcrumbs={
    <Breadcrumbs
      items={[
        { label: "Root", href: "/" },
        { label: "First child", href: "/first" }
      ]}
    />
  }
>
  Current page
</PageHeader>
```
