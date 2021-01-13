import React, { Component } from 'react'

export default class ImageCard extends Component {
    
    //react refs gives you access to single DOM element
    //we create the ref instance inside constructor
    constructor(props){
        super(props);
        this.state = {spans: 0}
        this.imageRef = React.createRef();
    }

    componentDidMount(){
        //below prints zero because console log happens before image load finishes
        //console.log(this.imageRef.current.clientHeight).
        //So to get around wait fro load event and implement callback
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10); // 10 from ImageList.css
        this.setState({spans})
    }

    render() {
        //whenever you are repeating things like this.props.image, just destructure
        const {description, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    // ref tag is standard html
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        )
    }
}
