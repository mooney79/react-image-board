import ImageItem from "./ImageItem";

function ImageList(props){
    const ImagePane = props.photos.map(photo => <ImageItem key={photo.id} {...photo}/>);
    // {console.log(ImagePane)};
    return(
        <ul>
            {ImagePane};
        </ul>    
    )

}

export default ImageList;