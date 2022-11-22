import { Meta, Story } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

export const Basic: Story = (args) => <Button {...args} />

export const withIcon: Story = (args) => <Button {...args} />

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    },
    fullWidth: { type: 'boolean' },
    icon: {
      control: { type: '' }
    }
  }
} as unknown as Meta

Basic.args = {
  children: 'Buy now'
}

withIcon.args = {
  children: 'Buy now',
  icon: <AddShoppingCart />,
  size: 'small',
  fullWidth: false
}
