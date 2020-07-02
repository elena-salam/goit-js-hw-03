//   ********Homework-3

// Var-1
const findBestEmployee = function(employees) {
    // создаю массив "values" со всеми значениями;
    const values = Object.values(employees);
    // нахожу элемент с макс. значением
    const maxValue = Math.max(...values);
    let bestEmployee;

    // перебираю ключи объекта 
    for(const key in employees){
        //  если значение объекта является максиммальным значением
        // в значение bestEmployee передаем ключ (имя), 
        // т.к. в консоль надо вывести имя сотрудника, а не объем, выполенных им задач.
        if (employees[key]===maxValue){
            bestEmployee = key;
        }
    }
    return bestEmployee;
} 

// Var-2
// const findBestEmployee = function(employees) {
//     let maxValue = 0;
//     let bestEmployee;
//     for(const key in employees){
//         let currentValue = employees[key];
//         if(currentValue>maxValue){
//             maxValue = currentValue;
//             bestEmployee = key;
//         }
//     }
//     return bestEmployee;
// }

// Var-Zdeb
// const findBestEmployee = function(employees) {
//     const names = Object.keys(employees);
//     console.log(names);
//     // let maxValue=Number.MAX_VALUE;
//     let maxValue = 0;
//     let bestEmployee;
    
//     for(const name of names){
        
//         if(employees[name] > maxValue){
//             maxValue = employees[name];
//             console.log(employees[name]);
//             bestEmployee = name;
//         }

//     }
//     return bestEmployee;
//   };
  
// //   /*
// //    * Вызовы функции для проверки работоспособности твоей реализации.
// //    */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux

// VAR-4 additional task

// const findBestEmployee = function(employees) {
//     let sumArray = (arr) => {
//         let total = 0;
//         for(let num of arr){
//             total +=num;
//         }
//         return total;
//     }
   
  
// let bestEmployee;
// let maxValue = Number.MIN_VALUE;
// // const maxValue = Math.max(...sumArray)
// // console.log(maxValue);
// for(const key in employees){
//     const currentValue = sumArray(employees[key]);
//     console.log(sumArray(employees[key]))
//     if (currentValue > maxValue){
//         maxValue = currentValue;
//         bestEmployee = key;
//         }
//     }
//     return bestEmployee;
  
// };


// console.log(
//     findBestEmployee({
//       poly: [12, 4, 8, 85],
//       mango: [17, 22, 6, 38],
//       ajax: [4, 93, -77],
//     }),
//   ); // poly