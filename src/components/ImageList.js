import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList = (props) => {
    //map returns arr
    //here we are storing img react elements in an arr 
    const images = props.images.map(
        //upon re-render React needs to compare and contrast existing DOM and new DOM to be rendered
        //in doing so keys are used for performance enhancements
        image => <ImageCard key={image.id} image={image}/>
        //better syntax
        //({description, id, urls}) => {return <img alt={descrption} key={id} src={urls.regular} />
    )
    //we can render each items in arr like this
    return <div className="image-list"> { images } </div>
}

export default ImageList;