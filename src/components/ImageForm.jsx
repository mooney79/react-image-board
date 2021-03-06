import {useState} from 'react';

function ImageForm(prop){

    const [loc, setLoc] = useState('');
    const [caption, setCaption] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        // const newPhoto = {loc, caption}
        prop.addPhoto(loc, caption);
        setLoc('');
        setCaption('');
    }

    function handleNewLoc(event){
        setLoc(event.target.value);
    }

    function handleNewCaption(event){
        setCaption(event.target.value);
    }





    return (
        <form onSubmit={handleSubmit}>           
            {/* <label htmlFor="loc">Enter the URL of a new meme to add it to the collection:</label> */}
            <input id="loc" name="loc" type="text" value={loc} onChange={handleNewLoc} autoComplete="off" placeholder="New Meme URL:"/> <br/>
            {/* <label htmlFor="caption"> Don't forget the caption! </label> */}
            <input id="caption" name="caption" type="text" value={caption} onChange={handleNewCaption} autoComplete="off" placeholder="Enter your caption here:"/> <br/>
            <button id="addPhotoButton"type="submit"><i className="far fa-file-image"></i> &nbsp; ADD A MEME</button>



        </form>
    )
}

export default ImageForm;