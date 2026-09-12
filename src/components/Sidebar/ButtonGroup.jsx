import Button from "./Button";

function ButtonGroup() {
    const clickHandlers = {
        markAllAsComplete: () => {},
        markAllAsIncomplete: () => {},
        resetToInitial: () => {},
        removeAllItems: () => {},
    };

    const buttons = [
        {
            id: "complete",
            content: "mark all as complete",
            clickHandler: clickHandlers.markAllAsComplete,
        },
        {
            id: "incomplete",
            content: "mark all as incomplete",
            clickHandler: clickHandlers.markAllAsIncomplete,
        },
        {
            id: "reset",
            content: "reset to initial",
            clickHandler: clickHandlers.resetToInitial,
        },
        {
            id: "remove-all",
            content: "remove all items",
            clickHandler: clickHandlers.removeAllItems,
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
