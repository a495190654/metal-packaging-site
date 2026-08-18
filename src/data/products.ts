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
	image: ImageMetadata;
	alt: string;
	name: string;
};

/** 全站唯一产品图源数据（Astro 资产，构建时自动优化） */
export const products: Product[] = [
	{
		id: 'aluminum-eoe',
		image: carousel01,
		alt: 'Aluminum easy-open end',
		name: 'Aluminum EOE',
	},
	{
		id: 'dual-end',
		image: carousel02,
		alt: 'Dual-end metal inspection',
		name: 'Dual-End',
	},
	{
		id: 'ring-pull',
		image: carousel03,
		alt: 'Ring pull easy-open end',
		name: 'Ring Pull',
	},
	{
		id: 'tinplate-eoe',
		image: carousel04,
		alt: 'Tinplate easy-open end',
		name: 'Tinplate EOE',
	},
	{
		id: 'stamping',
		image: carousel05,
		alt: 'Precision stamped can end',
		name: 'Stamping',
	},
	{
		id: 'industrial-closure',
		image: carousel06,
		alt: 'Industrial metal closure',
		name: 'Industrial Closure',
	},
	{
		id: 'tooling-qc',
		image: carousel07,
		alt: 'Tooling quality inspection',
		name: 'Tooling QC',
	},
	{
		id: 'rd-lab',
		image: carousel08,
		alt: 'R&D laboratory sample',
		name: 'R&D Lab',
	},
	{
		id: 'peel-off',
		image: carousel09,
		alt: 'Peel-off seal lid',
		name: 'Peel-off Seal',
	},
	{
		id: 'pharma-closure',
		image: carousel10,
		alt: 'Pharmaceutical pull-ring caps',
		name: 'Pharma Closure',
	},
];

export const featuredProducts = [
	products.find((product) => product.id === 'tinplate-eoe')!,
	products.find((product) => product.id === 'ring-pull')!,
	products.find((product) => product.id === 'peel-off')!,
];
