import {biggerThan} from './../src/validators.js';

describe('Validators Test', function () {

    it('Should be biggerThan()', function () {
        // given
        const validator = biggerThan(100);

        // when
        const valid = validator(120);

        // then
        expect(valid).toBe(true);
    });

    it('Should not be biggerThan()', function () {
        // given
        const validator = biggerThan(100);

        // when
        const valid = validator(20);

        // then
        expect(valid).toBe(false);
    });

    it('Should not be equal in biggerThan()', function () {
        // given
        const validator = biggerThan(100);

        // when
        const valid = validator(100);

        // then
        expect(valid).toBe(false);
    });
});
