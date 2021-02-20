# Cinch-Notify

### Cinch Notify is a minimally styled React notification component, it comes with warning, error, and success styles which are easily customisable.

#### v1.0.0

```
Notify Props {
  type?: 'warning' | 'error' | 'success' | 'notification'
  position?: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left'
  displayTime?: number
  className?: string
}
```

### To use, create a <Notify> component anywhere in your page. Pass it a ref and the ref type of NotifyRef is provided to strictly type the ref. When wanting to display a notification create one by using `notifyRef.current.showNotify('This is a notification')`. Typescript might complain about the arguments so you may need to ignore this.
