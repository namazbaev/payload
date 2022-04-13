import Form from "pages/Form";
import { Header } from "components/Header/Header";
import { GlobalStyle } from "styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "pages/Main";

const Home = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/main" element={<Form />} />
            </Routes>
            <GlobalStyle />
        </BrowserRouter>
    )
}

export default Home