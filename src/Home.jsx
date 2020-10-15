import React from 'react';
import { Router, Link} from '@reach/router'
import Episode from './Episode';

class Home extends React.Component {
    state = {
        getNewEp: false,
        buttonClicked: false
    }

    setNewEpFalse = () => {
        this.setState({getNewEp : false})
    }

    handleClick = () => {
        if(this.state.buttonClicked) {
            this.setState({getNewEp: true})
        } else {
            this.setState({buttonClicked: true})
        }
    }

    render() {
        return (
        <div>
            <Link to="/episode">
            <button onClick={this.handleClick}>Get a Random Episode</button>
            </Link>
            {this.state.buttonClicked ? <Router>
                <Episode id="episodeBox"path='/episode' getNewEp={this.state.getNewEp} setNewEpFalse={this.setNewEpFalse}/>
            </Router> : <div><img src="bob.gif" alt="bob standing on rakes"/></div>}
            
        </div>
        )
        
    }
}

export default Home