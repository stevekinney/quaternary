import { cva, type VariantProps } from 'class-variance-authority';

export { default as Button } from './button.svelte';

export const variants = cva(
	'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
	{
		variants: {
			variant: {
				primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
				secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
				destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
			}
		},
		defaultVariants: {
			variant: 'primary'
		}
	}
);

export type Variants = VariantProps<typeof variants>['variant'];
