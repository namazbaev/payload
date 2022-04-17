import { Header } from "components/Header/Header";
import { GlobalStyle } from "styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";
import Provider from "components/Provider";

const Home = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/providers" element={<Provider />} />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    )
}

export default Home