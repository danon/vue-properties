# Vue.js properties

1. [Installation](#installation)
2. [API](#api)
    * [oneOf()](#allowing-a-string-to-be-one-of-a-set)
    * [regex()](#matching-a-property-by-regular-expression)
    * [range()](#checking-whether-an-integer-is-between-two-numbers)
    * [between()](#checking-whether-an-integer-is-between-two-numbers)
    * [smallerThan()](#checking-whether-an-integer-is-smaller-or-greater)
    * [biggerThan()](#checking-whether-an-integer-is-smaller-or-greater)
3. [Upcoming features](#upcoming-features)
    * [structure()](#validate-structure-of-an-object-property)

## Installation

This is a set of handy validators for Vue.js.

```bash
npm install vue-properties
```

## API

### Allowing a string to be one of a set

```js
import {oneOf} from 'vue-properties';

export default {
    props: {
        size: {
            type: String, 
            validator: oneOf('large', 'medium', 'small')
        }
    }
}
```

### Matching a property by regular expression
```js
import {regex} from 'vue-properties';

export default {
    props: {
        field: {
            type: String, 
            validator: regex(/[A-Z][a-z]+/)
        }
    }
}
```


### Checking whether an integer is between two numbers
```js
import {range, between} from 'vue-properties';

export default {
    props: {
        percentage: {
            type: Integer, 
            validator: range(0, 100)
        },
        teen: {
            type: Integer,
            validator: between(0, 20)
        }
    }
}
```
:bulb: `range()` is inclusive (so `0` and `100` also match). `between()` is exclusive, so `0` and `20` don't match.

### Checking whether an integer is smaller or greater

```js
import {smallerThan, biggerThan} from 'vue-properties';

export default {
    props: {
        canDrink: {
            type: Integer, 
            validator: biggerThan(18)
        },
        negative: {
            type: Integer,
            validator: smallerThan(0)
        }
    }
}
```

## Upcoming features

#### Validate structure of an object property.


```js
import {structure} from 'vue-properties';

export default {
    props: {
        options: {
            type: Object, 
            validator: structure({
                color: String,
                amount: Integer
            })
        }
    }
}
```

#### Validate a structure of objects inside a property array.

```js
import {structure} from 'vue-properties';

export default {
    props: {
        users: {
            type: Object, 
            validator: structure([
                {
                    id: Integer,
                    name: String,
                    shopCartItems: [
                        {
                            itemId: Integer,
                            itemName: String
                        }
                    ]
                }
            ])
        }
    }
}
```
