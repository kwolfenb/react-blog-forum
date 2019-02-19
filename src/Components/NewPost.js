import React from 'react';

const NewPost = (props) => {
    let _title = null;
    let _body = null;

    function handleNewPost(event) {
        event.preventDefault();
        console.log(_title.value, _body.value)
        props.onNewPost(_title.value, _body.value)
        _title.value = '';
        _body.value = '';
    }

    return(
        <div>
    <h1>Enter a new post:</h1>
    <form onSubmit={handleNewPost}>
        <input
            type='text'
            id='title'
            placeholder='Post Title'
            ref={(input) => {_title=input}}
        />
        <br />
        <textarea
            type='text'
            id='body'
            placeholder='Post Body'
            ref={(input) => {_body=input}}
        />
        <br />
        <button type='submit'>Submit</button>
    </form>
    </div>
    );
}

export default NewPost;