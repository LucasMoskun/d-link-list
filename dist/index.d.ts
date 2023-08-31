declare module "d-link-list" {
  export declare class DLinkNode<T> {
    value: T;
    next: DLinkNode<T> | null;
    prev: DLinkNode<T> | null;

    constructor(value: T);
  }

  export declare class DLinkList<T> {
    private head: DLinkNode<T> | null;
    private tail: DLinkNode<T> | null;
    private _length: number;
    get length(): number;
    headValue(): T | undefined;
    headNode(): DLinkNode<T> | null;
    tailValue(): T | undefined;
    tailNode(): DLinkNode<T> | null;
    push(value: T): void;
    pop(): T | undefined;
    shift(): T | undefined;
    unshift(value: T): void;
    removeIndex(index: number): T | undefined;
    removeValue(value: T): T | undefined;
    getIndexOf(value: T): number;
    getIndexOfNode(node: DLinkNode<T>): number;
    getAtIndex(index: number): DLinkNode<T> | undefined;
    getByValue(value: T): DLinkNode<T> | undefined;
    remove(value: T): T | undefined;
    removeNode(node: DLinkNode<T>): T | undefined;
    removeAtIndex(index: number): T | undefined;
    addNextToIndex(value: T, index: number): void;
    addNext(value: T, node: DLinkNode<T>): void;
    addPrevToIndex(value: T, index: number): void;
    addPrev(value: T, node: DLinkNode<T>): void;
    toArray(): T[];
    map<W>(callback: (value: T, index: number) => W): DLinkList<W>;
    [Symbol.iterator](): Iterator<T>;
    values(): Generator<T>;
  }
}
