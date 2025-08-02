import "./Header.css"
import Nav from "./Nav"

export default function Header () {
    return (
        <>
            <header>
                <div className="title-div">
                    <img src = "../src/assets/heart.svg" alt = "heart" className="heart-img" ></img>
                    <span>bill's and ada's journal</span>
                </div>
            </header>
            <Nav/>
        </>
    )
}