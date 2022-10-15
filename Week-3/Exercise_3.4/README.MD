Existing code is given below in this `items` is publicly accessible because it is part of the return object

```
function createStack()
{
    return {
        items:[], // item is publicly available
        push(item) {
            this.items.push(item);
        }
        ,pop()
        {
            returnthis.items.pop();
        }};
        }
```

Soltion for excapsulation the varaiable is by using closures

```
function createStack() {
  let items = [];
  return {
    ....
```

in the above code we have used let variable to store the items, items is now in block scope and it is available for the return object as well.This is due to the colsure occured by the return object with it's lexical environment .
`items` is located in his lexical enviornment so it is accessible for the `pop` and `push` functions
