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

  //clear() function clear everything in the set
  clear() {
    this.store = {};
  }

  //size() function returns the number of members of the set
  size() {
    return Object.keys(this.store).length;
  }

  //value() function returns all members of the set
  values() {
   return Object.values(this.store);
  }

  //union() function accepts an argument 'otherSet', and returns a new set obtained by combining the members of one set with the members of another set
  union(otherSet) {
    const unionSet = new Set();
    let values = this.values();

    for (let i = 0; i < values.length; i++) {
      unionSet.add(values[i]);
    }

    values = otherSet.values();

    for (let j = 0; j < values.length; j++) {
      unionSet.add(values[j]);
    }

    return unionSet;
  }

  //intersection() function accepts an argument 'otherSet', and returns a new set obtained by adding all the members of one set that also exist in a second set
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values;

    for (let i = 0; i < values.length; i++) {
      if (otherSet.has(values[i])) {
        intersectionSet.add(values[i]);
      }
    }

    return intersectionSet;
  }
}
