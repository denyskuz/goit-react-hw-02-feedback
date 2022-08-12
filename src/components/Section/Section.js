import { Component } from 'react';
import { string, element } from 'prop-types';
import classes from './Section.module.css';

export default class Section extends Component {
    static propTypes = {
        children: element.isRequired,
        title: string.isRequired
    };
    render() {
        return (
            <div className={classes.section}>
                <h2 className={classes.title}>{this.props.title}</h2>
                <div className={classes.content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}