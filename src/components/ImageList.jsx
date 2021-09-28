import ImageItem from "./ImageItem";

function ImageList(props){
    const imagePane = props.photos.map(photo => <ImageItem key={photo.id} {...photo}/>);
    // {console.log(ImagePane)};

    // function imageItem(photo){
    //     return(<li>
    //         <img src={props.loc} alt='' />
    //         <p>{props.caption}</p>
    //     </li>
    //     )
    // }

    return(
        <ul>
            {imagePane};
        </ul>    
    )

}

export default ImageList;