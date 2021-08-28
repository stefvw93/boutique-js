# boutique-js

Minimalistic MVC framework. Made as a fun experiment and out of dislike for feature bloat in popular libraries.

## Features

### Create DOM elements

```ts
function App() {
  return div({ id: "my-app" }, [
    p({ $text: "hello world" })
  ]);
}
```

### Application state & reactivity

```ts
function App() {
  const date = state(new Date());

  setInterval(() => date.state = new Date(), 1000);
  
  return div({ id: "my-app" }, [
    p({ $text: () => date.state.toLocaleTimeString() })
  ]);
}
```

### Side effects

```ts
function App() {
  const date = state(new Date());

  effect([], () => {
    setInterval(() => date.state = new Date(), 1000);
  });
  
  effect([date], () => {
    console.log("date changed");
  });
  
  return div({ id: "my-app" }, [
    p({ $text: () => date.state.toLocaleTimeString() })
  ]);
}
```
