function ImageForm(prop){
    return (
        <div>
           <h1>The Image Place</h1>
            Enter the URL of a photo to add it to your collection:
            <form>
               <input type="text">
               </input> 
               <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default ImageForm;