export class DoubleLinkedNode<T> {
  value: T;
  next: DoubleLinkedNode<T> | null = null;
  prev: DoubleLinkedNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
