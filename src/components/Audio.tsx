import { useEffect, useState } from "react";

async function getAudio() {
  const res = await fetch(
		'https://drive.google.com/file/d/1mVkFA6QS3vrI5qugeCPuEZhaw5DyzoAi/view?usp=sharing'
  );
  return res;

}

export default function Audio() {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const elem = getAudio();
    elem.then(r=> setAudio(r))
  }, []);

  return (
		<iframe
			src='https://drive.google.com/file/d/1mVkFA6QS3vrI5qugeCPuEZhaw5DyzoAi/preview'
			width='640'
			height='480'
			allow='autoplay'
		></iframe>
	);

}