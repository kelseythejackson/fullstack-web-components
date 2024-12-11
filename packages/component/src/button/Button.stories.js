import { ButtonComponent } from './Button';
import { html } from 'lit-html';

export default {
  title: 'Components/Inputs/Button',
  component: 'in-button',
};

const Template = ({ label, variant }) => html`
  <button class="${variant}" is="in-button">${label}</button>
`;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button',
};
