export default function Footer() {
    return (
        <footer className="bg-gray-100 py-6 mt-8">
            <div className="flex flex-col items-center mb-4" id="final">
                <a
                    href="https://pokemon.fandom.com/wiki/Category:Generation_I_Pok%C3%A9mon"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded shadow">
                        Ver mais
                    </button>
                </a>
                <br />
            </div>
            <hr className="border-gray-300 my-4" />
            <div className="flex flex-col items-center space-y-2">
                <p className="font-semibold text-gray-700">Páginas Wiki:</p>
                <div className="flex gap-4">
                    <a
                        href="https://www.pokemon.com/br/pokedex/charmander"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        Charmander
                    </a>
                    <a
                        href="https://www.pokemon.com/br/pokedex/bulbasaur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline"
                    >
                        Bulbasaur
                    </a>
                    <a
                        href="https://www.pokemon.com/br/pokedex/squirtle"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-800 hover:underline"
                    >
                        Squirtle
                    </a>
                </div>
            </div>
        </footer>
    )
}