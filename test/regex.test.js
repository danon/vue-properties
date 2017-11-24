import {regex} from './../src/validators.js';

describe('Validators Test', function () {

    it('Should match regex()', function () {
        // given
        const validator = regex(/^[a-z]{3}$/);

        // when
        const valid = validator('dog');

        // then
        expect(valid).toBe(true);
    });

    it('Should not match regex()', function () {
        // given
        const validator = regex(/^[a-z]{3}$/);

        // when
        const valid = validator('welcome');

        // then
        expect(valid).toBe(false);
    });
});
