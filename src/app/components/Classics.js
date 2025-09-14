import { SUSE } from 'next/font/google';
const suse = SUSE({ 
    subsets: ['latin'], 
    weight: ['400', '700'] 
});

export default function Classics() {
    return (
        <div className="flex">
            <div
                className="bg-[#d68e35] text-center text-[#583a16] font-mono p-4 flex-1 border-r-2 border-black"
            >
                <h2 className="text-xl font-bold mb-2">Charmander</h2>
                <a
                    href="https://www.pokemon.com/br/pokedex/charmander"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"
                        alt="Imagem do Pokémon Charmander"
                        className="mx-auto mb-2"
                    />
                </a>
                <p>
                    <sub>Classe: Fogo</sub>
                </p>
            </div>
            <div className="bg-[#7ac74c] text-center text-[#234d20] font-mono p-4 flex-1 border-r-2 border-black">
                <h2 className="text-xl font-bold mb-2">Bulbasaur</h2>
                <a
                    href="https://www.pokemon.com/br/pokedex/bulbasaur"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"
                        alt="Imagem do Pokémon Bulbasaur"
                        className="mx-auto mb-2"
                    />
                </a>
                <p>
                    <sub>Classe: Grama</sub>
                </p>
            </div>
            <div className="bg-[#6390f0] text-center text-[#1b3556] font-mono p-4 flex-1">
                <h2 className="text-xl font-bold mb-2">Squirtle</h2>
                <a
                    href="https://www.pokemon.com/br/pokedex/squirtle"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png"
                        alt="Imagem do Pokémon Squirtle"
                        className="mx-auto mb-2"
                    />
                </a>
                <p>
                    <sub>Classe: Água</sub>
                </p>
            </div>
        </div>
    );
}
