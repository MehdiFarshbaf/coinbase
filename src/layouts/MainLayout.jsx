const MainLayout = ({children}) => {
    return (
        <div>
            <p>header</p>
            {children}
            <p>footer</p>
        </div>
    )
}
export default MainLayout