import "./index.css";
import {useNavigate} from "react-router-dom";
// import {Grid} from "@mui/material";

const Home = () => {
    const navigate = useNavigate();
    const openRules = () => {
        window.open("/ressources/rules.pdf");
    }
    console.log("ok");

    return (
        <div>
            <div className={"block-rules"}>
                <div className={"rules"}>
                    <h2 className={"title-home"}>Rules</h2>
                    <p>click <span onClick={openRules}>here</span> <br/>
                        to see the rules of the MoodCraft board game
                    </p>
                </div>
            </div>
            <h2 className={"title-home"}>Themes moodboard</h2>
            <div className={"block-images"}>
                <div className={"images"}>
                    {/*<Grid container spacing={1} justifyContent={"center"} sx={{width: "80%"}}>*/}
                    {/*    <Grid item xs={12} sm={12} md={6} lg={4}>*/}
                    <div className={"block-image"} onClick={() => navigate("/theme/japan")}>
                        <img src={"/images/japan.jpg"}/>
                        <div className={"block-image-text japan"}>
                            <p>Japan</p>
                        </div>
                    </div>
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6} lg={4}>*/}
                    <div className={"block-image"} onClick={() => navigate("/theme/street")}>
                        <img src={"/images/street.jpg"}/>
                        <div className={"block-image-text street"}>
                            <p>Street</p>
                        </div>
                    </div>
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6} lg={4}>*/}
                    <div className={"block-image"} onClick={() => navigate("/theme/luxe")}>
                        <img src={"/images/luxe.jpg"}/>
                        <div className={"block-image-text luxe"}>
                            <p>Luxury</p>
                        </div>
                    </div>
                    {/*</Grid>*/}
                    {/*<Grid item xs={12} sm={12} md={6} lg={4}>*/}
                    <div className={"block-image"} onClick={() => navigate("/theme/future")}>
                        <img src={"/images/future.jpg"}/>
                        <div className={"block-image-text future"}>
                            <p>Future</p>
                        </div>
                    </div>
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                </div>
            </div>
        </div>
    )
}

export default Home;