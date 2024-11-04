import Wrapper from '../components/Layout/Layout';
import Link from '@docusaurus/Link';

export default function About(): JSX.Element {
	return (
		<Wrapper title='About' description='About Page'>
			<div className='about_navigation'>
				<nav>
					<ul>
						<li>
							<a href='#1'>About /</a>
						</li>
						<li>
							<a href='#2'>Main Goals /</a>
						</li>
						<li>
							<a href='#3'>Thematic Areas /</a>
						</li>
						<li>
							<a href='#4'>Publishing /</a>
						</li>
						<li>
							<a href='#5'>Indexing and archiving /</a>
						</li>
						<li>
							<a href='#6'>Copyright</a>
						</li>
					</ul>
				</nav>
			</div>
			<AboutHeader />
			<div className='about_main'>
				<div id='1'></div>
				<Section >
					<img
						src={require('@site/static/img/LOGO_240.png').default}
						alt='logo'
						className='max-w-[120px] md:max-w-[200px] lg:w-full'
					/>
					<p>
						Accelerando: Belgrade Journal of Music and Dance (Accelerando: BJMD)
						ISSN: 2466-3913 (Online) is{' '}
						<em>
							an annual electronic, open access, double-blind-peer-reviewed,
							international scholarly journal
						</em>
						, with the aim to provide information for students, researchers,
						professionals in various fields of dance, music, and performing
						arts. Publisher is Belgrade Center for Music and Dance from
						Belgrade, Serbia.{' '}
					</p>
				</Section>
				<div id='2'></div>
				<Section>
					<h2>MAIN GOALS</h2>
					<ul>
						<li>
							Our Journal is conceived for publishing high-quality, original
							academic articles and research reports.
						</li>
						<li>Developing academic collaboration between scholars</li>
						<li>Introducing traditional qualities of any nation</li>
						<li>
							Introducing modern and contemporary tendencies in Music and Dance
						</li>
						<li>
							Introducing qualitative approaches in Music and/or Dance education
						</li>
					</ul>
				</Section>
				<div id='3'></div>
				<Section>
					<h2>THEMATIC AREAS</h2>
					<ul>
						<li>Education in Music and Dance</li>
						<li>Music and Dance tradition and cultural heritage</li>
						<li>Modern and Contemporary tendencies in Music and Dance</li>
					</ul>
				</Section>
				<div id='4'></div>
				<Section>
					<h2>PUBLISHING</h2>
					<ul>
						<li>Publications are published in electronic format</li>
						<li>Accelerando: BJMD is published in February.</li>
						<li>Submission deadline is the end of November</li>
						<li>
							The deadline could be prolonged upon the request of the author
						</li>
						<li>There is no processing and no publishing fees</li>
						<li>The journal is Open Access and under CC-BY-NC-ND license</li>
					</ul>
				</Section>
				<div id='5'></div>
				<Section>
					<h2>Indexing and Archiving</h2>
					<div>
						<p>
							Accelerando: BJMD is indexed in: DOAJ, RILM (Core Journal),
							WorldCat, ULRICH, National Library of Serbia, Erih PLUS, and
							other. Also, our journal has its{' '}
							<Link to='/archive'>own archive</Link>.
						</p>
						<div className='about_imageContainer'>
							<a href='https://doaj.org/toc/2466-3913'>
								<img
									src={require('@site/static/img/doaj.png').default}
									alt='doaj'
								/>
							</a>
							<a href='https://kanalregister.hkdir.no/publiseringskanaler/erihplus/periodical/info.action?id=490036'>
								<img
									src={require('@site/static/img/erihplus.png').default}
									alt='erihplus'
								/>
							</a>
							<a href='https://www.rilm.org/abstracts/scope/abstracts-journals'>
								<img
									src={require('@site/static/img/rilm.jpg').default}
									alt='rilm'
								/>
							</a>
							<a href='https://kobson.nb.rs/nauka_u_srbiji/elektronski_casopisi_iz_srbije.95.html'>
								<img
									src={require('@site/static/img/kobson.jpg').default}
									alt='kobson'
								/>
							</a>
						</div>
					</div>
				</Section>
				<div id='6'></div>
				<Section>
					<h2>Copyright</h2>
					<p>Authors keep the copyright of their articles.</p>
				</Section>
				<Section>
					<div></div>
					<p className='max-w-sm text-right'>
						{' '}
						With best Regards, <br /> Editors <br />{' '}
						accelerandojournal@gmail.com
					</p>
				</Section>
			</div>
		</Wrapper>
	);
}

function AboutHeader() {
	return (
		<div className='about_header'>
			<h1>About Journal</h1>
		</div>
	);
}

function Section({ children }: { children: React.ReactNode }) {
	return <section className='about_section'>{children}</section>;
}
