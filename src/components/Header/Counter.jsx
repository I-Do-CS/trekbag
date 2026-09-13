import useItemsContext from "../../hooks/useItemsContext";

function Counter() {
    const { stats } = useItemsContext();

    return (
        <div>
            <b>{stats.packed}</b> / {stats.total} items packed
        </div>
    );
}

export default Counter;
