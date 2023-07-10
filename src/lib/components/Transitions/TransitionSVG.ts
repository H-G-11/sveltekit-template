import { cubicOut } from 'svelte/easing';

type ParamsProps = {
  delay: number,
  duration: number,
  easing: (t: number) => number

}
export function expand(node: Element, params: ParamsProps) {
	const {
		delay = 0,
		duration = 400,
		easing = cubicOut
	} = params;

	const w = parseFloat(getComputedStyle(node).strokeWidth);

	return {
		delay,
		duration,
		easing,
		css: (t: any) => `opacity: ${t}; stroke-width: ${t * w}`
	};
}