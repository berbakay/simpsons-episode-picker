import React from 'react';
import { Router, Link} from '@reach/router'
import Episode from './Episode';

class Home extends React.Component {
    state = {
        getNewEp: false,
        buttonClicked: false,
        goodEpisode: undefined
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

    handleBadClick = () => {
        if(this.state.buttonClicked) {
            this.setState({getNewEp: true, goodEpisode: 'false'})
        } else {
            this.setState({buttonClicked: true, goodEpisode: 'false'})
        }
    }

    handleGood = (event) => {
        console.log(this.state.goodEpisode)
        if(this.state.goodEpisode === undefined) {
            this.setState({goodEpisode: event.target.value})
        } else if (this.state.goodEpisode === 'true') {
            this.setState({goodEpisode: undefined})
        }
    }

    render() {
        return (
        <div><label>Do You Want a good episode?</label>
            <input type="checkbox" value="true" onClick={this.handleGood}/>
            <Link to="/episode">
            <button className="goodButton" onClick={this.handleClick}>Get a Random Episode</button>
            <button className="badButton" onClick={this.handleBadClick}>Do Not Touch, Willie</button>
            </Link>
            {this.state.buttonClicked ? <Router>
                <Episode id="episodeBox"path='/episode' getNewEp={this.state.getNewEp} setNewEpFalse={this.setNewEpFalse} goodEpisode={this.state.goodEpisode}/>
            </Router> : null }
            
        </div>
        )
        
    }
}

export default Home