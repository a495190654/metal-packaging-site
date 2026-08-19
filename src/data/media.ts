const R2_BASE = 'https://img.mingtaieoe.com/mingtai';

/** 首屏 Hero Banner */
export const heroBannerSrc = `${R2_BASE}/Hero/professional-easy-open-ends-custom-metal-packaging-manufacturer.webp`;

/** 工厂企业形象图 */
export const factoryEnterpriseImageSrc = `${R2_BASE}/Factory%20enterprise%20images/factory-enterprise-images.webp`;

/** 资质证书展示图 */
export const ourCertificateImageSrc = `${R2_BASE}/Factory%20enterprise%20images/our-certificate.webp`;

/** 产品轮播图 001–010 */
export const carouselImageSrcs = Array.from({ length: 10 }, (_, index) => {
	const number = String(index + 1).padStart(3, '0');
	return `${R2_BASE}/carousel%20images/aluminum-can-carousel-image-${number}.webp`;
});

/** 分类图 001–006 */
export const categoryImageSrcs = Array.from({ length: 6 }, (_, index) => {
	const number = String(index + 1).padStart(3, '0');
	return `${R2_BASE}/category%20images/aluminum-can-classification-image-${number}.webp`;
});
