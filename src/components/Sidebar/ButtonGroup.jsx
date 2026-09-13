import useItemsContext from "../../hooks/useItemsContext";
import Button from "./Button";

function ButtonGroup() {
    const { operations } = useItemsContext();
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
