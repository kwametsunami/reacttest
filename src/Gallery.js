import Picture from "./Picture"

const Gallery = (props) => {
console.log(props)
    return (
        <section className="gallery">
            <h2>Gallery</h2>

            <ul>
                {/* we are going to map through the array of art within the props object */}
                {/* for each object within the array, we will return a Picture component */}
                {/* and pass down the image and title for that specific object which the Picture component will then render to the page */}

                {
                    props.arrayOfArt.map( (artObject) => {
                        // for each object within the array, we will return a Picture component

                        // and pass down the iamge and title for that specific object which the Picture component will then render to the page
                        return <Picture artInfo={artObject} key={artObject.id}/>
                    })
                }
            </ul>
        </section>
    )
}

export default Gallery