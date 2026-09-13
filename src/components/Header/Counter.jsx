import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

function Counter() {
    const { stats } = useContext(ItemsContext);

    return (
        <div>
            <b>{stats.packed}</b> / {stats.total} items packed
        </div>
    );
}

export default Counter;
