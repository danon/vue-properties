function oneOf() {
    const values = Array.prototype.slice.apply(arguments);
    return function (value) {
        return values.indexOf(value) > -1;
    }
}

function regex(expression) {
    if (!expression instanceof RegExp) throw "Invalid argument";

    return function (value) {
        return expression.test(value);
    };
}

function range(min, max) {
    if (typeof min !== 'number') throw "Invalid argument";
    if (typeof max !== 'number') throw "Invalid argument";
    if (min >= max) throw "Min can't be higher nor equal max";

    return function (value) {
        return min <= value && value <= max;
    };
}

function between(min, max) {
    if (typeof min !== 'number') throw "Invalid argument";
    if (typeof max !== 'number') throw "Invalid argument";

    return function (value) {
        return min < value && value < max;
    };
}

function smallerThan(max) {
    if (typeof max !== 'number') throw "Invalid argument";

    return function (value) {
        return value < max;
    };
}

function biggerThan(min) {
    if (typeof min !== 'number') throw "Invalid argument";

    return function (value) {
        return min < value;
    };
}

export {
    oneOf, regex, range, between, smallerThan, biggerThan
}
