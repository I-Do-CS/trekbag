import useItemsStore from "../../stores/itemsStore";

function Item({ item }) {
    const { togglePacked, deleteItem } = useItemsStore((state) => ({
        togglePacked: state.togglePacked,
        deleteItem: state.deleteItem,
    }));
    const handleInputChange = () => {
        togglePacked(item.id);
    };
    const handleButtonClick = () => {
        deleteItem(item.id);
    };

    return (
        <li className="item">
            <label>
                <input type="checkbox" checked={item.packed} onChange={handleInputChange} />
                {item.text}
            </label>
            <button onClick={handleButtonClick} aria-label={`Delete ${item.name} from list`}>
                ❌
            </button>
        </li>
    );
}

export default Item;
