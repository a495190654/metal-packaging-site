export type Product = {
	id: string;
	src: string;
	alt: string;
	name: string;
};

/** 全站唯一产品图源数据 */
export const products: Product[] = [
	{
		id: 'aluminum-eoe',
		src: '/carousel/carousel-01.webp',
		alt: 'Aluminum easy-open end',
		name: 'Aluminum EOE',
	},
	{
		id: 'dual-end',
		src: '/carousel/carousel-02.webp',
		alt: 'Dual-end metal inspection',
		name: 'Dual-End',
	},
	{
		id: 'ring-pull',
		src: '/carousel/carousel-03.webp',
		alt: 'Ring pull easy-open end',
		name: 'Ring Pull',
	},
	{
		id: 'tinplate-eoe',
		src: '/carousel/carousel-04.webp',
		alt: 'Tinplate easy-open end',
		name: 'Tinplate EOE',
	},
	{
		id: 'stamping',
		src: '/carousel/carousel-05.webp',
		alt: 'Precision stamped can end',
		name: 'Stamping',
	},
	{
		id: 'industrial-closure',
		src: '/carousel/carousel-06.webp',
		alt: 'Industrial metal closure',
		name: 'Industrial Closure',
	},
	{
		id: 'tooling-qc',
		src: '/carousel/carousel-07.webp',
		alt: 'Tooling quality inspection',
		name: 'Tooling QC',
	},
	{
		id: 'rd-lab',
		src: '/carousel/carousel-08.webp',
		alt: 'R&D laboratory sample',
		name: 'R&D Lab',
	},
	{
		id: 'peel-off',
		src: '/carousel/carousel-09.webp',
		alt: 'Peel-off seal lid',
		name: 'Peel-off Seal',
	},
	{
		id: 'pharma-closure',
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
