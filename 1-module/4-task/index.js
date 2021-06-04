function checkSpam(str) {
  let substr1 = '1xBet';
  let substr2 = 'XXX';
  let strLower = str.toLowerCase();
  if(strLower.includes(substr1.toLowerCase()) || strLower.includes(substr2.toLowerCase())){
    return true
  }
  else{
    return false
  }
}
