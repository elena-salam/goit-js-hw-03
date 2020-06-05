//   ********Homework-3

const findBestEmployee = function(employees) {
    const values = Object.keys(employees);
    // console.log(values);
    // let maxValue=Number.MAX_VALUE;
    let maxValue = 0;
    let bestEmployee;
    
    for(const value of values){
        
        if(employees[value] > maxValue){
            maxValue = employees[value];
            bestEmployee = value;
        }

    }
    return bestEmployee;
  };
  
//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
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