import { BackgroundHeading, Footer, Header, ItemList, Sidebar } from "./components";
import ItemsContextProvider from "./contexts/ItemsContextProvider";

function App() {
    return (
        <>
            <BackgroundHeading />

            <main>
                <ItemsContextProvider>
                    <Header />
                    <ItemList />
                    <Sidebar />
                </ItemsContextProvider>
            </main>

            <Footer />
        </>
    );
}

export default App;
