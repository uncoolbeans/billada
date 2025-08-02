import './form.css'
export default function Form (){
    

    return (
        <>
            <header>
                <div className="title-div">
                    <img src = "../src/assets/heart.svg" alt = "heart" className="heart-img" ></img>
                    <span>bill's and ada's journal</span>
                </div>
            </header>
            <form>
                <h2 className='text-xl font-sans font-bold'>Upload Photos</h2>

                <input type = "file" name = "picture" required accept="image/*" multiple = "multiple"/>
                <button type = "submit">Submit</button>
            </form>
        </>
    )
}
