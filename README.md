# Ember-math-helpers

<a href="https://shipshape.io/"><img src="http://i.imgur.com/bU4ABmk.png" width="100" height="100"/></a>

[![Join the chat at https://gitter.im/shipshapecode/ember-math-helpers](https://badges.gitter.im/shipshapecode/ember-math-helpers.svg)](https://gitter.im/shipshapecode/ember-math-helpers?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

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
max     | `Math.max([a, b, c...])`  | `{{max a b c}}`
min     | `Math.min([a, b, c...])`  | `{{min a b c}}`
pow     | `Math.pow(a, b)`          | `{{pow a b}}`
round   | `Math.round(a)`           | `{{round a}}`
sin     | `Math.sin(a)`             | `{{sin a}}`
sqrt    | `Math.sqrt(a)`            | `{{sqrt a}}`
trunc   | `Math.trunc(a)`           | `{{trunc a}}`


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
