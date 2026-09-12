import { useState } from "react";
import { SEED_ITEMS } from "../../constants";
import Item from "./Item";

function ItemList() {
    const [items, setItems] = useState(() => [...SEED_ITEMS]);

    const handleTogglePacked = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)),
        );
    };

    const handleDeleteItem = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <ul>
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    handleTogglePacked={handleTogglePacked}
                    handleDeleteItem={handleDeleteItem}
                />
            ))}
        </ul>
    );
}

export default ItemList;
