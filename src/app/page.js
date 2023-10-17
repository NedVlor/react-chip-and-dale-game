// import CounterButton from "./components/CounterButton.client.js";
// import Image from "next/image";
import styles from "./page.module.css";
import Game from "./components/Game.client.js";

export default function Home() {
  return (
    <main className={styles.main}>
      <Game />
    </main>
  );
}

{
  /* <CounterButton />
<div className={styles.description}>
  <p>
    Get started by editing&nbsp;
    <code className={styles.code}>src/app/page.js</code>
  </p>
  <div>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      By{" "}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </a>
  </div>
</div> */
}
