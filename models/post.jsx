Posts = new Mongo.Collection('posts');

Posts.allow({
  update (userId, post) { return ownsDocument(userId, post); },
  remove (userId, post) { return ownsDocument(userId, post); },
});

validatePost = function (post) {
  var errors = {};

  if (!post.title)
    errors.title = "Please fill in a title";

  if (!post.author)
    errors.title = "Please fill the author field";

  return errors;
}

Meteor.methods({
  postInsert (postAttributes) {

    var errors = validatePost(postAttributes);
    if (errors.title)
      throw new Meteor.Error('invalid-post', "You must set a title for your post");

    if (errors.author)
      throw new Meteor.Error('invalid-post', "You must set an author for your post");


    var post = _.extend(postAttributes, {
      submitted: new Date(),
    });

    var postId = Posts.insert(post);

    return {
      _id: postId
    };
  }
});