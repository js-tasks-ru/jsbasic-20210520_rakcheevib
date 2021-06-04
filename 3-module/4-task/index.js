function showSalary(users, age) {
  let userData = users.filter(user => user.age <= age)  
  .map(userItem => `${userItem.name}, ${userItem.balance}`);
   return(userData.join('\n'));
  }

  /*function showSalary(users, age) {

  let userItems = users.filter((user) => {
  return user.age <= age;
  });  
  let userData = userItems.map((userItem) => {
  return `${userItem.name}, ${userItem.balance}`;
  });
   return(userData.join('\n'));
  }*/