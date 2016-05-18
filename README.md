# Ember-math-helpers

<a href="http://shipshape.io/"><img src="http://i.imgur.com/EVjM7AV.png" width="100" height="100"/></a>

[![Join the chat at https://gitter.im/shipshapecode/ember-math-helpers](https://badges.gitter.im/shipshapecode/ember-math-helpers.svg)](https://gitter.im/shipshapecode/ember-math-helpers?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm version](https://badge.fury.io/js/ember-math-helpers.svg)](http://badge.fury.io/js/ember-math-helpers)
[![npm](https://img.shields.io/npm/dm/ember-math-helpers.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-math-helpers.svg)](http://emberobserver.com/addons/ember-math-helpers)
[![Build Status](https://travis-ci.org/shipshapecode/ember-math-helpers.svg?branch=master)](https://travis-ci.org/shipshapecode/ember-math-helpers)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-math-helpers/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-math-helpers)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/ember-math-helpers/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/ember-math-helpers/coverage)

HTMLBars template helpers for doing basic arithmetic operations

## Installation

`ember install ember-math-helpers`

## Usage

Helper | JavaScript | HTMLBars
-------|------------|-------------------
add    | `a + b`    | `{{add a b}}`
div    | `a / b`    | `{{div a b}}`
mod    | `a % b`    | `{{mod a b}}`
mult   | `a * b`    | `{{mult a b}}`
sub    | `a - b`    | `{{sub a b}}`

You can also use these helpers to do math inside other HTMLBars markup like so:
```hbs
<span class="nav-marker color-{{if multiColor (add selectedIndex 1) 1}}"></span>
```


