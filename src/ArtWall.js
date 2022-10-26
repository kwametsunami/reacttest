// import the Hooks we need to accomplish our logic!
import axios from "axios";
import { useState, useEffect } from "react";

import Gallery from "./Gallery";

const ArtWall = () => {

    console.log('Artwall is rendering')
    // initialize a state to keep track of whether the Gallery is visible or not
    const [ isGalleryVisible, setIsGalleryVisible ] = useState(false)

    // initialize a state for the API data from Rijksmuseum 
    const [ art, setArt ] = useState([]);

    // call the Rijksmuseum API once the component has been mounted to the DOM
        // aka run a side effect!
    useEffect( () => {
        console.log("side effect is running")

        // using axious let's make a request to our API
        axios({
            url: 'https://www.rijksmuseum.nl/api/en/collection',
            // add our URL parameters through this object
            params: {
                imgonly: true,
                key: 'eN79qCiZ',
                toppieces: true
            }
        }).then ((art) => {
            // once the data is returned from the API, let's save it within state!
            setArt(art.data.artObjects);
        })
        
    }, [])

    // define an event handler which updates the 
    const handleClick = () => {
        setIsGalleryVisible(!isGalleryVisible);
    }

    return (
        <section>
            <h2>{
                    isGalleryVisible
                    ? 'Wow, gorgeous'
                    : 'Would you like to see some art'
                }
            </h2>
            <button onClick={handleClick}>
                {
                    isGalleryVisible
                    ? `get rid of this!`
                    : 'show me the art!'
                }
                </button>


            {
                isGalleryVisible
                ? <Gallery arrayOfArt={art} />
                : null
            }
        </section>
    )
}

export default ArtWall;