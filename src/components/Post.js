import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
        src="https://peopledotcom.files.wordpress.com/2018/11/prince-harry.jpg?crop=0px%2C0px%2C1200px%2C630px&resize=1200%2C630"
        alt="prince"
        name="Harry_the_prince"/>
        <img src={this.props.src} alt={this.props.alt}/>
        <div className="post__name">
          some account
        </div>
        <div className="post__descr">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut ullam autem ipsa fugit alias, quibusdam perspiciatis voluptatibus possimus quos. Ad cupiditate corrupti porro vel beatae itaque tenetur nisi modi sunt deleniti! Fuga id exercitationem rem consequatur mollitia nesciunt quam ipsum quas iste! Dicta amet vitae eos. Deserunt sit veniam ab reiciendis aperiam mollitia molestias odio commodi quas eius repellat, nostrum perspiciatis quae facilis a voluptate nisi optio minus? Iusto, ratione perspiciatis? Atque, rem eos incidunt sunt ipsa non! Aspernatur veniam, commodi ullam doloribus repellendus quos non facilis dolorem tempore, odit consequatur voluptatem corporis, harum ut quam aut cumque nisi numquam.
        </div>
      </div>
    )
  }
}