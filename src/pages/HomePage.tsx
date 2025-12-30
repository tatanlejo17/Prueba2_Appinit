import { useEffect, useMemo, useState } from 'react';
import { PokeClient } from '../services/PokeClient';
import { Link } from 'react-router-dom';
import type { Pokemon } from '../interfaces';

interface PokeApiResponse {
    results: Pokemon[];
}

export default function DashboardPage() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const ITEMS_FOR_PAGE = 20;

    useEffect(() => {
        fetchPokemons();
    }, [page]);

    const fetchPokemons = async () => {
        try {
            const offset = page * ITEMS_FOR_PAGE;
            const data = await PokeClient<PokeApiResponse>(`/pokemon?limit=${ITEMS_FOR_PAGE}&offset=${offset}`);

            setPokemons(data.results);
        } catch (error) {
            console.error(error);
        }
    };

    const filtrarPokemons = useMemo(() => {
        return pokemons.filter(p =>
            p.name.includes(search.toLowerCase())
        );
    }, [pokemons, search]);


    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className='max-w-6xl mx-auto px-4'>
                <div className='flex justify-between'>
                    <span className='text-2xl font-bold text-lime-500 text-shadow-sm'>Listado de pokemones</span>
                    <input
                        type="text"
                        placeholder="Buscar Pokemón..."
                        className="w-80 p-2 mb-6 rounded-lg shadow-sm border"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>


                <div className="grid grid-flow-col grid-rows-4 grid-cols-5 gap-4">
                    {filtrarPokemons.map((pokemon) => {
                        const id = pokemon.url.split('/')[6];

                        return (
                            <Link to={`/pokemon/${id}`} key={pokemon.name} className="block group">
                                <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center border border-gray-100">
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                        alt={pokemon.name}
                                        className="mx-auto w-24 h-24 group-hover:scale-110 transition"
                                    />
                                    <p className="capitalize font-semibold text-gray-700 mt-2">{pokemon.name}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-8 gap-4">
                    <button
                        disabled={page === 0}
                        onClick={() => setPage(p => p - 1)}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-gray-300"
                    >
                        Anterior
                    </button>
                    <span className="px-4 py-2 font-bold">Página {page + 1}</span>
                    <button
                        onClick={() => setPage(p => p + 1)}
                        className="px-4 py-2 bg-violet-600 text-white rounded hover:bg-violet-500"
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
}