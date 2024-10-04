type ImageProps = {
	src: string;
	alt: string;
	className?: string;
	width: number;
	height: number;
};

export default function ImageLayout({ src, alt, width, height }: ImageProps) {
	return (
		<h1>Image</h1>
		// <Image src={require(`@site/static/img/${src}`).default} alt={alt} width={width} height={height} />
	);
}
