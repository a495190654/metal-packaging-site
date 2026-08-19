import { carouselImageSrcs } from './media';

export type Product = {
	id: string;
	src: string;
	alt: string;
	name: string;
};

/** 全站唯一产品图源数据（R2 CDN） */
export const products: Product[] = [
	{
		id: 'aluminum-eoe',
		src: carouselImageSrcs[0],
		alt: 'Aluminum easy-open end',
		name: 'Aluminum EOE',
	},
	{
		id: 'dual-end',
		src: carouselImageSrcs[1],
		alt: 'Dual-end metal inspection',
		name: 'Dual-End',
	},
	{
		id: 'ring-pull',
		src: carouselImageSrcs[2],
		alt: 'Ring pull easy-open end',
		name: 'Ring Pull',
	},
	{
		id: 'tinplate-eoe',
		src: carouselImageSrcs[3],
		alt: 'Tinplate easy-open end',
		name: 'Tinplate EOE',
	},
	{
		id: 'stamping',
		src: carouselImageSrcs[4],
		alt: 'Precision stamped can end',
		name: 'Stamping',
	},
	{
		id: 'industrial-closure',
		src: carouselImageSrcs[5],
		alt: 'Industrial metal closure',
		name: 'Industrial Closure',
	},
	{
		id: 'tooling-qc',
		src: carouselImageSrcs[6],
		alt: 'Tooling quality inspection',
		name: 'Tooling QC',
	},
	{
		id: 'rd-lab',
		src: carouselImageSrcs[7],
		alt: 'R&D laboratory sample',
		name: 'R&D Lab',
	},
	{
		id: 'peel-off',
		src: carouselImageSrcs[8],
		alt: 'Peel-off seal lid',
		name: 'Peel-off Seal',
	},
	{
		id: 'pharma-closure',
		src: carouselImageSrcs[9],
		alt: 'Pharmaceutical pull-ring caps',
		name: 'Pharma Closure',
	},
];

export const featuredProducts = [
	products.find((product) => product.id === 'tinplate-eoe')!,
	products.find((product) => product.id === 'ring-pull')!,
	products.find((product) => product.id === 'peel-off')!,
];

/** 轮播手机端核心产品（前 5 张，减少移动端请求量） */
export const marqueeMobileProducts = products.slice(0, 5);
