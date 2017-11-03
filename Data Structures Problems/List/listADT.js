class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
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
    this.pos = 0;
  }

  // contains() function checks if a particular value is part of the list or not
  contains(element) {
    const foundAt = find(element);

    if (foundAt >= 0) return true;

    return false;
  }

  //front() function sets current position to first element of list
  front() {
    this.pos = 0;
  }

  //end() function sets current position to last element of list
  end() {
    this.pos = this.listSize - 1;
  }

  //prev() function moves current position back one element
  prev() {
    if (this.pos > 0){
      --this.pos;
    }
  }

  //next() function moves current position forward one element
  next() {
    if (this.pos < this.listSize - 1){
      ++this.pos;
    }
  }

  //currPos() function returns the current position in list
  currPos() {
    return this.pos;
  }

  //moveTo(position) function moves the current position to specified position
  moveTo(position) {
    this.pos = position;
  }

  //getElement() function returns element at current position
  getElement() {
    return this.dataStore[this.pos];
  }
}

