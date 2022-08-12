import { Component } from 'react'
import { string } from 'prop-types';
import classes from './Notification.module.css';

export default class Notification extends Component {
    
    static propsTypes = {
        message: string.isRequired
    }
    render() {
        return (
            <p className={classes.message}>{this.props.message}</p>
        )
    }
}