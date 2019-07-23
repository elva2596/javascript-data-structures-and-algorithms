class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList{
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(element) {
    const node = new Node(element);
    let current = this.head;

    if(!this.head) {
      this.head = node;

    } else {

      while(current) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  /**
   * @description: 添加指定位置元素
   * @param {type} 
   * @return: 
   */
  insert(element, position) {
    if(position < 0 || position > this.length){
      console.error(`the position you insert is invalid`)
       return false;
    }

    const node = new Node(element);
    let current = this.head, previous, index = 0;

    if(position === 0) {
      node.next = current;
      this.head = node;

    } else {

      while(index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      nodex.next = current;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  removeAt(position) {
    if(position < 0 || position >= this.length) {
      console.error(`the position you remove is invalid`)
      return null;
    }

    let current = this.head, current, index = 0;

    if(position === 0) {
      this.head = current.next;
    } else {

      while(index < position) {
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
    this.length--;
    return current.value;
  }

  /**
   * @description: 寻找元素下标
   * @param {type} 
   * @return {number}
   */
  findIndex(element) {
    let current = this.head, index = 0;

    while(current) {
      if(current.value === element) { return index; }
      index++;
      current = current.next;
    }
    return -1;
  }

  /**
   * @description: 删除指定文档
   * @param {Any} 
   * @return {Any}
   */
  remove(element) {
    const index = this.findIndex(element);
    return this.removeAt(index)
  }

  isEmpty() {
    return !!this.length
  }

  toString(){
    let current = this.head, string = '';

    while(current){
      string += current.value;
      current = current.next;
    }
    return string;
  }

  print() {
    console.log(this.toString()) 
  }
}