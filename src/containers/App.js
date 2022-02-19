import React, {Component} from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import Header from '../components/Header.js';
import ErrorBoundry from '../components/ErrorBoundry.js';


import { setSearchField, requestRobots } from '../actions.js';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    componentDidMount() {
        this.props.onRequestRobots();
    }

    render(){
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filtered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
        <div className='tc'>
            <Header />
            <SearchBox searchChange={ onSearchChange } />
            <Scroll>
            { isPending ? <h1>Loading...</h1> :
                <ErrorBoundry>
                <CardList robots={filtered}/>
                </ErrorBoundry>
            }
            </Scroll>
        </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App) //example of higher order functions/components