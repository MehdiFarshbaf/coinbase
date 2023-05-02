import {useEffect} from "react";
import {changeTitlePage} from "../../helper/changeTitlePage";

const Home = () => {

    useEffect(() => {
        changeTitlePage("Home Page")
    }, [])
    return (
        <p>home page</p>
    )
}
export default Home