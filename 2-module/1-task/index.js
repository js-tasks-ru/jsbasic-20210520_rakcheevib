function sumSalary(salaries) {
  let summ = 0;
  for (const k in salaries){
    let el = salaries[k]
    if( +el && isFinite(el)){
      summ += el;
    }
  }
  return summ
}
sumSalary()

