import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio - J. PELLIN</title>
        <meta
          name="description"
          content="Le portfolio de Julien PELLIN, développeur d'applications pour le web"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenue sur mon futur portfolio 😅</h1>

        <div style={{ position: "relative", width: "80%" }}>
          <Image
            src="/wf_homepage.png"
            alt="Wireframe de la homepage"
            width={854}
            height={1080}
            layout={`responsive`}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://ikodi.eu" target="_blank" rel="noopener noreferrer">
          Mais le vieux est là{" "}
          <span className={styles.logo}>
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
