import Header from "../src/components/Header"
import PictureCard from "./components/PictureCard"
import { getImagePaths } from "./components/GetImagePaths";
import Viewer from "./components/Viewer";

export default function ViewPics(props){
    const params = new URLSearchParams(window.location.search)
    const activity = params.get('activity')
    console.log("MAIN:"+params.get('activity'))

    return(
        <>
            <Header/>
            <Viewer activity={activity} />
        </>
    )
}