function ImageItem(props){
    return (
        <li>
                <img src={props.loc} alt='' />
                <p>{props.caption}</p>
        </li>
    )
}

export default ImageItem;