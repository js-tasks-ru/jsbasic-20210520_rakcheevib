function camelize(str) {
  return str.toLowerCase().replace(/-(.)/g, function(match, str1) {
    return str1.toUpperCase();
});
}
