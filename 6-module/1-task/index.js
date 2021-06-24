/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.data = rows;
    this.elem = document.createElement('table');

    for(const row of this.data){
      this.name = row.name;
      this.age = row.age;
      this.salary = row.salary;
      this.city = row.city;
      this.item =  '<tr>' + 
      '<td>' + this.name + '</td>' + 
      '<td>' + this.age + '</td>' + 
      '<td>' + this.salary + '</td>' + 
      '<td>' + this.city + '</td>' + 
      '<td>' + '<button>' + 'X' + '</button>' + '</td>' + 
      '</tr>';

      this.elem.insertAdjacentHTML('beforeEnd', this.item);
    }
    this.elem.addEventListener('click', this.onClickRow);
  }
  
  render(){
      return this.elem;
  }

  onClickRow(event){
    if(event.target.tagName == 'BUTTON'){
      event.target.closest('tr').remove();
    }
  }

}