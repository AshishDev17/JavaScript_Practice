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
}
