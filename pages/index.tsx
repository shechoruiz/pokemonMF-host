/* eslint-disable react-hooks/exhaustive-deps */
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import { useRandomNumber } from "@/hooks/useRandomNumber";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const ExternalComponent1 = dynamic(() => import("pokeremote1/Pokemon1"), {
  ssr: false,
  suspense: true,
});
const ExternalComponent2 = dynamic(() => import("pokeremote2/Pokemon2"), {
  ssr: false,
  suspense: true,
});
const ExternalComponent3 = dynamic(() => import("pokeremote3/Pokemon3"), {
  ssr: false,
  suspense: true,
});

export default function Home() {
  const { randomNumbers, generateRandomNumbers } = useRandomNumber();

  /**
   * Definí este useEffect para corregir un comportamiento particular de la siguiente función, que al ser cliqueada para 1ra vez, no me entregaba un numero aleatorio.
   */
  useEffect(() => {
    generateRandomNumbers();
  }, []);

  /**
   * Esta función maneja el evento de clic y envía un evento personalizado con el resultado del número aleatorio.
   */
  const handleClick = () => {
    generateRandomNumbers();
    const result = randomNumbers;
    const event = new CustomEvent("randomNumberResult", {
      detail: { result },
    });
    window.dispatchEvent(event);
  };

  return (
    <section className={styles.main}>
      <h1 className={styles.subtitle}>Microfrontend host</h1>
      <button className={styles.changeButton} onClick={handleClick}>
        Cambiar
      </button>
      <div className={styles.container}>
        <ExternalComponent1 />
        <ExternalComponent2 />
        <ExternalComponent3 />
      </div>
    </section>
  );
}
