type FeatureItem = {
	title: string;
	Svg: React.ComponentType<React.ComponentProps<'svg'>>;
	last?: boolean	
};

const FeatureList: FeatureItem[] = [
	{
		title: 'Open Access',
		Svg: require('@site/static/img/open-access.svg').default,
	},
	{
		title: 'No publishing fees',
		Svg: require('@site/static/img/no-fees.svg').default,
	},
	{
		title: 'Academic scholarly e-journal',
		Svg: require('@site/static/img/academic.svg').default,
		last: true
	},
];

function Feature({ title, Svg, last }: FeatureItem) {
	return (
		<div className={`flex flex-col items-center justify-center border border-solid border-light-blue p-4 rounded text-center shadow-sm ${last ? 'sm:col-span-2 md:col-span-1' : ''}`}>
			<Svg className='size-8 align-self-center' role='img' />
			<span className='text-pretty'>{title}</span>
		</div>
	);
}

export default function HomepageFeatures(): JSX.Element {
	return (
		<section className='w-full py-12 px-8'>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center w-full gap-2 sm:gap-4 md:max-w-screen-md mx-auto'>
				{FeatureList.map((props, idx) => (
					<Feature key={idx} {...props} />
				))}
			</div>
		</section>
	);
}
