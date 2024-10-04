import styles from './styles.module.css';


type quoteProps = {
  cite: string,
	reference: string,
  children: React.ReactNode
}

export default function Blockquote({cite, reference, children }: quoteProps) {
  return (
		<blockquote className={styles.quote} cite={cite}>
			{children} <cite>[{reference}]</cite>
		</blockquote>
	);
}