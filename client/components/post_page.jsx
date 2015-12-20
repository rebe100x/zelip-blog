/**
 * This component renders the post page.
 */
PostPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData () {
    return {
      postData: this.getData(),
    }
  },
  getData () {
    return Posts.findOne({_id:this.props._id})
  },
  render () {
    let post = this.data.postData;
   
    return (
      <div className="post-page page">
        <SinglePostItem
          _id={post._id}
          title={post.title}
          text={post.text}
          author={post.author}/>
      </div>
    );
  

  }
});