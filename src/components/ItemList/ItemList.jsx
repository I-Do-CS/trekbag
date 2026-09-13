import Select from "react-select";
import EmptyView from "./EmptyView";
import Item from "./Item";
import { SORT_OPTIONS } from "../../constants";
import { useMemo, useState } from "react";
import useItemsContext from "../../hooks/useItemsContext";

function ItemList() {
    const { items, operations } = useItemsContext();
    const itemsIsEmpty = items.length === 0;
    const sortOptions = [...SORT_OPTIONS];
    const [sortBy, setSortBy] = useState(sortOptions[0].value);
    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            if (sortBy === "default") return 0;
            if (sortBy === "packed") return b.packed - a.packed;
            if (sortBy === "unpacked") return a.packed - b.packed;
        });
    }, [items, sortBy]);

    const handleSortChange = (option) => {
        setSortBy(option.value);
    };

    return (
        <>
            <ul className="item-list">
                {itemsIsEmpty && <EmptyView />}
                {!itemsIsEmpty && (
                    <section className="sorting">
                        <Select
                            onChange={handleSortChange}
                            defaultValue={sortOptions[0]}
                            options={sortOptions}
                        />
                    </section>
                )}
                {!itemsIsEmpty &&
                    sortedItems.map((item) => (
                        <Item key={item.id} item={item} operations={operations} />
                    ))}
            </ul>
        </>
    );
}

export default ItemList;
