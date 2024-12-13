import { ButtonComponent } from './Button';
import { html } from 'lit-html';

let icon = null;

if (window.FontAwesome) {
  icon = window.FontAwesome.icon({ prefix: 'fas', iconName: 'plus' });
}

const svg = icon.node[0];
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

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon icon-close',
  label: svg,
};

const DisabledTemplate = ({ label, variant }) => html`
  <button class="${variant}" is="in-button" disabled>${label}</button>
`;

export const Disabled = DisabledTemplate.bind({});
Disabled.args = {
  variant: 'primary',
  label: 'Submit',
};
