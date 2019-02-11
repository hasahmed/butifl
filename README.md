# ButiFl

## Strongly Typed Javascript and Typescript Utility Library


### .assignExisting

```typescript
class A {
	public a = 0;
}

let obj = {
	a: 10,
	b: 100,
	c: 1000
};

let aInst = Butifl.assignExisting(new A(), obj);
console.log(aInst) // {a: 10}

```
