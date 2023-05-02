import {useEffect} from "react";
import {changeTitlePage} from "../../helper/changeTitlePage";

const Home = () => {

    useEffect(() => {
        changeTitlePage("Home Page")
    }, [])
    return (
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
    )
}
export default Home