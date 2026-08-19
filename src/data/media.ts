const R2_BASE = 'https://img.mingtaieoe.com/mingtai';

/** R2 folder names — case-sensitive, must match bucket exactly */
export const R2_FOLDERS = {
	hero: 'Hero',
	factory: 'Factory enterprise images',
	carousel: 'carousel images',
	category: 'category images',
} as const;

/** Build a case-correct R2 URL with spaces encoded for reliable mobile requests */
export function r2Url(...segments: string[]): string {
	const path = segments.filter(Boolean).join('/');
	return encodeURI(`${R2_BASE}/${path}`);
}

/** Normalize an existing R2 URL (handles both encoded and unencoded paths) */
export function normalizeR2ImageUrl(url: string): string {
	if (!url.startsWith(R2_BASE)) return url;
	try {
		return encodeURI(decodeURI(url));
	} catch {
		return encodeURI(url);
	}
}

/** 首屏 Hero Banner */
export const heroBannerSrc = r2Url(
	R2_FOLDERS.hero,
	'professional-easy-open-ends-custom-metal-packaging-manufacturer.webp',
);

/** 工厂企业形象图 */
export const factoryEnterpriseImageSrc = r2Url(R2_FOLDERS.factory, 'factory-enterprise-images.webp');

/** 资质证书展示图 */
export const ourCertificateImageSrc = r2Url(R2_FOLDERS.factory, 'our-certificate.webp');

/** 产品轮播图 001–010 */
export const carouselImageSrcs = Array.from({ length: 10 }, (_, index) => {
	const number = String(index + 1).padStart(3, '0');
	return r2Url(R2_FOLDERS.carousel, `aluminum-can-carousel-image-${number}.webp`);
});

/** 分类图 001–006 */
export const categoryImageSrcs = Array.from({ length: 6 }, (_, index) => {
	const number = String(index + 1).padStart(3, '0');
	return r2Url(R2_FOLDERS.category, `aluminum-can-classification-image-${number}.webp`);
});
