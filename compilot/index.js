"use strict";
// // Promice
// // 1.)
// interface Type {
//   id: number;
//   title: string;
// }
// let promise1 = new Promise<Type>(function (resolve, reject) {
//   setTimeout(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((res) => {
//         if (res.status == 200) {
//           return res.json();
//         } else {
//           reject("Error: " + res.status);
//         }
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject("Fetch failed: " + err);
//       });
//   }, 3000);
// });
// promise1
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// let promise2 = new Promise<Type>(function (resolve, reject) {
//   setTimeout(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((res) => {
//         if (res.status == 200) {
//           return res.json();
//         } else {
//           reject("Error: " + res.status);
//         }
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject("Fetch failed: " + err);
//       });
//   }, 2000);
// });
// promise2
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// let promise3 = new Promise<Type>(function (resolve, reject) {
//   setTimeout(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/3")
//       .then((res) => {
//         if (res.status == 200) {
//           return res.json();
//         } else {
//           reject("Error: " + res.status);
//         }
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject("Fetch failed: " + err);
//       });
//   }, 1000);
// });
// promise3
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// 2.Promice All
// type Type2 = {
//     data : string[]
// }
//   let promise4 = new Promise<Type2>(function (resolve, reject) {
//     setTimeout(() => {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((res) => {
//           if (res.status == 200) {
//             return res.json();
//           } else {
//             reject("Error: " + res.status);
//           }
//         })
//         .then((data) => {
//           resolve(data);
//         })
//         .catch((err) => {
//           reject("Fetch failed: " + err);
//         });
//     }, 3000);
//   });
//   let promise5 = new Promise<Type2>(function (resolve, reject) {
//     setTimeout(() => {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res) => {
//           if (res.status == 200) {
//             return res.json();
//           } else {
//             reject("Error: " + res.status);
//           }
//         })
//         .then((data) => {
//           resolve(data);
//         })
//         .catch((err) => {
//           reject("Fetch failed: " + err);
//         });
//     }, 0);
//   });
// Promise.all([promise4, promise5])
//   .then(responses =>{
//     console.log(responses);
//   })
//   .catch(err =>{
//     console.log(err);
//   })
// 3.Promice.race
// let promise1 = new Promise<string>(function (resolve, reject) {
//   setTimeout(() => {
//     fetch("https://jsonplaceholder.typicode.com/photos")
//       .then((res) => {
//         if (res.status == 200) {
//           return res.json();
//         } else {
//           reject("Error: " + res.status);
//         }
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject("Fetch failed: " + err);
//       });
//   }, 4000);
// });
// let promise2 = new Promise<string>(function (resolve, reject) {
//   setTimeout(() => {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => {
//         if (res.status == 200) {
//           return res.json();
//         } else {
//           reject("Error: " + res.status);
//         }
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject("Fetch failed: " + err);
//       });
//   }, 3000);
// });
// let promise3 = new Promise<string>(function (resolve, reject) {
//   setTimeout(() => {
//     fetch("https://jsonplaceholder.typicode.com/comments")
//       .then((res) => {
//         if (res.status == 200) {
//           return res.json();
//         } else {
//           reject("Error: " + res.status);
//         }
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((err) => {
//         reject("Fetch failed: " + err);
//       });
//   }, 2000);
// });
// Promise.race([promise1, promise2, promise3])
//   .then((responses) => {
//     console.log(responses);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// async await
// 1. 
async function getData1(url) {
    try {
        const response = await fetch(url);
        let data1 = [];
        if (response.status == 200) {
            data1 = await response.json();
        }
        else {
            throw new Error('hatolik');
        }
        console.log(data1);
    }
    catch (err) {
        console.log(err);
    }
}
getData1("https://jsonplaceholder.typicode.com/posts/1");
async function getData2(url) {
    try {
        const response = await fetch(url);
        let data2 = [];
        if (response.status == 200) {
            data2 = await response.json();
        }
        else {
            throw new Error('hatolik');
        }
        console.log(data2);
    }
    catch (err) {
        console.log(err);
    }
}
getData2("https://jsonplaceholder.typicode.com/posts/2");
async function getData3(url) {
    try {
        const response = await fetch(url);
        let data3 = [];
        if (response.status == 200) {
            data3 = await response.json();
        }
        else {
            throw new Error('hatolik');
        }
        console.log(data3);
    }
    catch (err) {
        console.log(err);
    }
}
getData3("https://jsonplaceholder.typicode.com/posts/3");
// Genetic
// 1
// type Type<T> ={
//     status: string,
//     data: T
// }
// function  Test1 <T>(arg:T):Type<T> {
//     let  obj = {
//         status: "active",
//         data: arg
//     }
//     return obj
// }
// Test1(45)
// function  Test2 <T>(arg:T[], arg2: T[]):T[] {
//     return arg.filter(item => arg2.includes(item))
// }
// let arr1 = ['olma','gilos','behi','banan']
// let arr2 = ['olma','gilos','urik','adsasdf']
// let dasd = Test2(arr1,arr2)
// console.log(dasd);
