const URL_BASE = 'https://pokeapi.co/api/v2';

export const PokeClient = async <T>(endpoint: string): Promise<T> => {

    const headers = {
        'Content-Type': 'application/json'
    };

    const config: RequestInit = {
        headers
    };

    try {
        const response = await fetch(`${URL_BASE}${endpoint}`, config);

        if (!response.ok) {
            const errorData = await response.json().catch(() => null);

            throw new Error(errorData?.message || `Error HTTP: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error('Error en la petición:', error);

        throw error;
    }
};