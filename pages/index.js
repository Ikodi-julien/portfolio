/* eslint-disable @next/next/link-passhref */
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Wrapper } from "../styled_components";
import { MainTitle, SubTitle } from "../components/Hero/HeroStyles";
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
      </Head>

      <Wrapper>
        <div style={{ display: "flex" }}>
          <Link href="/homepage" passHref>
            <a>
              <Button color="secondary">Homepage 👷</Button>
            </a>
          </Link>
          <Link href="/doc/cdc_portfolio.odt">
            <a>
              <Button color="secondary">CDC</Button>
            </a>
          </Link>
          <Link href="/doc/journal.md">
            <a>
              <Button color="secondary">Journal</Button>
            </a>
          </Link>
        </div>
        <MainTitle>Bienvenue sur mon futur portfolio 😅</MainTitle>

        <SubTitle>Voilà à quoi ça devrait ressembler</SubTitle>
        <br />
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

      <footer style={{ textAlign: "center" }}>
        <a href="https://ikodi.eu" target="_blank" rel="noopener noreferrer">
          Mais le vieux est toujours là{" "}
          <span style={{ marginLeft: "1em" }}>
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
