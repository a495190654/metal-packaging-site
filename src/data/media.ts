const R2_BASE = 'https://img.mingtaieoe.com/mingtai';

/** Bump when R2 assets change to bust browser/CDN cache */
export const ASSET_VERSION = '2';

/** R2 folder names — case-sensitive, must match bucket exactly */
export const R2_FOLDERS = {
	hero: 'hero',
	factoryImages: 'factory-images',
	carousel: 'carousel-images',
	category: 'category-images',
} as const;

/** Force https for external asset URLs */
export function ensureHttps(url: string): string {
	return url.replace(/^http:\/\//i, 'https://');
}

/** Append cache-busting version query string */
export function withAssetVersion(url: string): string {
	const base = ensureHttps(url.split('?')[0] ?? url);
	return `${base}?v=${ASSET_VERSION}`;
}

/** Build a case-correct R2 URL with spaces encoded and cache busting */
export function r2Url(...segments: string[]): string {
	const path = segments.filter(Boolean).join('/');
	return withAssetVersion(encodeURI(`${R2_BASE}/${path}`));
}

/** Normalize an existing R2 URL (handles both encoded and unencoded paths) */
export function normalizeR2ImageUrl(url: string): string {
	const secureUrl = ensureHttps(url);

	if (!secureUrl.startsWith(R2_BASE)) {
		return secureUrl;
	}

	try {
		return withAssetVersion(encodeURI(decodeURI(secureUrl.split('?')[0] ?? secureUrl)));
	} catch {
		return withAssetVersion(encodeURI(secureUrl.split('?')[0] ?? secureUrl));
	}
}

/** Site logo / favicon */
export const logoSrc = r2Url(R2_FOLDERS.factoryImages, 'logo.webp');
export const faviconSrc = logoSrc;

/** 首屏 Hero Banner */
export const heroBannerSrc = r2Url(R2_FOLDERS.hero, 'packaging-manufacturer.webp');

/** 工厂企业形象图 */
export const factoryEnterpriseImageSrc = r2Url(R2_FOLDERS.factoryImages, 'factory-enterprise-images.webp');

/** 资质证书展示图 */
export const ourCertificateImageSrc = r2Url(R2_FOLDERS.factoryImages, 'our-certificate.webp');

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
