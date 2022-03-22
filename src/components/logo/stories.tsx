import { Meta } from '@storybook/react/types-6-0'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      options: ['black', 'white'],
      control: { type: 'select' }
    }
  }
} as Meta

export const Basic = {
  args: {
    color: 'black'
  }
}
