import ScrollDown from "../../../modules/ScrollDown";

const Street = () => {
    return (
        <div className={"theme"}>
            <div className={"top-page top-page-street"}>
                <img src={"/images/street.jpg"}/>
                <div className={"top-page-text"}>
                    <p>Street</p>
                </div>
            </div>
            <div className={"scroll-down"}>
                <ScrollDown/>
            </div>
        </div>
    )
}
export default Street;