# Vue dotnet validator
A vuejs validator for .NET forms.

## Build status
[![CircleCI](https://circleci.com/gh/Q42/vue-dotnet-validator/tree/master.svg?style=svg)](https://circleci.com/gh/Q42/vue-dotnet-validator/tree/master)

## Summary
This package makes it possible to use .NET model validation using vue.js instead of the default jQuery validator way that microsoft dictates.
The idea is that you use this on your server rendered HTML forms which include the data-attributes that are generated by C#'s razor template engine.

## Requirements
This package (from version 0.3.0 and up) requires vue 2.x.

## Installation
`npm install vue-dotnet-validator`

## Usage
Using this library requires changes on two places in your application, JavaScript and your razor cshtml templates.

### JavaScript
This registers the vue components so that Vue.js knows what to activate.
Base usage:
```JavaScript
import { validatorGroup, validator } from 'vue-dotnet-validator';

Vue.component('validator-group', validatorGroup);
Vue.component('validator', validator());
```

### Cshtml
The following code should be added to your cshtml forms. This makes sure that the validator logic is activated and adds the required references to DOM-nodes.
```HTML
<validator-group inline-template>
    <form asp-controller="Account" asp-action="Register" method="post" v-on:submit="validate">
        <validator value="@Model.LastName" inline-template>
           <span asp-validation-for="LastName" ref="message"></span>
           <input type="text" asp-for="LastName" ref="field" v-model="val" />
        </validator>
        <button type="submit">Register</button>
    </form>
</validator-group>
```

#### Explanation of the cshtml changes:
`<validator-group inline-template>`

This behaves as a container for the entire form, so we can maintain the state of the entire form and the validation status of the input fields in it.

`v-on:submit="validate"`

This adds an event listener to the `<form>` tag to make sure we prevent the default form submit event when fields are invalid.

`<validator value="@Model.LastName" inline-template>`

This adds a validator instance to the form. The `@Model.LastName` is the property of your model.

`ref="message"`

This adds a reference to the validation-message element. This makes sure the validation message is displayed at the correct position in the DOM.

`ref="field"`

This adds a reference to the input field, so the `<validator>` instance knows what element to watch.

`v-model="val"`

This adds the model binding in the `<validator>` instance.

## Creating custom validators
It is possible to create your own validators, below is an example of a very simple custom validator.

### JavaScript
```JavaScript
import { validator, BaseValidator } from 'vue-dotnet-validator';

class MyCustomValidator extends BaseValidator {
    isValid(value) {
        return !value || value == 'Hello';
    }
}

const validators = {
  MyCustomValidator
};

Vue.component('validator', validator(validators));
```

### Cshtml
To use this custom validator in your own form, make sure your custom .NET data annotation outputs a `data-val-mycustom="MESSAGE"` attribute on your `<input>` DOM node.

## Custom validators with additional parameters
You can extend the features of your custom validators using additional data-attributes on your `<input>` tag. This is a feature supported in .NET.
For an example on the usage of this feature, see `regexvalidator.js`.
