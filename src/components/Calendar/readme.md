### Range

```jsx
<Calendar
  locale="ru"
  range
  onChange={e => console.log(e.target.value)}
  onDayClick={console.log}
/>
```

### Simple

```jsx
<Calendar
  value={new Date()}
  name="firstCalendar"
  onChange={e => console.log(e.target.name, e.target.value)}
/>
```

```jsx
<Calendar />
```
