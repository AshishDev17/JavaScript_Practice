class List {
  constructor() {
    this.listSize = 0;
    this.dataStore = [];
  }

  //append (element) - Adds new element to end of list
  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  //find the index of the element in the dataStore, if present returns index otherwise returns -1
  find(element) {
    for (let i = 0; i < this.dataStore.length; i++){
      if (this.dataStore[i] === element) return i;
    }

    return -1;
  }

  /*The remove() function uses the position returned by find() to splice the dataStore array at that place.
   After the array is modified, listSize is decremented by 1 to reflect the new size of the list.
   The function returns true if an element is removed, and false otherwise.*/
  remove(element) {
    const index = find(element);

    if (index >= 0){
      this.dataStore.splice(index, 1);
      --this.listSize;
      return true;
    }

    return false;
  }

  //length() function returns the number of elements in a list
  length() {
    return this.listSize;
  }

  //toString() function returns string representation of list
  toString() {
    return this.dataStore.toString();
  }

  /* An insertion function needs to know where to insert an element, insertion occurs after a specified element already in the list.
  Insert function accepts two arguments, first argument is the element to insert and second argument is the element after that we
  insert the new element */
  insert(element, after) {
    const insertAt = find(after);

    if (insertAt >= 0){
      this.dataStore.splice(insertAt, 0, element);
      ++this.listSize;
      return true;
    }

    return false;
  }

  // clear() function clears all elements from list
  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
  }
}

const list = new List();

console.log('list ', list);
