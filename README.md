# ember-cli-yaml-module

This addon adds support for importing YAML files into your Ember CLI app, using
[broccoli-json-module](https://github.com/ghempton/broccoli-json-module) and
[broccoli-yaml](https://github.com/aboveproperty/broccoli-yaml).

## Installation / Usage

From within your Ember CLI application, run the following:

```sh
ember install:addon ember-cli-yaml-module
```

Then, any YAML files in either `app` or `tests` will be converted to ES6
modules that you can import like so:

```js
import myFixture from 'my-app/tests/fixtures/my-fixture';
```

## Credit

This heavily borrows from (is a ripoff of) Dray Lacy's [ember-cli-json-module](https://github.com/IvyApp/ember-cli-json-module)
