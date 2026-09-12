import Button from "./Button";

function ButtonGroup({ operations }) {
    const buttons = [
        {
            id: "complete",
            content: "mark all as complete",
            clickHandler: operations.markAllAsComplete,
        },
        {
            id: "incomplete",
            content: "mark all as incomplete",
            clickHandler: operations.markAllAsIncomplete,
        },
        {
            id: "reset",
            content: "reset to initial",
            clickHandler: operations.resetToInitial,
        },
        {
            id: "remove-all",
            content: "remove all items",
            clickHandler: operations.clearAll,
        },
    ];

    return (
        <section className="button-group">
            {buttons.map((button) => (
                <Button key={button.id} onClick={button.clickHandler}>
                    {button.content}
                </Button>
            ))}
        </section>
    );
}

export default ButtonGroup;
