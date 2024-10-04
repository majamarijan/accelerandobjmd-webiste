import Layout from "@theme/Layout";
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  title: string,
  description: string,
  children: JSX.Element[] | JSX.Element
}

export default function Wrapper({title, description,children}:Props) {
  return (
		<Layout
			title={title}
			description={description}
			wrapperClassName={clsx('bg-neutral dark:bg-dark transition transition-duration-600 ease-in-out', styles.layout)}
      >
			{children}
		</Layout>
	);
}