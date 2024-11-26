import {TextInputComponent} from './TextInput';
import {html} from 'lit-html';

const  PrimaryTemplate = ({}) => {
    setTimeout(() => {
        const input = document.querySelector(`[name="username"]`);
        input.$validator = validators["username"]
    }, 0);
    return html`
        <form>
            <in-textinput name="username"></in-textinput>
        </form>`
};

const validators = {
    username: {
        validations: [
            {
                flag: {valueMissng: true},
                message: "Error: Required",
                condition: (input) => input.required && input.value <= 0,
            },
        ],
    },
};

export const Primary = PrimaryTemplate.bind({});
export default {
    title: "Components/Inputs/TextInput",
    component: "in-textinput",
}

