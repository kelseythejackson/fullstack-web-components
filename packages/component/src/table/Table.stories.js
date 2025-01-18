import { html } from 'lit-html';
import { TableCardComponent } from './TableCard';

export default {
  title: 'Components/Table',
  component: 'in-tablecard',
};

const Template = () => {
  return html`<in-tablecard></in-tablecard>`;
};

export const Primary = Template.bind({});
Primary.args = {};
