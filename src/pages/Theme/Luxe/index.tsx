import ScrollDown from "../../../modules/ScrollDown";

const Luxe = () => {
    return (
        <div className={"theme"}>
            <div className={"top-page top-page-luxe"}>
                <img src={"/images/luxe.jpg"}/>
                <div className={"top-page-text"}>
                    <p>Luxury</p>
                </div>
            </div>
            <div className={"scroll-down"}>
                <ScrollDown/>
            </div>
        </div>
    )
}
export default Luxe;