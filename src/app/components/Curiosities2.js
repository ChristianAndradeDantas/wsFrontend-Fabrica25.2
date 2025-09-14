export default function Curiosities2() {
    return (
        <div>
            <div
                className="curiosidade text-center bg-gradient-to-b from-neutral-700 to-neutral-600 font-sans text-[#BBB] p-4 border-t-2 border-b-2 border-black"
            >
                <h1 className="text-2xl font-bold">Algumas curiosidades</h1>
            </div>
            <div className="curiosidades px-4 py-6">
                <h1 className="text-xl font-semibold italic">
                    <i>Curiosidade #1:</i>
                </h1>
                <br />
                <p>
                    Esses três Pokémon's apareceram pela primeira vez na primeira trilogia do GameBoy:{" "}
                    <strong>
                        <em>Pokémon Red, Blue e Green</em>
                    </strong>
                    .
                </p>
                <br /> <br />
                <hr className="my-4 border-gray-400" />
                <br />
                <div className="imagembackground flex flex-col items-center">
                    <img
                        src="https://images.immediate.co.uk/production/volatile/sites/3/2021/04/pokemon-red-74864ea.png"
                        alt="Screenshot do primeiro jogo de Pokémon"
                        width="500"
                        className="rounded shadow-lg"
                    />
                    <br />
                    <sup className="text-xs text-gray-400">
                        Fonte da imagem:{" "}
                        <a
                            href="https://www.radiotimes.com/technology/gaming/pokemon-games-in-order/"
                            className="imagesource underline text-blue-400 hover:text-blue-600"
                        >
                            https://www.radiotimes.com/technology/gaming/pokemon-games-in-order/
                        </a>
                    </sup>
                    <br />
                </div>
                <br />
                <hr className="my-4 border-gray-400" />
                <br />
                <p>
                    • Já que são os primeiros Pokemon's selecionáveis no primeiro jogo, isso faz com que eles sejam os primeiros Pokémon's utilizáveis em toda a franquia.
                </p>
                <br /> <br />
                <hr className="my-4 border-gray-400" />
                <br />
                <h1 id="evolucoes" className="text-xl font-semibold italic">
                    <i>Curiosidade #2:</i>
                </h1>
                <br />
                <p>
                    • As formas evoluídas do Charmander são o <b>Charmeleon e o Charizard</b>;
                </p>
                <br />
                <p>
                    • As formas evoluídas do Bulbasaur são o <b>Ivysaur e o Venusaur</b>;
                </p>
                <br />
                <p>
                    • As formas evoluídas do Squirtle são o <b>Wartortle e o Blastoise</b>.
                </p>
                <br /> <br />
                <hr className="my-4 border-gray-400" />
                <br />
            </div>
        </div>
    );
}
