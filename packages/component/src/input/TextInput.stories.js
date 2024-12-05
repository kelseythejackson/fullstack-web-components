import {TextInputComponent} from './TextInput';
import {html} from 'lit-html';

const  PrimaryTemplate = ({onValidate, validators}) => {
    setTimeout(() => {
        const input = document.querySelector(`[name="username"]`);
        input.$validator = validators["username"]
    }, 0);
    return html`
        <form @validate="${onValidate}">
            <in-textinput required name="username"></in-textinput>
        </form>`
};

const DisabledTemplate = ({}) =>
    html`<in-textinput
        value="disabled input"
        disabled
        name="test-input"></in-textinput>
    `
const ErrorTemplate = ({}) => {
    setTimeout(() => {
        const input = document.querySelector(`[name="username"]`);
        input.$validator = validators["username"];
        input.focus();
        input.blur();
    }, 0);
    return html `<in-textinput type="text" id="username" name="username" required class="form-control"></in-textinput>`
}

const FormTemplate = ({ headline, onSubmit, onValidate, onFormData}) => {
    return html`
        <h4 slot="header">${headline}</h4>
        <form
            name="foo"
            slot="content"
            @formdata="${onFormData}"
            @validate="${onValidate}"
            @submit="${onSubmit}"
        >
            <fieldset>
                <legend>Login Form</legend>
                <label for="username">Username</label>
                <in-textinput
                    type="text"
                    id="username"
                    name="name"
                    required
                    minlength="8"
                    class="form-control"
                ></in-textinput>
            </fieldset>
        </form>
    `
}
const validators = {
    username: {
        validations: [
            {
                flag: {valueMissing: true},
                message: "Error: Required, please enter a username",
                condition: (input) => input.required && input.value.length <= 0,
            },
            {
                flag: { tooShort: true},
                message: "Error: Minimum length not met, please supply a value with at least 8 characters.",
                condition: (input) => input.minLength && input.value.length < input.minLength
            }
        ],
    },
    password: {
        validations: [
            {
              flag: { valueMissing: true },
              message: 'Error: Required, please enter a username.',
              condition: (input) => input.required && input.value.length <= 0,
            },
            {
              flag: { tooShort: true },
              message:
                'Error: Minimum length not met, please supply a value with at least 8 characters.',
              condition: (input) =>
                input.minLength && input.value.length < input.minLength,
            },
            {
              flag: { patternMismatch: true },
              message:
                'Please use at least one uppercase, uppercase letter, special character, and number.',
              condition: (input) =>
                input.pattern &&
                input.value.match(new RegExp(input.pattern)) === null,
            },
          ],
    }

};

export const Primary = PrimaryTemplate.bind({});
Primary.args = {
    validators,
    onValidate: (ev) =>{
        console.log(document.querySelector(`[name="username"]`));
        if(!document.querySelector(`[name="username"]`).validity.valid) {
            console.warn("INVALID")
        } else {
            console.log("VALID")
        }
    }
}

export const Disabled = DisabledTemplate.bind({})
DisabledTemplate.args = {};

export const Error = ErrorTemplate.bind({})
ErrorTemplate.args = {}



export default {
    title: "Components/Inputs/TextInput",
    component: "in-textinput",
}

