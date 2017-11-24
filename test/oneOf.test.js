import {oneOf} from './../src/validators.js';

describe('Validators Test', function () {

    it('Should be oneOf()', function () {
        // given
        const validator = oneOf('hello', 'hi');

        // when
        const valid = validator('hello');

        // then
        expect(valid).toBe(true);
    });

    it('Should not be oneOf()', function () {
        // given
        const validator = oneOf('hello', 'hi');

        // when
        const valid = validator('welcome');

        // then
        expect(valid).toBe(false);
    });
});
