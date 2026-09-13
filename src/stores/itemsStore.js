import { create } from "zustand";
import { SEED_ITEMS } from "../constants";

const useItemsStore = create((set) => ({
    items: SEED_ITEMS,
    addItem: (text) => {
        set((state) => ({
            items: [...state.items, { id: `item-${Date.now()}`, text, packed: false }],
        }));
    },
    deleteItem: (id) => {
        set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
    },
    togglePacked: (id) => {
        set((state) => ({
            items: state.items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item,
            ),
        }));
    },
    markAllAsComplete: () => {
        set((state) => ({ items: state.items.map((item) => ({ ...item, packed: true })) }));
    },
    markAllAsIncomplete: () => {
        set((state) => ({ items: state.items.map((item) => ({ ...item, packed: false })) }));
    },
    resetToInitial: () => {
        set(() => ({ items: [...SEED_ITEMS] }));
    },
    clearAll: () => {
        set(() => ({ items: [] }));
    },
}));

export default useItemsStore;
