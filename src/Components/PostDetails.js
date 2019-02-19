import React from 'react';

export class PostDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false
        }
        this.showDetails = this.showDetails.bind(this)
    }

    showDetails() {
        this.setState({showDetails: !this.state.showDetails})
    }
    render() {

        
        return (
            <div>
        <ul>
        <li>{this.props.title}</li>
        <button onClick={this.showDetails}>Show Details</button>
        {
            this.state.showDetails &&
            <div>
                <li>{this.props.body}</li>
                <li>{this.props.likes}</li>
                <li>{this.props.date}</li>
            </div>
        }
        <button onClick={this.props.addLike}>Like</button>
        </ul>
        </div>
        )
        
    }
    
}
export default PostDetails