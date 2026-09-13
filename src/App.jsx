import { BackgroundHeading, Footer, Header, ItemList, Sidebar } from "./components";

function App() {
    return (
        <>
            <BackgroundHeading />

            <main>
                <Header />
                <ItemList />
                <Sidebar />
            </main>

            <Footer />
        </>
    );
}

export default App;
