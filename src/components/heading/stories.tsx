import { Meta, Story } from '@storybook/react/types-6-0'

import Heading, { HeadingProps } from '.'

export const Basic: Story<HeadingProps> = (args) => <Heading {...args} />

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    },
    lineLeft: {
      type: 'boolean'
    },
    lineBottom: {
      type: 'boolean'
    },
    color: {
      control: { type: 'select' },
      options: ['white', 'black']
    }
  }
} as Meta

Basic.args = {
  children: 'Most Popular',
  color: 'white',
  lineLeft: false,
  lineBottom: false
}
