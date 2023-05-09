import React from 'react';
import Counter from './Counter';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counts: {}
        }
        this.countClicks= this.countClicks.bind(this);
    }

countClicks(name) {
    this.setState(state => {
        state.counts[name]
        ? state.counts[name] += 1
        : state.counts[name] = 1;
        return state;
    })
}

    render() {
        return (
            <div>
            <Counter 
                name = "One"
                count = {this.state.counts.one} 
                onClick = {this.countClicks}/>
              <Counter 
                name = "One"
                count = {this.state.counts.one} 
                onClick = {this.countClicks}/>
                    <Counter 
                name = "Two"
                count = {this.state.counts.two} 
                onClick = {this.countClicks}/>
                    <Counter 
                name = "Three"
                count = {this.state.counts.three} 
                onClick = {this.countClicks}/>
            </div>
        );
    }
}