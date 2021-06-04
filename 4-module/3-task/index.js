function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    let row = table.rows[i];
    for (let i = 0; i < row.cells.length; i++) {
      let cell = row.cells[i];
      if(cell.dataset.available === 'true'){
        row.classList.add('available');
        console.log('available')
      }
      else if(cell.dataset.available === 'false'){
        row.classList.add('unavailable');
        console.log('unavailable')
      }
    }
    
    for (let n = 0; n < row.cells.length; n++) {
      let cell = row.cells[1];
      if(cell.innerHTML < 18){
        row.setAttribute('style', "text-decoration: line-through");
        console.log('less')
      }
      else{
        console.log('more')
      }
    }

    for (let g = 0; g < row.cells.length; g++) {
      let cell = row.cells[2];
      if(cell.innerHTML === 'm'){
        row.classList.add('male');
      }
      else if(cell.innerHTML === 'f'){
        row.classList.add('female');
      }
    }

     if(!row.cells[3].dataset.available){
      row.setAttribute('hidden', true);
    }
  }
}
