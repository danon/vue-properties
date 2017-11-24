import {smallerThan} from './../src/validators.js';

describe('Validators Test', function () {

    it('Should be smallerThan()', function () {
        // given
        const validator = smallerThan(100);

        // when
        const valid = validator(20);

        // then
        expect(valid).toBe(true);
    });

    it('Should not be smallerThan()', function () {
        // given
        const validator = smallerThan(100);

        // when
        const valid = validator(110);

        // then
        expect(valid).toBe(false);
    });

    it('Should not be equal in smallerThan()', function () {
        // given
        const validator = smallerThan(100);

        // when
        const valid = validator(100);

        // then
        expect(valid).toBe(false);
    });
});
