/******************Homework-MODUL -3 -1 ******************** */

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
    // updatePremium(newValue){
    //     this.premium = newValue;
    // }
  };

//   user.updatePremium('false');

//   
  user.hobby = 'skydiving';
  user.mood = 'happy'; 
  user.premium = 'false';

  console.log(user.name),
  console.log(user.age);
  console.log(user.hobby);
  console.log(user.mood);
  console.log(user.premium);
  console.log(user);

  const keys = Object.keys(user);
  for(const key of keys){
    console.log(key);
    console.log(user[key]);
  }