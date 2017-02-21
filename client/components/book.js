import React from 'react';
import People from './People.js'; 
export default class Book extends React.Component {
    constructor(props)
    {
        super(props);
    }
    render()
{
        return (<div>
<h1>{this.props.details.title}</h1>
<h2>{this.props.details.author}</h2>
{this.props.people}
</div>);
    }
}