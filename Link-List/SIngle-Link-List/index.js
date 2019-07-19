class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList{
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(node) {
    if(!this.length){
      this.head = node;
      this.tail = node;

    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  print() {
    const ret = [];
    let currentNode = this.head;

    while(currentNode){
      ret.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    return ret.join('->');
  }

  getNode(index){
    let currentNode = this.head, curIndex = 0;

    while(curIndex < index) {
      curIndex++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}