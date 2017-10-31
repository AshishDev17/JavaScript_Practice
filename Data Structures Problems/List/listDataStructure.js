class List {
  constructor() {
    this.listSize = 0;
    this.dataStore = [];
  }

  //append (element) - Adds new element to end of list
  append(element) {
    this.dataStore[this.listSize++] = element;
  }

}

const list = new List();




console.log('list ', list);
