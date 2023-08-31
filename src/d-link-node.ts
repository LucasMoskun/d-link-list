export class DLinkNode<T> {
  value: T;
  next: DLinkNode<T> | null = null;
  prev: DLinkNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
