import { useRef, useState } from "react";
import Button from "./Button";
import useItemsStore from "../../stores/itemsStore";

function AddItemForm() {
    const addItem = useItemsStore((state) => state.addItem);
    const [itemText, setItemText] = useState("");
    const inputRef = useRef(null);

    const handleItemTextChange = (e) => {
        setItemText(() => e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (itemText.trim() === "") {
            alert("You can't add an empty item!");
            inputRef.current.focus();
            setItemText(() => "");
            return;
        }

        addItem(itemText);
        setItemText(() => "");
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input
                placeholder="Toothbrush..."
                type="text"
                ref={inputRef}
                value={itemText}
                onChange={handleItemTextChange}
                autoFocus
            />
            <Button>add to list</Button>
        </form>
    );
}

export default AddItemForm;
