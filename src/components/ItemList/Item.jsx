function Item({ item, handleTogglePacked, handleDeleteItem }) {
    return (
        <li className="item">
            <label>
                <input
                    type="checkbox"
                    checked={item.packed}
                    onChange={() => handleTogglePacked(item.id)}
                />
                {item.name}
            </label>
            <button
                onClick={() => handleDeleteItem(item.id)}
                aria-label={`Delete ${item.name} from list`}
            >
                ❌
            </button>
        </li>
    );
}

export default Item;
