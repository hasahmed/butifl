import 'jest';
import { Butifl } from './../src/butifl';

describe('Butifl Tests', () => {
	describe('Butifl.assignDefined', () => {
		it('Should be unchanged with only prop undefined', () => {
			const target = {
				a: 10
			};
			const source = {
				a: undefined
			};

			const targetAssigned = Butifl.assignDefined(target, source);
			expect(targetAssigned).toEqual({a: 10});
			expect(targetAssigned).toBe(target);
		});
		it('Should overwrite if source property defined', () => {
			const target = {
				a: 10
			};
			const source = {
				a: 11,
			};
			const targetAssigned = Butifl.assignDefined(target, source);
			expect(targetAssigned).toEqual({a: 11});
			expect(targetAssigned).toBe(target);
		});
		it('Should add properties from source', () => {
			const target = {
				a: 10
			};
			const source = {
				b: 100
			};
			const targetAssigned = Butifl.assignDefined(target, source);
			expect(targetAssigned).toEqual({a: 10, b: 100});
			expect(targetAssigned).toBe(target);
		});
		it('Should remain unchanged when source is null|undefined', () => {
			const target = {
				a: 10
			};
			expect(Butifl.assignDefined(target, null)).toEqual({a: 10});
			expect(Butifl.assignDefined(target, undefined)).toEqual({a: 10});
			expect(Butifl.assignDefined(target, null)).toBe(target);
		});
	});
	describe('Butifl.assignExisting', () => {
		it('Should skip properties non-existant in target', () => {
			const target = {
				a: 10
			};
			const source = {
				a: 100,
				b: 12
			};
			expect(Butifl.assignExisting(target, source)).toEqual({a: 100});
			expect(Butifl.assignExisting(target, source)).toBe(target);
		});
		it('Should skip properties non-existant in target', () => {
			const target = {
				a: 10
			};
			const source = {
				a: 100,
				b: 12
			};
			expect(Butifl.assignExisting(target, source)).toEqual({a: 100});
			expect(Butifl.assignExisting(target, source)).toBe(target);
		});
		it('Should skip undefined properties by default', () => {
			const target = {
				a: 10
			};
			const source = {
				a: undefined,
				b: 12
			};
			expect(Butifl.assignExisting(target, source)).toEqual({a: 10});
			expect(Butifl.assignExisting(target, source)).toBe(target);
		});
		it('Should assign undefined properties if option set', () => {
			const target = {
				a: 10
			};
			const source = {
				a: undefined,
				b: 12
			};
			expect(Butifl.assignExisting(target, source, false)).toEqual({a: undefined});
			expect(Butifl.assignExisting(target, source, false)).toBe(target);
		});
		it('Should take all existing properties of source that exist in target', () => {
			const target = {
				a: 10,
				b: 5,
				c: ''
			};
			const source = {
				a: undefined,
				b: 12,
				c: 100
			};
			expect(Butifl.assignExisting(target, source)).toEqual({
				a: 10,
				b: 12,
				c: 100,
			});
			expect(Butifl.assignExisting(target, source)).toBe(target);
		});
		it('Should take all existing properties of source that exist in target including undefined when option set', () => {
			const target = {
				a: 10,
				b: 5,
				c: ''
			};
			const source = {
				a: undefined,
				b: 12,
				c: 100
			};
			expect(Butifl.assignExisting(target, source, false)).toEqual({
				a: undefined,
				b: 12,
				c: 100,
			});
			expect(Butifl.assignExisting(target, source, false)).toBe(target);
		});
		it('Should remain the same when source falsey', () => {
			const target = {
				a: 10,
				b: 5,
				c: ''
			};
			expect(Butifl.assignExisting(target, null)).toEqual({
				a: 10,
				b: 5,
				c: '',
			});
			expect(Butifl.assignExisting(target, undefined)).toEqual({
				a: 10,
				b: 5,
				c: '',
			});
			expect(Butifl.assignExisting(target, null)).toBe(target);
			expect(Butifl.assignExisting(target, undefined)).toBe(target);
		});
	});
	describe('union', () => {
		it('Should union errors', () => {
			const arr1 = [1, 2, 3, 4];
			const arr2 = [1, 2, 3, 4, 5, 6, 7];
			const uni = Butifl.union<number, number>(arr1, arr2);
			const s = new Set(arr1.concat(arr2));
			expect(uni.indexOf(1)).not.toEqual(-1);
			expect(uni.indexOf(2)).not.toEqual(-1);
			expect(uni.indexOf(3)).not.toEqual(-1);
			expect(uni.indexOf(4)).not.toEqual(-1);
			expect(uni.indexOf(5)).not.toEqual(-1);
			expect(uni.indexOf(6)).not.toEqual(-1);
			expect(uni.indexOf(7)).not.toEqual(-1);
			expect(s.size).toEqual(uni.length);
		});
	});
});