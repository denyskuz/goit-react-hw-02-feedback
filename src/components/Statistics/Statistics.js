import { Component } from 'react'
import { number } from 'prop-types';
import classes from './Statistics.module.css';

export default class Statistics extends Component {
    
    static propsTypes = {
        good: number.isRequired,
        neutural: number.isRequired,
        bad: number.isRequired,
        total: number.isRequired,
        positivePercentage: number.isRequired
    }
    render() {
        return (
            <ul className={classes.container}>
                {
                    Object.entries(this.props).map(label => <li key={label}>{`${label[0]}: ${label[1]}`}</li>)
                }
            </ul>
        )
    }
}