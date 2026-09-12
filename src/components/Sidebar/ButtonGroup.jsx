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
            id: "01a09422-bbec-76db-885c-eb595ab9845a",
            content: "mark all as complete",
            clickHandler: clickHandlers.markAllAsComplete,
        },
        {
            id: "01a09422-d4a3-778d-a608-df6cb392cac7",
            content: "mark all as incomplete",
            clickHandler: clickHandlers.markAllAsIncomplete,
        },
        {
            id: "01a09422-e55b-773a-b399-312b28803a77",
            content: "reset to initial",
            clickHandler: clickHandlers.resetToInitial,
        },
        {
            id: "01a09422-f290-728e-9c5f-8d079353966e",
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
