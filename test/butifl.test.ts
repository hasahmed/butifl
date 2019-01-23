import 'jest';
import { Butifl } from './../src/butifl';

describe('Util Tests', () => {
	describe('Util.assignDefined', () => {
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
	describe('Util.assignExisting', () => {
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
});