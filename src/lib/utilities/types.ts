import type { SvelteHTMLElements } from 'svelte/elements';

export type HTMLElement<
	E extends keyof SvelteHTMLElements,
	A extends keyof SvelteHTMLElements[E] | undefined = undefined
> = A extends keyof SvelteHTMLElements[E] ? SvelteHTMLElements[E][A] : SvelteHTMLElements[E];

export type BaseProps<E extends keyof SvelteHTMLElements, Props = object> = SvelteHTMLElements[E] &
	Omit<
		{
			'data-testid'?: string;
		},
		keyof Props
	> &
	Props;

export type Optional<T> = {
	[K in keyof T]?: T[K];
};

export type Only<Keys, Target extends keyof Keys> = {
	[K in keyof Keys]: K extends Target ? Keys[K] : never;
};

export type OneOf<Keys> = Optional<
	{
		[K in keyof Keys]: {
			[P in keyof Keys]: P extends K ? Keys[P] : never;
		};
	}[keyof Keys]
>;
