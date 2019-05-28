import React, {Component} from 'react';
import User from './User';
import InstaService from '../services/InstaService';
import ErrorMessage from './ErrorMessage';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,      // === posts: posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {name, altname, photo, src, alt, descr, id} = item;

            return (
                <div key={id} className="post">
                    <User 
                        src={photo}
                        alt={altname}
                        name={name}
                        min/>
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            );
        })
    }

    render() {
        const {posts, error} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        const items = this.renderItems(posts);

        return (
            <div className="left">
                {items}
                {/* <Post alt="nature" src="https://i.ytimg.com/vi/XPjn2VexgMw/maxresdefault.jpg"/>
                <Post alt="nature" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg"/> */}
            </div>
        );
    }
}