import React from 'react';
import { v4 } from 'uuid';
import PostDetails from './PostDetails'
import NewPost from './NewPost';


class PostList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    title: 'title1',
                    body: 'this is our first body',
                    likes: 0,
                    id: v4()
                },
                {
                    title: 'title2',
                    body: 'this is o234body',
                    likes: 0,
                    id: v4()
                },
                {
                    title: 'title3',
                    body: 'this is 234ody',
                    likes: 0,
                    id: v4()
                },
            ]
        }
        this.addLike = this.addLike.bind(this);
        this.onNewPost = this.onNewPost.bind(this);
    }

    addLike(key) {
        for(let post of this.state.posts) {
            if(post.id === key) {
              post.likes++;
              let newState = Object.assign({}, this.state.posts, post);
              this.setState({newState});
            }
          }
        
    }

    onNewPost(title, body) {
        let newPost =   {
            title: title,
            body: body,
            likes: 0,
            id: v4(),
            date: Date()
        };
        console.log(newPost)
        let tempPosts = this.state.posts.slice();
        tempPosts.push(newPost);
        this.setState({posts: tempPosts });

    }

    render () {
        let tmpPosts = this.state.posts.slice();
        tmpPosts.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
        return (
            <div>
              {tmpPosts.map((post) =>
                        <PostDetails
                            key={post.id}
                            title={post.title}
                            body={post.body}
                            likes={post.likes}
                            date={post.date}
                            addLike={() => this.addLike(post.id)}
                        />
                        
                )}
                        <NewPost onNewPost={this.onNewPost}/>

            </div>
        )
    }
}

export default PostList;