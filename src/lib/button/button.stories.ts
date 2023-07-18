import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './button.svelte';

const meta = {
	title: 'Example/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		docs: {
			controls: { exclude: ['type', 'class'] }
		}
	},
	argTypes: {
		variant: {
			control: 'radio',
			options: ['primary', 'secondary', 'destructive'],
			defaultValue: 'primary'
		},
		href: {
			control: 'text'
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
	args: {
		variant: 'primary',
		label: 'Button'
	}
};

export const Secondary: Story = {
	args: {
		variant: 'secondary',
		label: 'Button'
	}
};

export const Destructive: Story = {
	args: {
		variant: 'destructive',
		label: 'Button'
	}
};

export const PrimaryLink: Story = {
	name: 'Link (Primary)',
	args: {
		href: '#',
		variant: 'primary',
		label: 'Button'
	}
};

export const SecondaryLink: Story = {
	name: 'Link (Secondary)',
	args: {
		href: '#',
		variant: 'secondary',
		label: 'Button'
	}
};

export const DestructiveLink: Story = {
	name: 'Link (Destructive)',
	args: {
		href: '#',
		variant: 'destructive',
		label: 'Button'
	}
};
