import { useContext } from "react";
import ItemsContext from "../contexts/ItemsContext";

function useItemsContext() {
    const context = useContext(ItemsContext);

    if (!context) {
        throw new Error("useItems Context must be used within an ItemsContextProvider");
    }

    return context;
}

export default useItemsContext;
