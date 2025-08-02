import "./Card.css"

export default function Card ({info}) { //info is an object
    console.log(info)

    const src = info.img.src
    console.log(src)
    
    return (
        <div className="card-div">
            <button className="fill-div" type="submit" name="activity" value = {info.img.alt}>
            <div className="img-container">
                <img src = {src} alt = "camp" className="card-img"></img>
            </div>

            <div className="info-div">
                <div className="location-div">
                    <img src = "./src/assets/marker.svg" className="marker-img"/>
                    <p>{info.location}</p>
                </div>

                <div className="ml-3">
                    <h1 className="text-2xl font-bold">{info.activity}</h1>
                    <h3 className="text-left italic">{info.date}</h3>

                    <p className="mt-5 text-left block">Click card to view photos</p>

                </div>
            
            </div>
            </button>
        </div>
    )
}