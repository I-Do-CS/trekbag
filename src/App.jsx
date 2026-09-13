import { useState } from "react";
import { BackgroundHeading, Footer, Header, ItemList, Sidebar } from "./components";
import { SEED_ITEMS } from "./constants";

function App() {
    const [items, setItems] = useState(() => [...SEED_ITEMS]);
    const stats = {
        total: items.length,
        packed: items.filter((item) => item.packed).length,
    };
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

    return (
        <>
            <BackgroundHeading />

            <main>
                <Header stats={stats} />
                <ItemList items={items} operations={operations} />
                <Sidebar operations={operations} />
            </main>

            <Footer />
        </>
    );
}

export default App;
