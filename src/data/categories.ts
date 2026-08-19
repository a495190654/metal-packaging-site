import { categoryImageSrcs } from './media';

export type ProductCategory = {
	id: string;
	title: string;
	/** 两行核心卖点 */
	highlights: [string, string];
	image: string;
	imageAlt: string;
	href: string;
	/** 是否显示 Hot 标记 */
	featured?: boolean;
};

/** 产品分类数据 — 在此增删改分类 */
export const categories: ProductCategory[] = [
	{
		id: 'aluminum-eoe',
		title: 'Aluminum Easy Open End',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[0],
		imageAlt: 'Gold aluminum easy-open end with ring pull tab',
		href: '/contact',
	},
	{
		id: 'tinplate-eoe',
		title: 'Tinplate Easy Open End',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[1],
		imageAlt: 'Silver tinplate easy-open end with embossed opening instructions',
		href: '/contact',
		featured: true,
	},
	{
		id: 'peel-off-lid',
		title: 'Easy Peel off Lid',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[2],
		imageAlt: 'Aluminum peel-off can ends showing top and bottom views',
		href: '/contact',
	},
	{
		id: 'penny-lever-lid',
		title: 'Penny Lever Lid',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[3],
		imageAlt: 'Aluminum penny lever lid with foil seal and ring pull',
		href: '/contact',
	},
	{
		id: 'bottom-lid',
		title: 'Bottom Lid',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[4],
		imageAlt: 'Industrial bottom lids with ring pull tabs',
		href: '/contact',
	},
	{
		id: 'lug-screw-cap',
		title: 'Lug Cap / Screw Cap',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[5],
		imageAlt: 'Metal lug cap and screw cap for industrial containers',
		href: '/contact',
	},
];
