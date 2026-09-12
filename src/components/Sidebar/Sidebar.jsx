import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar({ operations }) {
    return (
        <aside className="sidebar">
            <AddItemForm addItem={operations.addItem} />
            <ButtonGroup operations={operations} />
        </aside>
    );
}

export default Sidebar;
