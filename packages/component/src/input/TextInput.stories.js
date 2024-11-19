import {TextInputComponent} from './TextInput';
import {html} from 'lit-html';

const  PrimaryTemplate = ({}) => html`
<form>
    <in-textinput></in-textinput>
</form>
`;

export const Primary = PrimaryTemplate.bind({});
export default {
    title: "Components/Inputs/TextInput",
    component: "in-textinput",
}