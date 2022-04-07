console.log("Task 1");
// function task() {
//   return new Promise((resolve, reject) => {
//     resolve("Task 2");
//   });
// }
// task().then((res) => console.log(res));

function apiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("API Fetch");
    }, 1000);
  });
}

function apiCall2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("API 2 Fetch");
    }, 2000);
  });
}

async function task() {
  const api1 = await apiCall();
  const api2 = await apiCall2();
  console.log(api1)
  console.log(api2)
}
task();

// console.log("Task 2"); // 1billion times
console.log("Task 3");
