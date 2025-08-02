import PictureCard from "./PictureCard";
import { getImagePaths } from "./GetImagePaths";

export default function Viewer ({activity}) {
    console.log(activity);
    const paths = getImagePaths(activity);

    return (
        <>
            <p>{paths}</p>
        </>
    )
}