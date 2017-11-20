class Set {
  constructor() {
    this.store = {};
  }

  //add() function accepts an argument'value', and adds to the store. Add() function returns true if value is
  //added to the store, otherwise returns false
  add(value) {
    if (!this.store[value]) {
      this.store[value] = value;
      return true;
    }

    return false;
  }


}
