import "./index.css";
import ScrollDown from "../../../modules/ScrollDown";

const Japan = () => {
    return (
        <div className={"theme"}>
            <div className={"top-page top-page-japan"}>
                <img src={"/images/japan.jpg"}/>
                <div className={"top-page-text"}>
                    <p>Japan</p>
                </div>
                <div className={"scroll-down"}>
                    <ScrollDown/>
                </div>
            </div>
            <div className={"block-moodboard"}>
                <h2 className={"moodboard-h2-japan"}>Examples of moodboard</h2>
                <img src={"/images/moodboard-jap.jpg"} />
            </div>
        </div>
    )
}
export default Japan;