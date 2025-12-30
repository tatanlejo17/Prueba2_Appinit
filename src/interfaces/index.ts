export interface User {
    name: string;
    email: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (user: User) => void;
    logout: () => void;
}

export interface Pokemon {
    name: string;
    url: string;
}
