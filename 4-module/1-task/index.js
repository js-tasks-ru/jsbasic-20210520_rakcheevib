function makeFriendsList(friends) {
  // ваш код...

  const htmlBody = document.querySelector('body');
  htmlBody.insertAdjacentHTML('afterbegin', '<ul></ul>');
  const htmlUl = document.querySelector('ul');
  for (const item of friends){
    let fullName = '<li>' + `${item.firstName} ${item.lastName}`+ '</li>';
    htmlUl.insertAdjacentHTML('beforeEnd', fullName) 
  }
  return htmlUl;
}


