//Infelizmente, não tá concluído, mas fiz o que pude.
//Ainda tô aprendendo React, Next.js e consumo de API's.
//Não consegui concluir. Meus conhecimentos são muito limitados.
//A única coisa que eu realmente concluí foi o header e o nav...]
//Queria muito ter feito mais coisa, mas meu final de semana foi bastante corrido.
//Isso na verdade foi uma reutilização de um projeto antigo meu lá do P1, que tentei adaptar para Next.js para este desafio porém não finalizei.
//Apenas mandei o Copilot ajudar na estilização e nem terminei mesmo.
//Foi mal. Não deu.

"use client";
import { useEffect, useState } from 'react';

// Importação da fonte
import { SUSE } from 'next/font/google';

//Componentes
import Header from './components/Header';
import Navigation from './components/Navigation';
import Curiosities from './components/Curiosities';
import Classics from './components/Classics';
import Curiosities2 from './components/Curiosities2';
import Tables from './components/Tables';
import Footer from './components/Footer';
import Cards from './components/Cards';

//async function APIConsumption() {
//    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
//    const data = await response.json();
//    console.log(data);
//    return data;
//}

const suse = SUSE({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {

  return (
    <>
      <Header />
      <Navigation />
      <Curiosities />
      <Classics />
      <Curiosities2 />
      <Tables />

      {/*<div className='flex'>
        <Cards url="https://pokeapi.co/api/v2/pokemon/charmander" />
      </div>*/}
      <Footer />

    </>
  )
}