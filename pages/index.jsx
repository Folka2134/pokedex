import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/jherr/pokemon/main/index.json"
  );

  return {
    props: {
      pokemon: await res.json(),
    },
  };
}

export default function Home({ pokemon }) {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          {pokemon.map((pokemon) => (
            <div className={styles.card} key={pokemon.id}>
              <Link href={`/pokemon/${pokemon.id}`}>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                />
                <p>{pokemon.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}