// 3 sample tasks
function doTask1() {
  setTimeout(() => {
    console.log("first task done");
  }, 1000);
}

function doTask2() {
  console.log("second task");
}

function doTask3() {
  setTimeout(() => {
    console.log("third task done");
  }, 2000);
}

// async await polyfill

function asyncAwait(gene) {
  return function () {
    let func = gene instanceof Function ? gene.apply(this) : gene;
    function make(result) {
      if (result.done) {
        return Promise.resolve(result.value);
      }
      return Promise.resolve(result.value)
        .then((res) => {
          return make(func.next(res));
        })
        .catch((err) => {
          return make(func.throw(err));
        });
    }
    try {
      return make(func.next());
    } catch (err) {
      return Promise.reject(err);
    }
  };
}

asyncAwait(function* () {
  let res1 = yield doTask1();
  let res2 = yield doTask2();
  let res3 = yield doTask3();
})();
