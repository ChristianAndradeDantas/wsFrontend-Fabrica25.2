

import { SUSE } from 'next/font/google';
const suse = SUSE({ 
    subsets: ['latin'], 
    weight: ['400', '700'] 
});

export default function Header() {
    return (
            <header 
            id="start"
            className={`${suse.className} flex flex-col items-center w-full p-4
            bg-[linear-gradient(to_bottom,rgba(38,38,38,0.5),rgba(82,82,82,0.5)),url('/pokeballbackground.png')]
            bg-repeat-x bg-[size:100px_auto] bg-[position:center]`}>

                <h1 className="text-7xl font-bold text-center text-shadow-amber-900 ">Pokémon's Clássicos</h1>
                <p className="text-4xl text-center">Dos Originais até as novas adições!</p>
            </header>
    );
}

