import { useEffect, useState } from "react";
import { SEED_ITEMS } from "../constants";
import ItemsContext from "./ItemsContext";

function ItemsContextProvider({ children }) {
    // Lazy-load items from local storage or use the seed items if none exist.
    const [items, setItems] = useState(
        () => JSON.parse(localStorage.getItem("items")) || [...SEED_ITEMS],
    );
    // Derive statistics from the items array.
    const stats = {
        total: items.length,
        packed: items.filter((item) => item.packed).length,
    };
    // Define operations that can be performed on the items array.
    const operations = {
        addItem: (text) => {
            setItems((prev) => [...prev, { id: `item-${Date.now()}`, text, packed: false }]);
        },
        deleteItem: (id) => {
            setItems((prev) => prev.filter((item) => item.id !== id));
        },
        togglePacked: (id) => {
            setItems((prev) =>
                prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)),
            );
        },
        markAllAsComplete: () => {
            setItems((prev) => prev.map((item) => ({ ...item, packed: true })));
        },
        markAllAsIncomplete: () => {
            setItems((prev) => prev.map((item) => ({ ...item, packed: false })));
        },
        resetToInitial: () => {
            setItems(() => [...SEED_ITEMS]);
        },
        clearAll: () => {
            setItems([]);
        },
    };
    // Persist items to local storage whenever they change.
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(items));
    }, [items]);

    return (
        <ItemsContext.Provider value={{ items, stats, operations }}>
            {children}
        </ItemsContext.Provider>
    );
}

export default ItemsContextProvider;
