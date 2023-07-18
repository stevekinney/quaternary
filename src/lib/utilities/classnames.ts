import { clsx, type ClassValue } from 'clsx';
import { twMerge as merge } from 'tailwind-merge';

import type { OneOf } from './types.js';

type Props = Record<string, boolean>;

export function cn(...inputs: ClassValue[]): string | undefined | null {
	return merge(clsx(inputs));
}

export const getVariant = <T extends Props | OneOf<Props>>(props: T): keyof T => {
	const keys = Object.keys(props) as (keyof T)[];
	const variant = keys.find((key) => props[key]) as keyof T;
	return variant;
};
