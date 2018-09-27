## Usage

### Basic Arithmetic
Helper | JavaScript | HTMLBars
-------|------------|---------------
add    | `a + b`    | `{{add a b}}`
div    | `a / b`    | `{{div a b}}`
mod    | `a % b`    | `{{mod a b}}`
mult   | `a * b`    | `{{mult a b}}`
sub    | `a - b`    | `{{sub a b}}`


### Advanced Arithmetic

#### Greatest Common Divisor

The `gcd` helper uses [the Euclidean Algorithm](https://en.wikipedia.org/wiki/Greatest_common_divisor#Using_Euclid's_algorithm) to find the largest positive integer that divides two integers.

```hbs
{{gcd 100 48}}
<!-- Computes 4 -->

{{gcd 6 -10}}
<!-- Computes 2 -->
```

If no arguments are passed, the helper will return 0. If one argument is passed, the helper will simply reflect it back.


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

{{editable-templates}}
