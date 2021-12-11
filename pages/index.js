/* eslint-disable @next/next/link-passhref */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Title, Wrapper, Button } from "../styled_components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio - J. PELLIN</title>
        <meta
          name="description"
          content="Le portfolio de Julien PELLIN, développeur d'applications pour le web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <Link href="/homepage">
          <Button>Homepage 👷</Button>
        </Link>
        {/* <Button invert>Test Theme prop inverted</Button> */}

        <Title>Bienvenue sur mon futur portfolio 😅</Title>

        <div>
          <Image
            src="/wf_homepage.png"
            alt="Wireframe de la homepage"
            width={854}
            height={1080}
            layout={`responsive`}
          />
        </div>
      </Wrapper>

      <footer>
        <a href="https://ikodi.eu" target="_blank" rel="noopener noreferrer">
          Mais le vieux est là{" "}
          <span>
            <Image
              src="/logo_ikodi_lettres.png"
              alt="Logo Ikodi"
              width={100}
              height={20}
            />
          </span>
        </a>
      </footer>
    </div>
  );
}
