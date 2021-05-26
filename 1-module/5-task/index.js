function truncate(str, maxlength) {
  if(str.length > maxlength){
    str = str.substr(0, maxlength).replace(/.$/,"…");
  }
  return str
}
