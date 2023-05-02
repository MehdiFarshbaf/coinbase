import Header from "../components/Header/Header";

const MainLayout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
            <p>footer</p>
        </div>
    )
}
export default MainLayout