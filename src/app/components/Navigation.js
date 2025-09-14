

import { SUSE } from 'next/font/google';
const suse = SUSE({ 
    subsets: ['latin'], 
    weight: ['400', '700'] 
});

export default function Navigation() {
    return (
        <nav className="flex justify-center text-center text-black text-4xl border-y-2 border-black bg-[#999999]
        ">
            <a href="#inicio" className="flex-1 border-x-1 py-4 hover:bg-[#bbbbbb]">Início</a>
            <a href="#evolucoes" className="flex-1 border-x-1 py-4 hover:bg-[#bbbbbb]">Evoluções</a>
            <a href="#cartas" className="flex-1 border-x-1 py-4 hover:bg-[#bbbbbb]">Cartas</a>
            <a href="https://pokemon.fandom.com/pt-br/wiki/Pok%C3%A9P%C3%A9dia" className="flex-1 border-x-1 py-4 hover:bg-[#bbbbbb]">Fandom Wiki</a>
            <a href="https://www.pokemon.com/br/pokedex" className="flex-1 border-x-1 py-4 hover:bg-[#bbbbbb]">Pokedéx</a>
        </nav>
    );
}
