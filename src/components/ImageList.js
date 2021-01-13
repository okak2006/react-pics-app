import React from 'react';

const ImageList = (props) => {
    //map returns arr
    //here we are storing img react elements in an arr 
    const images = props.images.map(
        //upon re-render React needs to compare and contrast existing DOM and new DOM to be rendered
        //in doing so keys are used for performance enhancements
        image => <img key={image.id} src={image.urls.regular} alt={image.description}/>
        //better syntax
        //({description, id, urls}) => {return <img alt={descrption} key={id} src={urls.regular} />
    )
    //we can render each items in arr like this
    return <div> { images } </div>
}

export default ImageList;