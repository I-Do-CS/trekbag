import useItemsStore from "../../stores/itemsStore";
import Button from "./Button";

function ButtonGroup() {
    const { markAllAsComplete, markAllAsIncomplete, resetToInitial, clearAll } = useItemsStore(
        (state) => ({
            markAllAsComplete: state.markAllAsComplete,
            markAllAsIncomplete: state.markAllAsIncomplete,
            resetToInitial: state.resetToInitial,
            clearAll: state.clearAll,
        }),
    );
    const buttons = [
        {
            id: "complete",
            content: "mark all as complete",
            onClick: markAllAsComplete,
        },
        {
            id: "incomplete",
            content: "mark all as incomplete",
            onClick: markAllAsIncomplete,
        },
        {
            id: "reset",
            content: "reset to initial",
            onClick: resetToInitial,
        },
        {
            id: "remove-all",
            content: "remove all items",
            onClick: clearAll,
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
