import React from 'react'

class SearchBar extends React.Component{

    state = {term: ''}
    //class-based don't need to say something like const onInputChange = () => {}
    
    onFormSubmit = (event) => {
        event.preventDefault();
        //console.log(this.state.term) yeilds an error because 'this' is undefined
        //body of classes are always executed in strict mode.
        //in strict mode, when the value of 'this' is not set when entering an execution context, it remains undefined
        //arrow function automatically binds this 
        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        {/* onChange={this.onInputChange()} would call everytime on render. onInputChange just calls when input changes */}
                        {/* we can also do onChange={(e)=>console.log(e.target.value)} */}
                        <input 
                            type="text"
                            value={this.state.term} 
                            onChange={(e)=>this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;