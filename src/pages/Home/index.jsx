import Main from "pages/Main";
import { Providers } from "pages/Providers";
import { Operators } from "pages/Operators";
import { Header } from "components/Header/Header";
import { GlobalStyle } from "styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/providers" element={<Providers />} />
                <Route path="/operators" element={<Operators />} />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    )
}

export default Home