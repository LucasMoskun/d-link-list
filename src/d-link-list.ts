import { DLinkNode } from "./d-link-node";

export class DLinkList<T> {
  private head: DLinkNode<T> | null = null;
  private tail: DLinkNode<T> | null = null;
  private _length = 0;

  get length(): number {
    return this._length;
  }

  headValue(): T | undefined {
    return this.head?.value;
  }

  headNode(): DLinkNode<T> | null {
    return this.head;
  }

  tailValue(): T | undefined {
    return this.tail?.value;
  }

  tailNode(): DLinkNode<T> | null {
    return this.tail;
  }

  push(value: T): void {
    const node = new DLinkNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this._length++;
  }

  pop(): T | undefined {
    if (this.tail === null) {
      return undefined;
    }
    const value = this.tail.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail!.next = null;
    }
    this._length--;
    return value;
  }

  shift(): T | undefined {
    if (this.head === null) {
      return undefined;
    }
    const value = this.head.value;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head!.prev = null;
    }
    this._length--;
    return value;
  }

  unshift(value: T): void {
    const node = new DLinkNode(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this._length++;
  }

  removeIndex(index: number): T | undefined {
    if (index < 0 || index >= this._length) {
      return undefined;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === index) {
        if (currentNode === this.head) {
          return this.shift();
        }
        if (currentNode === this.tail) {
          return this.pop();
        }
        currentNode.prev!.next = currentNode.next;
        currentNode.next!.prev = currentNode.prev;
        this._length--;
        return currentNode.value;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return undefined;
  }

  removeValue(value: T): T | undefined {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          return this.shift();
        }
        if (currentNode === this.tail) {
          return this.pop();
        }
        currentNode.prev!.next = currentNode.next;
        currentNode.next!.prev = currentNode.prev;
        this._length--;
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }

  getIndexOf(value: T): number {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return -1;
  }

  getIndexOfNode(node: DLinkNode<T>): number {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentNode === node) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return -1;
  }

  getAtIndex(index: number): DLinkNode<T> | undefined {
    if (index < 0 || index >= this._length) {
      return undefined;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return undefined;
  }

  getByValue(value: T): DLinkNode<T> | undefined {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }

  remove(value: T): T | undefined {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        if (currentNode === this.head) {
          return this.shift();
        }
        if (currentNode === this.tail) {
          return this.pop();
        }
        currentNode.prev!.next = currentNode.next;
        currentNode.next!.prev = currentNode.prev;
        this._length--;
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return undefined;
  }

  removeNode(node: DLinkNode<T>): T | undefined {
    if (node === null) {
      return undefined;
    }
    if (node === this.head) {
      return this.shift();
    }
    if (node === this.tail) {
      return this.pop();
    }
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
    this._length--;
    return node.value;
  }

  removeAtIndex(index: number): T | undefined {
    if (index < 0 || index >= this._length) {
      return undefined;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === index) {
        if (currentNode === this.head) {
          return this.shift();
        }
        if (currentNode === this.tail) {
          return this.pop();
        }
        currentNode.prev!.next = currentNode.next;
        currentNode.next!.prev = currentNode.prev;
        this._length--;
        return currentNode.value;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return undefined;
  }

  addNextToIndex(value: T, index: number): void {
    if (index < 0 || index >= this._length) {
      return;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === index) {
        const node = new DLinkNode(value);
        node.next = currentNode.next;
        node.prev = currentNode;
        if (currentNode.next === null) {
          this.tail = node;
        } else {
          currentNode.next.prev = node;
        }
        currentNode.next = node;
        this._length++;
        return;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }
  addNext(value: T, node: DLinkNode<T>): void {
    if (node === null) {
      return;
    }
    const newNode = new DLinkNode(value);
    newNode.next = node.next;
    newNode.prev = node;
    if (node.next !== null) {
      node.next.prev = newNode;
    } else {
      this.tail = newNode;
    }
    node.next = newNode;
    this._length++;
    if (node === this.tail) {
      console.log("Add next detected possible lingering node");
      this.tail = newNode;
    }
  }

  addPrevToIndex(value: T, index: number): void {
    if (index < 0 || index >= this._length) {
      return;
    }
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode !== null) {
      if (currentIndex === index) {
        const node = new DLinkNode(value);
        node.next = currentNode;
        node.prev = currentNode.prev;
        currentNode.prev = node;
        if (node.prev === null) {
          this.head = node;
        }
        this._length++;
        return;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
  }

  addPrev(value: T, node: DLinkNode<T>): void {
    const newNode = new DLinkNode(value);
    newNode.next = node;
    newNode.prev = node.prev;
    if (node.prev !== null) {
      node.prev.next = newNode;
    } else {
      this.head = newNode;
    }
    node.prev = newNode;
    this._length++;
    if (node === this.head) {
      console.log("Add prev detected possible lingering node");
      this.head = newNode;
    }
  }

  swapAtIndex(index1: number, index2: number) {
    if (
      index1 < 0 ||
      index1 >= this._length ||
      index2 < 0 ||
      index2 >= this._length
    ) {
      return;
    }
    if (index1 === index2) {
      return;
    }
    let node1 = this.getAtIndex(index1);
    let node2 = this.getAtIndex(index2);
    if (node1 === null || node2 === null) {
      return;
    }
    this.swapNodes(node1, node2);
  }

  swapNodeAtIndex(node: DLinkNode<T>, index: any) {
    if (index < 0 || index >= this._length) {
      return;
    }
    if (node === null) {
      return;
    }
    let node2 = this.getAtIndex(index);
    if (node2 === null) {
      return;
    }
    this.swapNodes(node, node2);
  }

  swapNodes(node1: DLinkNode<T>, node2: DLinkNode<T>) {
    if (node1 === node2) {
      return;
    }
    if (node2.next === node1) {
      const temp = node1;
      node1 = node2;
      node2 = temp;
    }

    const tempPrev = node1.prev;
    const tempNext = node1.next;

    if (node1.next === node2) {
      node1.prev = node2;
      node1.next = node2.next;
      node2.prev = tempPrev;
      node2.next = node1;
    } else {
      node1.prev = node2.prev;
      node1.next = node2.next;
      node2.prev = tempPrev;
      node2.next = tempNext;
    }
    if (node1.prev !== null) {
      node1.prev.next = node1;
    }
    if (node1.next !== null) {
      node1.next.prev = node1;
    }
    if (node2.prev !== null) {
      node2.prev.next = node2;
    }
    if (node2.next !== null) {
      node2.next.prev = node2;
    }
    if (node1 === this.head) {
      this.head = node2;
    } else if (node2 === this.head) {
      this.head = node1;
    }
    if (node1 === this.tail) {
      this.tail = node2;
    } else if (node2 === this.tail) {
      this.tail = node1;
    }
  }

  toArray(): T[] {
    const array: T[] = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  toArrayReverse(): T[] {
    const array: T[] = [];
    let currentNode = this.tail;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.prev;
    }
    return array;
  }

  map<W>(callback: (value: T, index: number) => W): DLinkList<W> {
    const newList = new DLinkList<W>();
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      newList.push(callback(currentNode.value, index));
      currentNode = currentNode.next;
      index++;
    }
    return newList;
  }

  [Symbol.iterator]() {
    let currentNode = this.head;
    return {
      next: () => {
        if (currentNode) {
          const value = currentNode.value;
          currentNode = currentNode.next;
          return { value, done: false };
        }
        return { done: true };
      },
    };
  }

  *values() {
    let currentNode = this.head;
    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }
}
