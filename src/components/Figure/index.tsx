type FigureProps = {
	figure: {
		img_url: string;
		alt: string;
		caption: string;
		source: string;
	};
};

export default function Figure({ figure }: FigureProps) {
	return (
		<figure>
			<img src={figure.img_url} alt={figure.alt} className='w-full rounded' />
			<figcaption>
				<p>
					{figure.caption}
					<br /> Source: [<a href={figure.source}>Link</a>]
				</p>
			</figcaption>
		</figure>
	);
}
