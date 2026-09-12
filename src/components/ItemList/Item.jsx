function Item({ item, operations }) {
    const handleInputChange = () => {
        operations.togglePacked(item.id);
    };
    const handleButtonClick = () => {
        operations.deleteItem(item.id);
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
