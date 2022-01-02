import { Meta, Story } from '@storybook/react/types-6-0'

import Main from '.'

export const Basic: Story = (args) => <Main {...args} />

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Avançado',
    description: 'TypeScript, ReactJS, NextJS e Styled Component'
  }
} as Meta
