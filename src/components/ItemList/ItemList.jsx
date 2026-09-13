import EmptyView from "./EmptyView";
import Item from "./Item";

function ItemList({ items, operations }) {
    return (
        <>
            <ul className="item-list">
                {items.length === 0 && <EmptyView />}
                {items.length > 0 &&
                    items.map((item) => <Item key={item.id} item={item} operations={operations} />)}
            </ul>
        </>
    );
}

export default ItemList;
