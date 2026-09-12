import { useState } from "react";
import { BackgroundHeading, Footer, Header, ItemList, Sidebar } from "./components";
import { SEED_ITEMS } from "./constants";

function App() {
    const [items, setItems] = useState(SEED_ITEMS);
    const operations = {
        addItem: (text) => {
            setItems([...items, { id: `item-${Date.now()}`, text, packed: false }]);
        },
        deleteItem: (id) => {
            setItems(items.filter((item) => item.id !== id));
        },
        togglePacked: (id) => {
            setItems(
                items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)),
            );
        },
        markAllAsComplete: () => {
            setItems(items.map((item) => ({ ...item, packed: true })));
        },
        markAllAsIncomplete: () => {
            setItems(items.map((item) => ({ ...item, packed: false })));
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
                <Header />
                <ItemList items={items} operations={operations} />
                <Sidebar operations={operations} />
            </main>

            <Footer />
        </>
    );
}

export default App;
