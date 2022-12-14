import Head from 'next/head'
import { useSession } from "next-auth/react"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

type Fancam = {
  song: {
    name: string,
  },
  quality: string,
  url: string,
  title: string,
}

const Item = ({ fancam }: { fancam: Fancam }) => {
  return (
    <ul>
      <li dangerouslySetInnerHTML={{
        __html: `
      ${fancam.song.name} | ${fancam.quality}: <a href="${fancam.url}" target="_blank">${fancam.title}</a>  <!-- <iframe width="800em" height="100em" width="${200 / 315 * 560}em" height="${200}em" src="https://www.youtube.com/embed/KUcScWwYdqg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      `}}>
      </li>
    </ul>
  )
}

export default function Home() {
  const { data: session, status } = useSession()
  console.log(session, status)
  return (
    <div className={styles.container}>
      <Head>
        <title>Jikcam</title>
        <meta name="description" content="Jikcam https://github.com/jiheondev3/jikcam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        {session?.user?.name ?
          <h1 className={styles.title}>
            Welcome to 직캠, {session.user.name}!
          </h1>
          :
          <h1 className={styles.title}>
            Welcome to 직캠!
          </h1>
        }

        <Item fancam={{ song: { name: 'DKDK' }, quality: '1080p60', url: 'https://youtu.be/KUcScWwYdqg?t=11', title: '[60f] 180916 프로미스나인(fromis_9) 백지헌(Jiheon)- 두근두근(DKDK) @안산 희망마라톤 직캠(fancam) by 땀맨(SweatMan)' }} />
        <Item fancam={{ song: { name: 'DKDK' }, quality: '1080p50', url: 'https://www.youtube.com/watch?v=Mw-qECpkTF4', title: `프로미스나인 백지헌 직캠 - 두근두근 (Fromis_9 - DKDK ' Baek Ji Heon' Focus CAM)` }} />
      </main>
    </div>
  )
}
