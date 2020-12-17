class Storage{

  constructor(items){
    this.items = items;
  }

  getItems(){
    return this.items;
  }
  addItem(item){
   this.items.push(item);
  }
  removeItem(item){
    for(let i = 0; i<this.items.length; i+=1){
    if(item===this.items[i]){
      this.items.splice([i],1);
      return this.items;
    }
  }
console.log(`Такого элемента нет в массиве, не могу удалить!`);
}
}






const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]



