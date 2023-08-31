# D-Link-List

- A typescript double linked list implementation with added length, accessors, removers, and inserter utils. As well as a map function that returns an index on each iteration. Avoids copies -- which is also something to be aware of when mutating objects

##### Install

[d-link-list npm registry](https://www.npmjs.com/package/d-link-list)

```
yarn add d-link-list
```

##### Sample

```ts
import { DLinkList } from "../d-link-list";

const doubleList = new DLinkList<string>();
doubleList.push("apple");
doubleList.push("banana");
doubleList.push("cherry");

console.log("push");
doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("remove");
doubleList.remove("banana");

doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("removeIndex");
doubleList.removeIndex(0);

doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("unshift");
doubleList.unshift("apple");
doubleList.unshift("banana");

doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("shift");
doubleList.shift();

doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("pop");
doubleList.pop();

doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("getAtIndex");
let nodeAtIndex = doubleList.getAtIndex(0);
console.log(nodeAtIndex);

console.log("addNext");
doubleList.addNext("apple_next", nodeAtIndex!);
doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("addNextToIndex");
doubleList.addNextToIndex("apple_next_to_index", doubleList.length - 1);
doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("tailValue");
console.log(doubleList.tailValue());

console.log("getIndexOfNode");
let index = doubleList.getIndexOfNode(nodeAtIndex!);
console.log(`index of ${nodeAtIndex?.value}: ${index}`);

console.log("getByValue");
let nodeByValue = doubleList.getByValue("apple_next");
console.log(nodeByValue?.value);

console.log("removeNode");
doubleList.removeNode(nodeAtIndex!);
doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("addPrev");
nodeAtIndex = doubleList.getAtIndex(0);
doubleList.addPrev("apple_prev", nodeAtIndex!);
doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("addPrevToIndex");
doubleList.addPrevToIndex("apple_prev_to_index", 0);
doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("headValue");
console.log(doubleList.headValue());

console.log("toArray");
console.log(doubleList.toArray());

console.log("removeAtIndex");
doubleList.removeAtIndex(0);

doubleList.map((str, index) => {
  console.log(`${index}: ${str}`);
});

console.log("headValue");
console.log(doubleList.headValue());

console.log("removeAtIndex");
doubleList.removeAtIndex(2);

console.log("tailValue");
console.log(doubleList.tailValue());

console.log("for of iterator");
for (let item of doubleList) {
  console.log(item);
}

console.log("values iterator (less copies)");
for (let item of doubleList.values()) {
  console.log(item);
}
```
