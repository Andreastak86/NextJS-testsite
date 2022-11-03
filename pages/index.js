import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test NextJS</title>
      </Head>

      <h1 className={styles.homepageTitle}>Hello</h1>
    </div>
  );
}
