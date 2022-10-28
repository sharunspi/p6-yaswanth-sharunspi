// function to find randome number
function getNumber() {
  return (Math.random() * 100).toFixed(0);
}

// custome promise
// argument -> callback function with resolve and reject
function SPromise(func) {
  // initiations
  let onReject, onResolve;
  let isCalledCallback = false;
  let isFullfilled = false;
  let isRejected = false;
  let pval, perr;

  //   when promise is success
  this.then = function (thenFunc) {
    onResolve = thenFunc;
    if (!isCalledCallback && isFullfilled) {
      onResolve(pval);
      isCalledCallback = true;
    }
    return this;
  };

  //   when promise is catch mode
  this.catch = function (catchFunc) {
    onReject = catchFunc;
    if (!isCalledCallback && isRejected) {
      onReject(perr);
      isCalledCallback = true;
    }
    return this;
  };

  //   on resolved
  function resolve(val) {
    isFullfilled = true;
    pval = val;
    if (typeof onResolve === "function" && !isCalledCallback) {
      onResolve(val);
      isCalledCallback = true;
    }
  }

  //   on reject
  function reject(err) {
    isFullfilled = true;
    perr = err;
    if (typeof onReject === "function" && !isCalledCallback) {
      onReject(err);
      isCalledCallback = true;
    }
  }

  func(resolve, reject);
}

// promise template
const myPromise = new SPromise((resolve, reject) => {
  if (getNumber() % 5 === 0) {
    reject("rejected");
  } else {
    resolve("reolved");
  }
});

// promise execution
myPromise
  .then((res) => console.log("number is not divisible by 5"))
  .catch((err) => console.log("number is divisible by 5"));
