export default function Tables() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-0 text-black">
                <thead>
                    <tr>
                        <th className="rounded-tl-lg bg-gray-100 px-4 py-2 text-left">Forma inicial</th>
                        <th className="bg-gray-100 px-4 py-2 text-left">Evolução 1</th>
                        <th className="rounded-tr-lg bg-gray-100 px-4 py-2 text-left">Evolução 2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-orange-400">
                        <td className="px-4 py-4 align-top text-black">
                            Charmander <br /><br />
                            <a href="https://www.pokemon.com/br/pokedex/charmander" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png" height="100" alt="Imagem do Pokémon Charmander" title="Charmander" />
                            </a>
                        </td>
                        <td className="px-4 py-4 align-top">
                            Charmeleon <br /><br />
                            <a href="https://www.pokemon.com/br/pokedex/charmeleon" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/005.png" height="100" alt="Imagem do Pokémon Charmeleon" title="Charmeleon" />
                            </a>
                        </td>
                        <td className="px-4 py-4 align-top">
                            Charizard <br /><br />
                            <a href="https://www.pokemon.com/br/pokedex/charizard" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png" height="100" alt="Imagem do Pokémon Charizard" title="Charizard" />
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-green-400">
                        <td className="px-4 py-4 align-top">
                            Bulbasaur<br /><br />
                            <a href="https://www.pokemon.com/br/pokedex/bulbasaur" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png" height="100" alt="Imagem do Pokémon Bulbasaur" title="Bulbasaur" />
                            </a>
                        </td>
                        <td className="px-4 py-4 align-top">
                            Ivysaur<br /><br />
                            <a href="https://www.pokemon.com/br/pokedex/ivysaur" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/002.png" height="100" alt="Imagem do Pokémon Ivysaur" title="Ivysaur" />
                            </a>
                        </td>
                        <td className="px-4 py-4 align-top">
                            Venusaur<br /><br />
                            <a href="https://www.pokemon.com/br/pokedex/venusaur" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png" height="100" alt="Imagem do Pokémon Venusaur" title="Venusaur" />
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-blue-400">
                        <td className="rounded-bl-lg px-4 py-4 align-top">
                            Squirtle<br /><br />
                            <a href="https://www.pokemon.com/br/pokedex/squirtle" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png" height="100" alt="Imagem do Pokémon Squirtle" title="Squirtle" />
                            </a>
                        </td>
                        <td className="px-4 py-4 align-top">
                            Wartortle<br /><br />
                            <a href="https://www.pokemon.com/br/pokedex/wartortle" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/008.png" height="100" alt="Imagem do Pokémon Wartortle" title="Wartortle" />
                            </a>
                        </td>
                        <td className="rounded-br-lg px-4 py-4 align-top">
                            Blastoise<br /><br />
                            <a href="https://www.pokemon.com/br/pokedex/blastoise" target="_blank" rel="noopener noreferrer">
                                <img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png" height="100" alt="Imagem do Pokémon Blastoise" title="Blastoise" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}