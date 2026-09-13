import { useContext } from "react";
import ItemsContext from "./ItemsContext";

function useItemsContext() {
    const context = useContext(ItemsContext);
    return context;
}

export default useItemsContext;
