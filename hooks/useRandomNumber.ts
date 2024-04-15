import { useState } from "react";

/**
 * Un hook personalizado para generar un número aleatorio y gestionar su estado.
 *
 * @return {{ randomNumber: number, generateRandomNumber: () => void }} state que contiene el número aleatorio y una función para generar un nuevo número aleatorio
 */
export const useRandomNumber = () => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const generateRandomNumbers = () => {
    const min = 1;
    const max = 1025;
    const newRandomNumbers = Array.from(
      { length: 3 },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );
    setRandomNumbers(newRandomNumbers);
  };

  return {
    randomNumbers,
    generateRandomNumbers,
  };
};
