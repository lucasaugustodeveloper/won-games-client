import { Meta } from '@storybook/react/types-6-0'

import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      options: ['black', 'white'],
      control: { type: 'select' }
    },
    size: {
      options: ['normal', 'large'],
      control: { type: 'select' }
    },
    hideOnMobile: {
      options: [true, false],
      control: { type: 'boolean' }
    }
  }
} as Meta

export const Basic = {
  args: {
    color: 'black',
    size: 'normal',
    hideOnMobile: false
  }
}
