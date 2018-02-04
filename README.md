# Ember-math-helpers

<a href="https://shipshape.io/"><img src="http://i.imgur.com/KVqNjgO.png" alt="Ship Shape" width="100" height="100"/></a>

**[ember-math-helpers is built and maintained by Ship Shape. Contact us for Ember.js consulting, development, and training for your project](https://shipshape.io/ember-consulting/)**.

[![npm version](https://badge.fury.io/js/ember-math-helpers.svg)](http://badge.fury.io/js/ember-math-helpers)
![Download count all time](https://img.shields.io/npm/dt/ember-math-helpers.svg)
[![npm](https://img.shields.io/npm/dm/ember-math-helpers.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-math-helpers.svg)](http://emberobserver.com/addons/ember-math-helpers)
[![Build Status](https://travis-ci.org/shipshapecode/ember-math-helpers.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-math-helpers)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-math-helpers/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-math-helpers)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/ember-math-helpers/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/ember-math-helpers/coverage)

HTMLBars template helpers for doing basic arithmetic operations

## Installation

`ember install ember-math-helpers`

## Configuration
If you don't need all the helpers, you can specify which to whitelist or blacklist using `only` or `except` within your `ember-cli-build.js`:

```js
module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-math-helpers': {
      only: ['add', 'sub'],
      except: ['random', 'tan']
    }
  });
```

Both `only` and `except` can be safely used together (the addon computes the diff), although it's best if you only use one for your own sanity.

```js
except: ['random'] // imports all helpers except `random`
only: ['random'] // imports only `random`
```


## Usage

### Basic Arithmetic
Helper | JavaScript | HTMLBars
-------|------------|---------------
add    | `a + b`    | `{{add a b}}`
div    | `a / b`    | `{{div a b}}`
mod    | `a % b`    | `{{mod a b}}`
mult   | `a * b`    | `{{mult a b}}`
sub    | `a - b`    | `{{sub a b}}`

### Math

We decided we should support the entirety of the JS `Math` methods, so this list will be quite long.

Helper  | JavaScript                  | HTMLBars
--------|---------------------------|----------------------
abs     | `Math.abs(a)`             | `{{abs a}}`
acos    | `Math.acos(a)`            | `{{acos a}}`
acosh   | `Math.acosh(a)`           | `{{acosh a}}`
asin    | `Math.asin(a)`            | `{{asin a}}`
asinh   | `Math.asinh(a)`           | `{{asinh a}}`
atan    | `Math.atan(a)`            | `{{atan a}}`
atanh   | `Math.atanh(a)`           | `{{atanh a}}`
atan2   | `Math.atan2(a, b)`        | `{{atan2 a b}}`
cbrt    | `Math.cbrt(a)`            | `{{cbrt a}}`
ceil    | `Math.ceil(a)`            | `{{ceil a}}`
clz32   | `Math.clz32(a)`           | `{{clz32 a}}`
cos     | `Math.cos(a)`             | `{{cos a}}`
cosh    | `Math.cosh(a)`            | `{{cosh a}}`
exp     | `Math.exp(a)`             | `{{exp a}}`
expm1   | `Math.expm1(a)`           | `{{expm1 a}}`
floor   | `Math.floor(a)`           | `{{floor a}}`
fround  | `Math.fround(a)`          | `{{fround a}}`
hypot   | `Math.hypot([a, b, c...])`| `{{hypot a b c}}`
imul    | `Math.imul(a, b)`         | `{{imul a b}}`
log-e   | `Math.log(a)`             | `{{log-e a}}`
log1p   | `Math.log1p(a)`           | `{{log1p a}}`
log10   | `Math.log10(a)`           | `{{log10 a}}`
log2    | `Math.log2(a)`            | `{{log2 a}}`
max     | `Math.max([a, b, c...])`  | `{{max a b c}}`
min     | `Math.min([a, b, c...])`  | `{{min a b c}}`
pow     | `Math.pow(a, b)`          | `{{pow a b}}`
round   | `Math.round(a)`           | `{{round a}}`
sign    | `Math.sign(a)`            | `{{sign a}}`
sin     | `Math.sin(a)`             | `{{sin a}}`
sqrt    | `Math.sqrt(a)`            | `{{sqrt a}}`
tan     | `Math.tan(a)`             | `{{tan a}}`
tanh    | `Math.tanh(a)`            | `{{tanh a}}`
trunc   | `Math.trunc(a)`           | `{{trunc a}}`

### Special Cases

Right now, there is one special case: the `round` helper will also take either
a `decimals` property or an `exp` property. `decimals` will round to the
specified number of decimals, while `exp` will round to the given power of ten.
For example:

```handlebars
{{round 35.855 decimals=2}} {{!-- prints "35.86" --}}
```

```handlebars
{{round 1234567 exp=3}} {{!-- prints "1235000" --}}
```

### Random
Helper                                       | JavaScript                                                                | HTMLBars
---------------------------------------------|---------------------------------------------------------------------------|--------------
random (No Args) [, decimals]                | `Math.random()`, `decimals` sets precision from 0-20 (default: 0)         | `{{random}}` or `{{random decimals=4}}`
random (Upper Bound) [, round]               | capped `Math.random()`, `decimals` sets precision from 0-20 (default: 0)  | `{{random 42}}` or `{{random 42 decimals=4}}`
random (Upper Bound, Lower Bound) [, round]) | bounded `Math.random()`, `decimals` sets precision from 0-20 (default: 0) | `{{random 21 1797}}` or `{{random 21 1797 decimals=4}}`


You can pass as many arguments as you would like to the helpers. For something like
`10 - 1 - 2 - 3` you could do:
```hbs
{{sub 10 1 2 3}}
```

You can also use these helpers to do math inside other HTMLBars markup like so:
```hbs
<span class="nav-marker color-{{if multiColor (add selectedIndex 1) 1}}"></span>
```

## Composable Helpers

There is full support for using all of the helpers together, to do complex math,
even though complex calculations may be better left to JS.

For something like `(15 + 5) / 2 * 10` you could do:
```hbs
{{mult (div (add 15 5) 2) 10}}
```
