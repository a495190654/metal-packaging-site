export const productCategories = [
	'Easy Open Ends',
	'Easy Peel-Off Lids',
	'Combination Covers',
	'Screw Lids',
	'Bottom Ends',
] as const;

export type ProductCategory = (typeof productCategories)[number];
