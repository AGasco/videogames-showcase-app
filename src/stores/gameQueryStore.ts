import { create } from 'zustand';

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortOrder: (order: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (id: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
  setPlatformId: (id: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
  setSortOrder: (order: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: order } })),
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } }))
}));

export default useGameQueryStore;
