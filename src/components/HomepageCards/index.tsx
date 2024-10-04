import Figure from '../Figure';
import Blockquote from '../Quote/quote';

const Figure1 = {
	img_url: require('@site/static/img/docusaurus-social-card.jpg').default,
	alt: 'Docusaurus social',
	caption:
		'Docusaurus social. People generally use one of the following approaches for converting their images to WebP: the cwebp command-line',
	source: 'https://docusaurus.io/',
};

export default function HomepageCards() {
	return (
		<>
			<section className='  min-h-[100vh]'>
				<div className='article__header bg-slate-300 px-4 py-8 w-full'>
					<p className='text-xs font-mono bg-slate-100 rounded p-2 dark:bg-dark'>
						UDC: 792.8(510) COBISS.SR-ID 139173897 CIP-7
						<br />
						Received: Jan 15, 2024 <br />
						Reviewed: Jan 25, 2024 <br />
						Accepted: Feb 02, 2024
					</p>
					<div className='title-wrapper'>
						<h1>
							Artistic Dialogue of Traditional Chinese Music and Western
							Approach in Choreography{' '}
						</h1>
					</div>
					<div className='authors flex flex-col max-w-md mx-auto p-4 rounded-md text-dark text-center mt-12 gap-4'>
						<div>
							<h4 className='mb-1'>Shengya Huang</h4>
							<span className='text-xs'>
								Stanisław Moniuszko Academy of Music in Gdańsk, Poland College
								Music and Dance of Nanchang Vocational University, China
							</span>
						</div>
						<div>
							<h4 className='mb-1'>Shengya Huang</h4>
							<span className='text-xs'>
								Stanisław Moniuszko Academy of Music in Gdańsk, Poland College
								Music and Dance of Nanchang Vocational University, China
							</span>
						</div>
					</div>
				</div>
				<div className='citation flex flex-col justify-center items-center border border-solid max-w-lg mx-auto px-4 py-8 rounded'>
					<p className='text-xs text-pretty text-dark dark:text-neutral'>
						<strong>Citation:</strong> Huang, Shengya. 2024. "Artistic Dialogue
						of Traditional Chinese Music and Western Approach in Choreography."
						Accelerando: Belgrade Journal of Music and Dance 9:1
					</p>
					<p className='text-xs text-pretty text-dark dark:text-neutral'>
						<strong>Acknowledgement:</strong> To my professor Ana
						Galikowska-Gajevska, who was my mentor and supervisor during my work
						on MA diploma choreografies at the Eurithmics department at the
						Stanisław Moniuszko Academy of Music in Gdańsk, Poland.
					</p>
				</div>
			</section>
			<section className='content-wrapper'>
				<h2>Introduction</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
					consequuntur dignissimos possimus, placeat cumque expedita iste
					cupiditate provident laudantium a iusto dolor. Placeat quidem
					voluptatibus a soluta ullam saepe similique.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
					impedit ratione earum vel unde libero blanditiis, dolorem rerum
					facilis soluta est? Eum nulla, nihil sunt dolore porro facere est
					maxime?
				</p>
				<h3>Musical Letters by Zhang Qu </h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
					recusandae labore eum eius nam, illum commodi quos nostrum optio
					dolorum incidunt eveniet, sequi soluta officia numquam harum ipsam
					mollitia nihil.
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. In facilis
					vero veritatis. Eligendi qui officiis nisi earum magni vitae iste
					error magnam quae laboriosam! Explicabo accusantium delectus quis
					facere facilis!
				</p>
				<h4>Some Quote</h4>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iste
					sint doloribus voluptates repellat tenetur vitae fugiat illum
					recusandae delectus? Blanditiis perspiciatis at rerum totam qui
					pariatur officiis accusantium repudiandae.
				</p>
				<h2>Quote</h2>
				<Blockquote
					cite='https://web.dev/articles/serve-images-webp'
					reference={'K. Hempenius, 2018'}
				>
					<p>
						People generally use one of the following approaches for converting
						their images to WebP: the cwebp command-line tool or the Imagemin
						WebP plugin (npm package). The Imagemin WebP plugin is generally the
						best choice if your project uses build scripts or build tools (e.g.
						Webpack or Gulp), whereas the CLI is a good choice for simple
						projects or if you'll only need to convert images once.
					</p>
				</Blockquote>
				<Figure figure={Figure1} />
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
					veritatis ipsum, nam, inventore aliquam temporibus esse cupiditate
					quod provident numquam natus, possimus recusandae consectetur omnis
					voluptate modi? Deserunt, itaque dolor.
				</p>

				<h2>Something in the Ether</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
					perferendis, obcaecati pariatur sint expedita excepturi beatae, eaque
					veniam omnis ut tenetur ipsum voluptatibus fuga labore quo iure quia
					qui inventore.
				</p>

				<button className='btn-primary'>Read more</button>
				<button className='btn-secondary'>Read more</button>
				<button>Read more</button>
			</section>
			<section className='content-wrapper'>
				<h3>References</h3>
				<ul>
					{references.map((reference, idx) => (
						<li key={idx}>
							{/* {reference.authors} ({reference.year}). {reference.publication}.{' '}
							{reference.journal ? <i>{reference.source}</i> : reference.source} */}
								{reference.source}
						</li>
					))}
				</ul>
			</section>
		</>
	);
}

const References = ()=> {
	return (
		<ul>
			<li>Adedeji, O. 2015. “Dance Diversity in Nigeria: Exploring Cultural and Religious Dimensions.“ <i>Journal of African Performing Arts 12(3): 45-62.</i></li>
Adekogbe, O.S. and E. O. Alemede E.O. 2020. “Breaking Barriers and Stimulating Dance Accompaniment to Popular music in Nigeria.” Nigerian Journal of Human Movement,  Wellness, Leisure, and Sports (NJHWLS), Volume (2) : n.p.
Anyanwu, E. N. 2011. “The Igbo Masquerade and Christianity: The Challenge and the  Prospect.” European Scientific Journal 8(1): 112-130.
Clark, Ebun. 1980. Hubert Ogunde: The Making of Nigerian Theatre. London: Oxford University Press.
Clark, John. 1981.  “Aspects of Nigerian drama.” In Drama and Theatre in Nigeria: A Critical Source  Book. Edited by  Y. Ogunbiyi, 57-74.  Lagos: Pitman Press.
Jones, P. 2017. Dance Through the Ages: A Historical Perspective. Publisher.
Krama, Ilami. 2006. African Traditional Theatre and Drama: Themes and      Perspectives. Port Harcourt: Akpokem International.
Layiwola, Dele. 2000. “Yoruba tragic drama: a note on the origins of Nigerian theatre.” In Rethinking African Arts and Culture. Edited by  D. Layiwola, 129 - 136. Cape Town: The Centre for Advance Studies in African Society.
Mbiti, John S. 1999. African Religion and Philosophy. Second edition. Johannesburg, South Africa: Heinemann Publishers.
Monyeh, P.M. 2007. “Dance and National Development.” In  Perspectives in Nigeria Dance Studies. Edited by Chris Ugolo.  106 - 115.  Ibadan: Caltop publications.
Okafor, O. C. 2005. “Music and Dance as a Means of Social Transformation among the Igbos of Nigeria.” Echeta Anthropological Journal 4(2): 73-82.
Ogunbiyi, Yemi. 1981. “Nigerian theatre and drama: a critical profile.” In Drama and Theatre in Nigeria: A Critical Source Book. Edited by  Y. Ogunbiyi, 3 - 53.  Lagos: Pitman Press.
Rudolph Kansese. 2013. “The Nature of Nigerian Dance: A Dialectical Overview.” The Crab: Journal of Theatre and Media Arts  8 (June): 67-77.
Smith, R. 2018. The Language of Dance: A Cross-Cultural Perspective. Cambridge University Press.
</ul>
	)
}

const references = [
	{
		authros:'',
		year:'',
		publication:'',
		journal:true,
		source:''
	},

]