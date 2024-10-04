import Layout from '@theme/Layout';
import styles from './about.module.css';
import clsx from 'clsx';
import Wrapper from '../components/Layout/Layout';

export default function About(): JSX.Element {
	return (
		<Wrapper
			title='About'
			description='About Page'
		>
			<main>
				<div className={clsx('bg-slate-500', styles.aboutContainer)}>
					<h1>About Page</h1>
					<div className={styles.aboutContainer}>
						<p className={styles.about}>
							Accelerando: Belgrade Journal of Music and Dance (Accelerando:
							BJMD) ISSN: 2466-3913 (Online) is an annual electronic, open
							access, double-blind-peer-reviewed, international scholarly
							journal, with the aim to provide information for students,
							researchers, professionals in various fields of dance, music, and
							performing arts. Publisher is Belgrade Center for Music and Dance
							from Belgrade, Serbia.{' '}
						</p>
						<img
							src={require('@site/static/img/docusaurus.png').default}
							alt='Accelerando Logo'
						/>
					</div>
				</div>
			</main>
		</Wrapper>
	);
}
