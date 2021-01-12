import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'

class App extends React.Component{
    state = { images: [] };

    //axios = 3rd party
    //fetch = built into modern browsers
    //async allows us to use await which is easier to read
    //axios on its own is a thenable promise
    onSearchSubmit = async (term) => {
        try {
            const response = await unsplash.get('/search/photos',{
                params: {
                    query: term 
                }
            })
            this.setState({ images: response.data.results });
        } catch(e) {
            console.log(e);
        }
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                {/* to handle passing state from child to parent, pass method as prop */}
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div>Found: {this.state.images.length} images </div>
            </div>   
        );
    }
}
export default App;