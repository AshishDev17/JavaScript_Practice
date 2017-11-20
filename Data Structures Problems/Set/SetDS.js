class Set {
  constructor() {
    this.store = {};
  }

  //has() function accepts an argument 'value', and returns true if 'value' is present in the set, otherwise
  //returns false
  has(value) {
    return this.store.hasOwnProperty(value);
  }

  //add() function accepts an argument'value', and adds to the set. Add() function returns true if the 'value' is
  //added to the set, otherwise returns false
  add(value) {
    if (!this.store.has(value)) {
      this.store[value] = value;
      return true;
    }

    return false;
  }

  //delete() function accepts an argument'value', and deletes that value from the set. Delete() function returns true if the 'value' is
  //deleted from the set, otherwise returns false
  delete(value) {
    if (this.store.has(value)) {
      delete this.store[value];
      return true;
    }

    return false;
  }


}
