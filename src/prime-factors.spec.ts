import {primeFactors} from './prime-factors'

import {expect} from 'chai';
import 'mocha'

describe('calculating primefactors of a natural number', () => {
    it('should return an empty array given number 1', () => {
        expect(primeFactors(1)).to.be.empty
    });
    it('should return [2] given number 2', () => {
        expect(primeFactors(2)).to.deep.equal([2]);
    });
    it('should return [3] given number 3', () => {
        expect(primeFactors(3)).to.deep.equal([3]);
    });
    it('should return [2, 2} given number 4', () => {
        expect(primeFactors(4)).to.deep.equal([2, 2]);
    });
});