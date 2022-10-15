```
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();

increment();
increment();
increment();
log();
```

Following are the steps involved in the execution of the code

1. calling createIncrement function and returning increment and log functions
2. calling increment function 3 times
3. calling log function

Step 1 :
<br>
While callin the increment function following variables are creating and values are assigning
<br>
`count = 0`;
<br>
`message = 'Count is 0'`
<br>
and functions

```
function increment() {
    count++;
  }
    function log() {
    console.log(message);
  }
```

<br>
Step 2 :
<br>
when increment function is called count value is updating inside the `createIncrement` function.
now 
'count' is 3.
<br>
Step 3: When log is called the count is 3 but message is already assigned in Step 1 .
So the message will be
<br>  
```
Count is 0
```
