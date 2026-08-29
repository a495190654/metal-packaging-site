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
		id: 'pull-cap',
		title: 'Pull Cap',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[0],
		imageAlt: 'Metal pull cap for industrial packaging',
		href: '/products?category=Pull%20Cap',
	},
	{
		id: 'tinplate-etp-tfs-eoe',
		title: 'Tinplate ETP/TFS Easy Open End',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[1],
		imageAlt: 'Silver tinplate easy-open end with embossed opening instructions',
		href: '/products?category=Tinplate%20ETP%2FTFS%20Easy%20Open%20End',
		featured: true,
	},
	{
		id: 'aluminum-eoe',
		title: 'Aluminum Easy Open End',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[2],
		imageAlt: 'Gold aluminum easy-open end with ring pull tab',
		href: '/products?category=Aluminum%20Easy%20Open%20End',
	},
	{
		id: 'easy-peel-off-lid',
		title: 'Easy Peel Off Lid',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[3],
		imageAlt: 'Aluminum peel-off can ends showing top and bottom views',
		href: '/products?category=Easy%20Peel%20Off%20Lid',
	},
	{
		id: 'lug-screw-cap',
		title: 'Lug Cap/Screw Cap',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[4],
		imageAlt: 'Metal lug cap and screw cap for industrial containers',
		href: '/products?category=Lug%20Cap%2FScrew%20Cap',
	},
	{
		id: 'tinplate-bottom',
		title: 'Tinplate Bottom',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[5],
		imageAlt: 'Industrial tinplate bottom ends with ring pull tabs',
		href: '/products?category=Tinplate%20Bottom',
	},
	{
		id: 'penny-lever-lid',
		title: 'Penny Lever Lid',
		highlights: ['Reputation First', 'High-Quality'],
		image: categoryImageSrcs[0],
		imageAlt: 'Aluminum penny lever lid with foil seal and ring pull',
		href: '/products?category=Penny%20Lever%20Lid',
	},
];
