/**
 * This component renders the list of posts for home page
 */

Post = React.createClass({ 
  mixins: [ReactMeteorData],
  getMeteorData () {
  return {
    allPosts: Posts.find({}, {
    limit: 100, // TODO : pagination
    sort: { submitted: -1 }
  }).fetch()
  }
  }, 
  render() {

  if(this.data.allPosts.length == 0)
    return <p>No posts for now</p>
  
  let posts = this.data.allPosts.map(function (post) {
    var submittedDate = new Date(post.submitted);
    var formattedDate =  (submittedDate.getHours()) + ':' + ((submittedDate.getMinutes().toString().length == 1) ? ('0' + submittedDate.getMinutes()) : (submittedDate.getMinutes())) + ' ' + submittedDate.getDate() +'/'+ (submittedDate.getMonth()+1);
    return <PostItem
      key={post._id}
      _id={post._id}
      title={post.title}
      text={post.text}
      author={post.author}
      submitted={formattedDate}/>
  });
  return (
    <div className="posts page">
      {posts}
    </div>
  )
  
  }
});