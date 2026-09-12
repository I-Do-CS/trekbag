import Item from "./Item";

function ItemList({ items, operations }) {
    return (
        <ul>
            {items.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    deleteItem={operations.deleteItem}
                    togglePacked={operations.togglePacked}
                />
            ))}
        </ul>
    );
}

export default ItemList;
