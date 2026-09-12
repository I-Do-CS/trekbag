import Item from "./Item";

function ItemList({ items, operations }) {
    return (
        <ul>
            {items.map((item) => (
                <Item key={item.id} item={item} operations={operations} />
            ))}
        </ul>
    );
}

export default ItemList;
