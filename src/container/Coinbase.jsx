import MainLayout from "../layouts/MainLayout";

import {Route, Routes} from 'react-router-dom'
import Home from "../pages/Home/Home";
import FAQ from "../pages/FAQ/FAQ";

const Coinbase = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/faq" element={<FAQ/>}/>
            </Routes>
        </MainLayout>
    )
}
export default Coinbase