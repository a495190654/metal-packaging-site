import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { productCategories } from './lib/productCategories';

const products = defineCollection({
	loader: glob({ base: './src/content/products', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		category: z.enum(productCategories),
		mainImage: z.string(),
		galleryImages: z.array(z.string()).default([]),
		specifications: z.object({
			diameter: z.string(),
			material: z.string(),
			internalCoating: z.string(),
			externalCoating: z.string(),
			application: z.string(),
		}),
		features: z.array(z.string()).default([]),
		isFeatured: z.boolean().default(false),
	}),
});

export const collections = { products };
