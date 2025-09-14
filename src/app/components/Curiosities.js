export default function Curiosities() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-black">Curiosidades sobre o Pokémon</h2>

            <h3 className="font-black text-black">Curiosidade #1</h3>
            <p className="font-black text-black">O Pokémon Bellsprout inspirou o design da planta Disparervilha no jogo Plants vs. Zombies.</p>
            <div className="flex gap-4 items-center">
                <img
                    src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/069.png"
                    alt="Pokémon Bellsprout"
                    className="w-32 h-32 object-contain"
                />
                <img
                    src="/trueimage.png"
                    alt="Disparervilha, do Plants vs Zombies."
                    className="w-32 h-32 object-contain"
                />
            </div>
        </div>
    )
}