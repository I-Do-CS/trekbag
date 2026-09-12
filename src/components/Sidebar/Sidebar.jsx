import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function Sidebar() {
    return (
        <aside className="sidebar">
            <AddItemForm />
            <ButtonGroup />
        </aside>
    );
}

export default Sidebar;
