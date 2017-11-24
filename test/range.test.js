import {range} from './../src/validators.js';

describe('Validators Test', function () {

    it('Should be inside range()', function () {
        // given
        const validator = range(5, 10);

        // when
        const valid = validator(6);

        // then
        expect(valid).toBe(true);
    });

    it('Should not be lower than range()', function () {
        // given
        const validator = range(5, 10);

        // when
        const valid = validator(3);

        // then
        expect(valid).toBe(false);
    });

    it('Should not be higher than range()', function () {
        // given
        const validator = range(5, 10);

        // when
        const valid = validator(11);

        // then
        expect(valid).toBe(false);
    });

    it('Should be on range ends in range()', function () {
        // given
        const validator = range(5, 10);

        // when
        const validLow = validator(5);
        const validHigh = validator(10);

        // then
        expect(validLow).toBe(true);
        expect(validHigh).toBe(true);
    });
});
