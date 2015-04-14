# Require or Disallow One Let Declaration per Scope (one-let)

block variables can be declared at any point in JavaScript code using `var`, `let`, or `const`. There are many styles and preferences related to the declaration of block variables, and one of those is deciding on how many block variables declarations should be allowed in a single function.

There are two schools of thought in this regard:

1. There should be just one block variables declaration for all block variables in the function. That declaration typically appears at the top of the function.
2. You should use one block variables declaration for each block variables you want to define.

For instance:

```js
// one let declaration per function
function foo() {
    let bar, baz;
}

// multiple block variables declarations per function
function foo() {
    let bar;
    let baz;
}
```

The single-declaration school of thought is based in pre-ECMAScript 6 behaviors, where there was no such thing as block scope, only function scope. Since all `let` statements are hoisted to the top of the function anyway, some believe that declaring all block variables in a single declaration at the top of the function removes confusion around scoping rules.

## Rule Details

This rule is aimed at enforcing the use of either one block variables declaration or multiple declarations per function. As such, it will warn when it encounters an unexpected number of block variables declarations.

### Options

There is one option for this rule, and that is specified as `"never"` (the default) to enforce multiple block variables declarations per function or `"never"` to enforce one block variables declaration per function. You can configure the rule as follows:

```json
{
    "one-let": [2, "never"]
}
```

When configured with `"never"` (the default) as the first option, the following patterns are considered warnings:

```js
function foo() {
    let bar = true,
        baz = false;
}

```

The following patterns are not considered warnings:

```js
function foo() {
    let bar = true;
    let baz = false;
}

function foo() {
    let bar = true;

    if (baz) {
        let qux = true;
    }
}
```

When configured with `"always"` as the first option, the following patterns are considered warnings:

The following patterns are considered warnings:

```js
function foo() {
    let bar = true;
    let baz = false;
}
```

The following patterns are not considered warnings:

```js
function foo() {
    let bar = true,
        baz = false;
}

function foo() {
    let bar = true,
        qux = false;

    if (baz) {
        let qux = true;
    }
}
```


## Further Reading

[JSLint Errors - Combine this with the previous 'var' statement](http://jslinterrors.com/combine-this-with-the-previous-var-statement/)
