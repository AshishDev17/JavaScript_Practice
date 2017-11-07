class Dictionary {
  constructor() {
    this.dataStore = {};
  }

  //add() or set() accepts two arguments, first argument is 'key' and seconde aergument is 'value',
  //and sets the key with its value in dictionary DS
  add(key, value) {
    this.dataStore[key] = value;
  }

  //get() or find() accepts one argument 'key', and return the value of the 'key' in Dictionary
  get(key) {
    return this.dataStore[key];
  }

  //has() function accepts one argument 'key', and returns true if Dictionary has 'key' otherwise returns false
  has(key) {
    return this.dataStore.hasOwnProperty(key);
  }

  //remove() or delete() function accepts one argument 'key', and returns true if removed otherwise returns returns false
  remove(key) {
    if (this.has(key)) {
      delete this.dataStore[key];
      return true;
    }

    return false;
  }

  //count() or size() function returns number of entries in the Dictionary
  count() {
    return Object.keys(this.dataStore).length;
  }

  //sortedShowall() or sortedDisplay() function displays all entries of the Distionary
  sortedDisplay() {
    const sortedKeys = Object.keys(this.dataStore).sort();
    for (let key in sortedKeys) {
      console.log(sortedKeys[key], ' - ', this.dataStore[sortedKeys[key]]);
    }
  }

  //clear() function clear all entries in the dictionary
  clear() {
    this.dataStore = {};
  }

  //keys() function returns all the keys of entries in Dictionary
  keys() {
    const keys = [];

    for(let key in this.dataStore) {
      keys.push(key);
    }

    return keys;
  }

  //values() function returns all the values of entries in Dictionary
  values() {
    const values = [];

    for(let key in this.dataStore) {
      values.push(this.dataStore[key]);
    }

    return values;
  }
}



var names = new Dictionary();
console.log('------Testing add() function------');
names.add('Guest2', 'Russell');
names.add('Guest1', 'Conway');
names.sortedDisplay();
console.log();
console.log('------Testing get() function------');
console.log('Guest1 - ', names.get('Guest1'));
console.log();
console.log('------Testing has() function------');
console.log('Dictionary names has key Guest1 - ', names.has('Guest1'));
console.log('Dictionary names has key Guest3 - ', names.has('Guest3'));
console.log();
console.log('------Testing count() function------');
console.log('Dictionary names has number of ', names.count(), ' entries.');
console.log();
console.log('------Testing keys() function------');
console.log('Dictionary names has these keys ', names.keys());
console.log();
console.log('------Testing values() function------');
console.log('Dictionary names has these values ', names.values());
console.log();
console.log('------Testing remove() function------');
console.log('remove("Guest1") returns ', names.remove('Guest1'));
console.log('     --Dictionary entries--   ')
names.sortedDisplay();
console.log();
