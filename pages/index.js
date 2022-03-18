import Head from 'next/head';
import Link from 'next/link';

import HomeHeader from '../components/home/home-header';
import HomePanel from '../components/home/home-panel';
import { DevASCII, SoundASCII } from '../public/ascii';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Roger Middenway</title>
        <meta name="description" content="Roger Middenway portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="page">
          <HomeHeader text={`Roger Middenway`}></HomeHeader>
          <div className="home-panel-container">
            <HomePanel
              ascii={SoundASCII}
              link="/sound"
              title="Sound Design"
              classNames="home-panel__left"
            >
              <Link href="/sound" passHref>
                <h2 className="subheading subheading__home clickable">
                  Sound Design
                </h2>
              </Link>
            </HomePanel>
            <HomePanel ascii={DevASCII} link="/dev" title="Development">
              <Link href="/dev" passHref>
                <h2 className="subheading subheading__home clickable">
                  Development
                </h2>
              </Link>
            </HomePanel>
          </div>
        </div>
      </main>
    </div>
  );
}
