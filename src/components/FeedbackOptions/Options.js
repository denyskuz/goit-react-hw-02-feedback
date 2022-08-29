import { Component } from 'react'
import { shape, number, func } from 'prop-types';
import classes from './Options.module.css';

export default class Option extends Component {
    
    static propsTypes = {
        options: shape({
            good: number.isRequired,
            neutural: number.isRequired,
            bad: number.isRequired,
            onLeaveFeedback: func.isRequired
        })
    }
     handleLeaveFeedback = (id) => {
        this.props.onLeaveFeedback(id)   
    }
    render() {
        return (
            <div className={classes.options}>
                {
                    this.props.options && Object.keys(this.props.options).map(label => (
                        <button
                            type="button"
                            className={`${classes.btn} ${classes[label]}`}
                            key={label}
                            id={label}
                            onClick={()=> this.handleLeaveFeedback(label)}
                        >{label}
                        </button>
                    ))
                }
            </div>
        )
    }
}