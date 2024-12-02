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

const validators = {
    username: {
        validations: [
            {
                flag: {valueMissng: true},
                message: "Error: Required",
                condition: (input) => input.required && input.value.length < 2,
            },
        ],
    },
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
export default {
    title: "Components/Inputs/TextInput",
    component: "in-textinput",
}

