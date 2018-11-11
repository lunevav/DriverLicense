import React, {Component} from 'react';

class Clock extends Component {
    constructor(){
        super();
        this.state={
            realTime: this.getRealTime()
        }
    }

    componentWillMount() {
        setInterval(() => {
            this.setState({ realTime: this.getRealTime() })
        }, 1000);
    }

    getRealTime = () => {
        const date = new Date();
        //кровь из глаз
        const realTime = `${date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`}:${date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`}`
        return realTime;
    }

    render() {
        console.log('[Clock][Render]');

        return (
            <div>
                {this.state.realTime}
            </div>
        );
    }
}

export default Clock;


