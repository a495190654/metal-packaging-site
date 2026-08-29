export const productCategories = [
	'Pull Cap',
	'Tinplate ETP/TFS Easy Open End',
	'Aluminum Easy Open End',
	'Easy Peel Off Lid',
	'Lug Cap/Screw Cap',
	'Tinplate Bottom',
	'Penny Lever Lid',
	'Ungrouped',
] as const;

export type ProductCategory = (typeof productCategories)[number];
