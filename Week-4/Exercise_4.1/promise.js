function getNumber() {
  return (Math.random() * 100).toFixed(0);
}

function SPromise(func) {
  let onReject, onResolve;
  let isCalledCallback = false;

  this.then = function (thenFunc) {
    onResolve = thenFunc;
    return this;
  };

  this.catch = function (catchFunc) {
    onReject = catchFunc;
    return this;
  };

  function resolve(val) {
    if (typeof onResolve === "function" && !isCalledCallback) {
      onResolve(val);
      isCalledCallback = true;
    }
  }

  function reject(err) {
    if (typeof onReject === "function" && !isCalledCallback) {
      onReject(err);
      isCalledCallback = true;
    }
  }

  func(resolve, reject);
}

const myPromise = new SPromise((resolve, reject) => {
  if (getNumber() % 5 === 0) {
    reject("rejected");
  } else {
    resolve("reolved");
  }
});

myPromise
  .then((res) => console.log("number is not divisible by 5"))
  .catch((err) => console.log("number is divisible by 5"));
