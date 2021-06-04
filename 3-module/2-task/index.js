function filterRange(arr, a, b) {
  
  let filtered = arr.filter(function(n){
    return n >= a && n <= b;
  })
  return filtered
}
