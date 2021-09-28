// import ImageItem from "./ImageItem";

function ImageList(props){
    // const imagePane = props.photos.map(photo => <ImageItem key={photo.id} {...photo}/>);
    // {console.log(ImagePane)};

    const imagePane2 = props.photos.map(photo => {return (
        
        <li key={photo.id}>
            <img src={photo.loc} alt='' />
            <p>{photo.caption}</p>
        </li>
    )});

    // function imageItem(photo){
    //     return(<li>
    //         <img src={props.loc} alt='' />
    //         <p>{props.caption}</p>
    //     </li>
    //     )
    // }

    return(
        <ul>
            {imagePane2}
        </ul>    
    )

}

export default ImageList;