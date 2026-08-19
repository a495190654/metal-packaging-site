export type AdvantageItem = {
	id: string;
	title: string;
	description: string;
	icon: 'factory' | 'leaf' | 'team' | 'layers' | 'logistics' | 'experience' | 'commitment';
};

/** 公司优势 — 在此增删改 */
export const advantages: AdvantageItem[] = [
	{
		id: 'in-house',
		title: 'In-House Manufacturing',
		description: 'Integrated R&D and complete in-house production.',
		icon: 'factory',
	},
	{
		id: 'eco-friendly',
		title: 'Eco-Friendly',
		description: 'Environmentally sustainable manufacturing processes.',
		icon: 'leaf',
	},
	{
		id: 'expert-team',
		title: 'Expert Team',
		description: 'Experienced technical engineers and strict quality management personnel.',
		icon: 'team',
	},
	{
		id: 'versatile-range',
		title: 'Versatile Range',
		description: 'Specializing in various specifications of Easy-Open Ends (EOE).',
		icon: 'layers',
	},
	{
		id: 'global-logistics',
		title: 'Global Logistics',
		description: 'Seamless sea, land, and air transport network.',
		icon: 'logistics',
	},
	{
		id: 'experience',
		title: '13+ Years Experience',
		description: 'Over 13 years of expertise in easy-open lid manufacturing.',
		icon: 'experience',
	},
	{
		id: 'commitment',
		title: 'Our Commitment',
		description: 'Reliable quality, competitive pricing, fast lead time, and responsive after-sales support.',
		icon: 'commitment',
	},
];
