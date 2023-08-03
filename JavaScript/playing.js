class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

class Node {
  constructor(item, next) {
    this.value = item;
    this.next = next;
  }
}

const newNode = new Node(1);
const newNode1 = new Node(2, newNode);
const newLL = new LinkedList(newNode1);
console.log(newLL);
