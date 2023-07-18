<script lang="ts" context="module">
	import { cva, type VariantProps } from 'class-variance-authority';
	import { cn } from '$utilities/classnames.js';
	import type { HTMLElement } from '$utilities/types.js';

	const button = cva(
		'relative flex w-fit items-center justify-center gap-2 rounded font-secondary text-sm border-2 py-2 px-4 transition-colors disabled:cursor-not-allowed',
		{
			variants: {
				variant: {
					primary:
						'border-gray-900 bg-gray-900 bg-gradient-to-br text-white hover:from-blue-100 hover:to-purple-100 hover:text-gray-900',
					secondary:
						'border-gray-800 bg-white text-gray-800 hover:border-gray-900 hover:bg-gray-900 hover:text-white',
					destructive: 'border-red-700 bg-red-700 text-white hover:border-red-900 hover:bg-red-900'
				}
			},
			defaultVariants: {
				variant: 'primary'
			}
		}
	);

	type Props = VariantProps<typeof button> & {
		label: string;
	};

	type AnchorElement = Props &
		HTMLElement<'a'> & {
			href?: HTMLElement<'a', 'href'>;
			type?: never;
		};

	type ButtonElement = Props &
		HTMLElement<'button'> & {
			type?: HTMLElement<'button', 'type'>;
			href?: never;
		};
</script>

<script lang="ts">
	type $$Props = AnchorElement | ButtonElement;

	export let label: $$Props['label'] = 'Button';
	export let href: $$Props['href'] = undefined;
	export let type: $$Props['type'] = undefined;
	export let variant: $$Props['variant'] = 'primary';
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={href ? undefined : type}
	{href}
	class={cn(button({ variant, class: $$props.class }))}
	role={href ? 'link' : 'button'}
	{...$$restProps}
	on:click
>
	{label}
</svelte:element>
