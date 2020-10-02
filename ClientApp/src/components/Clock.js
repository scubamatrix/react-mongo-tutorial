/**
 * State and Lifecycle
 * Adding Local State to a Class
 * Adding Lifecycle Methods to a Class
 * https://reactjs.org/docs/state-and-lifecycle.html
 *
 * Using State Correctly
 *
 * There are three things you need to know about setState():
 *
 * 1. Do Not Modify State Directly, use setState().
 *
 * 2. State Updates May Be Asynchronous
 *
 *    This means that this.props and this.state may be updated asynchronously,
 *    so you should not rely on their values for calculating the next state.
 *
 * 3. State Updates are Merged
 */

import React, { Component } from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // This runs after the component output has been rendered to the DOM.
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    // We need to clear that timer whenever the DOM produced
    // by the Clock is removed.
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // We implement a method that the component will run every second.
    // It uses this.setState() to schedule updates to the component local state.
    tick() {
        // React knows the state has changed, and calls the render() method
        // to learn what should be on the screen. Now this.state.date in the
        // render() method will be different, and so the render output will
        // include the updated time. React updates the DOM accordingly.
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;
