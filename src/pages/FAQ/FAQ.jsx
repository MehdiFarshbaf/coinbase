import {useEffect} from "react";
import {changeTitlePage} from "../../helper/changeTitlePage";

const FAQ = () => {

    useEffect(() => {
        changeTitlePage("FAQ Page")
    }, [])
    return (
        <p>faq page</p>
    )
}
export default FAQ