import { useContext } from "react";
import Button from "./Button";
import { ItemsContext } from "../../contexts/ItemsContext";

function ButtonGroup() {
    const { operations } = useContext(ItemsContext);
    const buttons = [
        {
            id: "complete",
            content: "mark all as complete",
            onClick: operations.markAllAsComplete,
        },
        {
            id: "incomplete",
            content: "mark all as incomplete",
            onClick: operations.markAllAsIncomplete,
        },
        {
            id: "reset",
            content: "reset to initial",
            onClick: operations.resetToInitial,
        },
        {
            id: "remove-all",
            content: "remove all items",
            onClick: operations.clearAll,
        },
    ];

    return (
        <section className="button-group">
            {buttons.map((button) => (
                <Button key={button.id} onClick={button.onClick}>
                    {button.content}
                </Button>
            ))}
        </section>
    );
}

export default ButtonGroup;
