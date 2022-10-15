# Memorize

## How to run

```
node memorize
```

## How to excute function

Copy the function and pass arguments to find the multiply value
<br>
Example:

```
memorizeMultiply(1, 2, 3, 4);
```

What is happening

1. creating a map to store the key and it's value
   <br>
   `const store = new Map()`
   <br>
   values are storing as maps like
   <br>
   `key => value`
2. When accessing same key data
   ```
     result = store.get(keyId);
   ```
   taking data from store and returning
3. For new data

   ```
   store.set(keyId, func(...args));
   ```

   setting new key value pair
