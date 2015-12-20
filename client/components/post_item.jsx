/**
 * This component render a post item for the post list and a single post item for the post view
 */
PostItem = React.createClass({
  render () {
    let url = `posts/${ this.props._id }`;
    return (
      <div className="post">
        <div className="post-content">
          <a href={url}>
            <h2>{this.props.title}</h2>
            <p className="date">posted by <b>{this.props.author}</b> at <b>{this.props.submitted}</b></p>
            <p className="blog">{this.props.text}</p>
          </a>
        </div>
      </div>
    );
  }
});

SinglePostItem = React.createClass({
  render () {
    return (
      <div className="post">
        <h2>{this.props.title}</h2>
        <p className="date">posted by <b>{this.props.author}</b></p>
        {this.props.text ?
          <div className="post-content">
            <p className="blog">{this.props.text}</p>
          </div>
          : ''
        }
        
      </div>
    );
  }
});