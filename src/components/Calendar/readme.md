### Default

This is default usage of the Calendar, no options are passed.

```js
<Calendar />
```

### Range select

You can select a date range by passing `range` property to the component.

```js
<Calendar range />
```

### Initial value

The `value` prop specifies the initialy selected day.
If the `range` prop has been passed then `value` should be an `array` of two dates `[firstDate, lastDate]`.

```js
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    gridGap: 16
  }}
>
  <Calendar value={new Date("2018-05-09")} />
  <Calendar range value={[new Date("2018-05-09"), new Date("2018-05-15")]} />
</div>
```

### Max & min date

You can **limit** selectable dates by passing `minDate` or/and `maxDate`.

```js
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    gridGap: 16
  }}
>
  <Calendar value={new Date("2018-01-01")} maxDate={new Date("2018-01-07")} />
  <Calendar value={new Date("2018-01-10")} minDate={new Date("2018-01-07")} />
</div>
```

### Locales

Calendar works with any locale that is supported by [date-fns](https://date-fns.org/v2.0.0-alpha.11/docs/I18n). You sould pass a `string` property with locale code (`"enGB"`, `"ru"`...) or an `object` which is exported by **date-fns**.

Eg: `import locale from "date-fns/locale/en-GB"`.

```js
const locale = require("date-fns/locale/en-GB").default;

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, max-content)",
    gridGap: 16
  }}
>
  <Calendar locale="ru" />
  <Calendar locale={locale} />
</div>;
```
