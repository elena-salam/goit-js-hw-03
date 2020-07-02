const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function(allProducts, productName) {
    let productSum = 0;
    for(const product of allProducts){
        
        if(productName === product.name){
            
            productSum = product.price * product.quantity;
            
        }
        
    }
    return productSum;
  };

  
// const calculateTotalPrice = function(allProducts, productName) {
//     let total = 0;
//     for(const product of allProducts){
//         if(productName===product.name){
//             total = product.price*product.quantity;
//         }
//     }
//     return total;
//   };
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(calculateTotalPrice(products, 'Радар')); // 5200
  
  console.log(calculateTotalPrice(products, 'Дроид')); // 2800

//   Напиши скрипт управления личным кабинетом интернет банка. 
//   Есть объект account в котором необходимо реализовать методы для работы 
//   с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
// создан объект, в котором ключ-константа DEPOSIT, а значение 'deposit'.
// когда нужно вызвать значение  объекта, то указываем Transaction.DEPOSIT

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
 balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    //   return {id:0, type, amount};
      return {id:this.transactions.length+1, type, amount};
    //   т.к. мы не знаем что должно быть в id, то временно указываем "0"
    //устанавливаем идентификатор транзакции по ее порядковому номеру. 
    // "+1" -  чтобі немерация начиналлась с 1, а не с 0.
      
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
        this.balance+=amount;
        const newTran = this.createTransaction(amount, Transaction.DEPOSIT)
        // createTransaction вызывает сумму amount и type (Transaction.DEPOSIT),
        //  т.к. функция deposit
        this.transactions.push(newTran);
       
    },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount){
      if(this.balance>=amount){
      this.balance-=amount;
      const newTran = this.createTransaction(amount, Transaction.WITHDRAW)
        // createTransaction вызывает сумму amount и type (Transaction.WITHDRAW),
        //  т.к. функция withdraw
        this.transactions.push(newTran);
    }else{
        console.log(`Not enough money. You miss ${amount-this.balance}`);
    }
  },    
      

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
        return this.balance;
    },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
      for(const tr of this.transactions){
        if(tr.id ===id){
            return tr;
        }
        
      }
      return null;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for(const tr of this.transactions){
        if(tr.type ===type){
            sum +=tr.amount;
        }
        
      }
      return sum;
  },
};

console.log(account.getBalance());
account.deposit(100);
console.log(account.getBalance());
account.deposit(50);
console.log(account.getBalance());
account.withdraw(100);
console.log(account.getBalance());
account.withdraw(60);
console.log(account.getBalance());
console.table(account.transactions);
account.getTransactionDetails(1);
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
