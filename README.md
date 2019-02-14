# Butifl

## Strongly Typed Typescript Utility Library


### `.assignExisting`
```typescript
static assignExisting<T, U>(target: T, source: U, skipNullAndUndefined: boolean=true): T;
```
Basic usage is exactly like `Object.assign` except it only copies properties from source that already
exist on target.
When `skipNullAndUndefiend` is true then source properties that are `null` or `undefined` will not be copied into
`target`



Basic Usage
```typescript
class A {
	a: number = 0;
	b: number = 5;
}

let obj = {
	a: 10,
	b: 100,
	c: 1000
};
let aInst = Butifl.assignExisting(new A(), obj);
console.log(aInst); // {a: 10, b: 100}

```
Skipping or not skipping undefined properties
```typescript
class A {
	a: number = 0;
	b: number = 5;
	c: number = 100
	d: number = 1;
}
let obj = {
	a: 10,
	b: 100,
	c: undefined,
	d: null
};
let aSkipUndefined = Butifl.assignExisting(new A(), obj);
console.log(aSkipUndefined); // {a: 10, b: 100, c: 100, d: 1}
let aTakeUndefined = Butifl.assignExisting(new A(), obj, false);
console.log(aTakeUndefined); // {a: 10, b: 100, c: undefined, d: null}
```
