/* eslint-disable @next/next/link-passhref */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Title, Wrapper } from "../styled_components";
import Button from "../styled_components/Button";

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
        <Title>Bienvenue sur mon futur portfolio 😅</Title>
        <Link href="/homepage" passHref>
          <a>
            <Button>Homepage 👷</Button>
          </a>
        </Link>
        <Link href="/doc/cdc_portfolio.odt">
          <a>
            <Button>CDC</Button>
          </a>
        </Link>
        <Link href="/doc/journal.md">
          <a>
            <Button>Journal</Button>
          </a>
        </Link>

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
