import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Wrapper from '../components/Layout/Layout';
import Link from '@docusaurus/Link';

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<header className='header-lg'>
			<picture>
				<source
					srcSet={`${require('@site/static/img/LOGO_120-comp.png')}, ${require('@site/static/img/LOGO_240-comp.png')} 320w`}
				/>
				<img
					src={require('@site/static/img/LOGO_240-comp.png').default}
					alt='Accelerando: Belgrade Journal of Music and Dance, logo'
					title='Accelerando: Belgrade Journal of Music and Dance'
					width='auto'
				/>
			</picture>

			<div className='flex flex-col text-2xl justify-center'>
				<Heading
					as='h1'
					className='m-0 py-2 sm:text-3xl lg:text-5xl text-center md:text-left '
				>
					{siteConfig.title}
				</Heading>
				<p className='text-center text-sm md:text-left sm:text-md lg:text-2xl mb-6 font-montserrat'>
					{siteConfig.tagline}
				</p>
				<div className='flex gap-2 justify-center items-center md:justify-start'>
					<Link to='/about' className='btn btn-primary'>
						Read more
					</Link>
					<Link to='/archive' className='btn btn-secondary'>
						Last Issue
					</Link>
				</div>
			</div>
		</header>
	);
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext();

	return (
		<Wrapper title={siteConfig.title} description='This is the homepage'>
			<HomepageHeader />
			<main className='pb-12'>
				<HomepageFeatures />
			</main>
		</Wrapper>
	);
}
