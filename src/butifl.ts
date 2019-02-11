export class Butifl {
	static assignDefined<T, U>(target: T, source: U): T & U {
		for (let key in source) {
			if (source[key])
				target[key.toString()] = source[key];
		}
		return target as T & U;
	}
	/**
	 * assigns only to properties that ALREADY EXIST on target
	 * and that are also defined on source
	 * @param target 
	 * @param source 
	 */
	static assignExisting<T, U>(target: T, source: U, skipFalsey: boolean=true): T {
		for (let key in source) {
			if (target.hasOwnProperty(key)) {
				if (!skipFalsey) {
					target[key.toString()] = source[key];
				} else {
					if (source[key]) {
						target[key.toString()] = source[key];
					}
				}
			}
		}
		return target;
	}
	static union<T, U>(...errors: T[][]|U[][]): T[]|U[] {
		return [...new Set(errors.flat())];
	}
}