import useItemsStore from "../../stores/itemsStore";

function Counter() {
    const { packed, total } = useItemsStore((state) =>
        state.items.reduce(
            (acc, item) => {
                acc.total++;
                if (item.packed) acc.packed++;
                return acc;
            },
            { packed: 0, total: 0 },
        ),
    );

    return (
        <div>
            <b>{packed}</b> / {total} items packed
        </div>
    );
}

export default Counter;
