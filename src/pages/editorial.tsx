import Wrapper from '../components/Layout/Layout';
import styles from './editorial.module.css';

export default function About(): JSX.Element {
	return (
    <Wrapper title='Editorial Board' description='Editorial page'>
      <header>
        <h1>Editorial Board</h1>
      </header>
      <main className={styles.main}>
        <div>
          <h4>Editor in Chief</h4>
          <p>
            Maja Marijan, M. Sc. (Serbia), President and Art Director of the
            Belgrade Center for Music and Dance. A member of CID-UNESCO 2016
            (majamarijan@bcmd.edu.rs).
          </p>
        </div>

      </main>
		</Wrapper>
	);
}
