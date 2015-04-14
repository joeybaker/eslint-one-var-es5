# Require or Disallow One Const Declaration per Scope (one-const)

Constants can be declared at any point in JavaScript code using `var`, `let`, or `const`. There are many styles and preferences related to the declaration of Constants, and one of those is deciding on how many constant declarations should be allowed in a single function.

There are two schools of thought in this regard:

1. There should be just one constant declaration for all constants in the function. That declaration typically appears at the top of the function.
2. You should use one constant declaration for each constant you want to define.

For instance:

```js
// one const declaration per function
function foo() {
    const bar, baz;
}

// multiple constant declarations per function
function foo() {
    const bar;
    const baz;
}
```

The single-declaration school of thought is based in pre-ECMAScript 6 behaviors, where there was no such thing as block scope, only function scope. Since all `const` statements are hoisted to the top of the function anyway, some believe that declaring all constants in a single declaration at the top of the function removes confusion around scoping rules.

## Rule Details

This rule is aimed at enforcing the use of either one constant declaration or multiple declarations per function. As such, it will warn when it encounters an unexpected number of constant declarations.

### Options

There is one option for this rule, and that is specified as `"never"` (the default) to enforce multiple constant declarations per function or `"never"` to enforce one constant declaration per function. You can configure the rule as follows:

```json
{
    "one-const": [2, "never"]
}
```

When configured with `"never"` (the default) as the first option, the following patterns are considered warnings:

```js
function foo() {
    const bar = true,
        baz = false;
}

```

The following patterns are not considered warnings:

```js
function foo() {
    const bar = true;
    const baz = false;
}

function foo() {
    const bar = true;

    if (baz) {
        const qux = true;
    }
}
```

When configured with `"always"` as the first option, the following patterns are considered warnings:

The following patterns are considered warnings:

```js
function foo() {
    const bar = true;
    const baz = false;
}
```

The following patterns are not considered warnings:

```js
function foo() {
    const bar = true,
        baz = false;
}

function foo() {
    const bar = true,
        qux = false;

    if (baz) {
        const qux = true;
    }
}
```


## Further Reading

[JSLint Errors - Combine this with the previous 'var' statement](http://jslinterrors.com/combine-this-with-the-previous-var-statement/)
