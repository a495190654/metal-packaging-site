import type { ImageMetadata } from 'astro';
import carousel01 from '../assets/carousel/carousel-01.webp';
import carousel02 from '../assets/carousel/carousel-02.webp';
import carousel03 from '../assets/carousel/carousel-03.webp';
import carousel04 from '../assets/carousel/carousel-04.webp';
import carousel05 from '../assets/carousel/carousel-05.webp';
import carousel06 from '../assets/carousel/carousel-06.webp';
import carousel07 from '../assets/carousel/carousel-07.webp';
import carousel08 from '../assets/carousel/carousel-08.webp';
import carousel09 from '../assets/carousel/carousel-09.webp';
import carousel10 from '../assets/carousel/carousel-10.webp';

export type Product = {
	id: string;
	/** Astro 资产：Hero 等使用 <Image /> 优化 */
	image: ImageMetadata;
	/** 静态 public 路径：轮播 marquee 直接引用，避免移动端 srcset 问题 */
	src: string;
	alt: string;
	name: string;
};

/** 全站唯一产品图源数据 */
export const products: Product[] = [
	{
		id: 'aluminum-eoe',
		image: carousel01,
		src: '/carousel/carousel-01.webp',
		alt: 'Aluminum easy-open end',
		name: 'Aluminum EOE',
	},
	{
		id: 'dual-end',
		image: carousel02,
		src: '/carousel/carousel-02.webp',
		alt: 'Dual-end metal inspection',
		name: 'Dual-End',
	},
	{
		id: 'ring-pull',
		image: carousel03,
		src: '/carousel/carousel-03.webp',
		alt: 'Ring pull easy-open end',
		name: 'Ring Pull',
	},
	{
		id: 'tinplate-eoe',
		image: carousel04,
		src: '/carousel/carousel-04.webp',
		alt: 'Tinplate easy-open end',
		name: 'Tinplate EOE',
	},
	{
		id: 'stamping',
		image: carousel05,
		src: '/carousel/carousel-05.webp',
		alt: 'Precision stamped can end',
		name: 'Stamping',
	},
	{
		id: 'industrial-closure',
		image: carousel06,
		src: '/carousel/carousel-06.webp',
		alt: 'Industrial metal closure',
		name: 'Industrial Closure',
	},
	{
		id: 'tooling-qc',
		image: carousel07,
		src: '/carousel/carousel-07.webp',
		alt: 'Tooling quality inspection',
		name: 'Tooling QC',
	},
	{
		id: 'rd-lab',
		image: carousel08,
		src: '/carousel/carousel-08.webp',
		alt: 'R&D laboratory sample',
		name: 'R&D Lab',
	},
	{
		id: 'peel-off',
		image: carousel09,
		src: '/carousel/carousel-09.webp',
		alt: 'Peel-off seal lid',
		name: 'Peel-off Seal',
	},
	{
		id: 'pharma-closure',
		image: carousel10,
		src: '/carousel/carousel-10.webp',
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
