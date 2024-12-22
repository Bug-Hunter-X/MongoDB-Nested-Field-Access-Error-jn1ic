```javascript
// Assuming 'data' is your MongoDB data

const result = data.map(item => {
  return {
    ...item,
    nested: {
      ...item.nested || {}
    }
  };
});
```