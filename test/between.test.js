import {between} from './../src/validators.js';

describe('Validators Test', function () {

    it('Should be inside between()', function () {
        // given
        const validator = between(5, 10);

        // when
        const valid = validator(6);

        // then
        expect(valid).toBe(true);
    });

    it('Should not be lower than between()', function () {
        // given
        const validator = between(5, 10);

        // when
        const valid = validator(3);

        // then
        expect(valid).toBe(false);
    });

    it('Should not be higher than between()', function () {
        // given
        const validator = between(5, 10);

        // when
        const valid = validator(11);

        // then
        expect(valid).toBe(false);
    });

    it('Should not be on range ends in between()', function () {
        // given
        const validator = between(5, 10);

        // when
        const validLow = validator(5);
        const validHigh = validator(10);

        // then
        expect(validLow).toBe(false);
        expect(validHigh).toBe(false);
    });
});
