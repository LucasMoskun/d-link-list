export class DLinkedNode<T> {
  value: T;
  next: DLinkedNode<T> | null = null;
  prev: DLinkedNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
