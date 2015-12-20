FlowRouter.route('/', {  
  name: "home",
  subscriptions () {
        this.register("posts", Meteor.subscribe("posts"));
    },
  action() {
  	ReactLayout.render(MainLayout, { content: <Post /> });
  }
});

FlowRouter.route('/submit', {
  name: "postSubmit",
  subscriptions () {
        this.register("posts", Meteor.subscribe("posts"));
    },
  action () {
      ReactLayout.render(MainLayout,{ content: <PostSubmit /> });
  }
});
FlowRouter.route('/posts/:_id', {
    name: "postPage",
    subscriptions (params) {
        this.register("post", Meteor.subscribe("post", params._id));
    },
    action (params) {
        ReactLayout.render(MainLayout, {content: <PostPage _id={params._id}/>});
    }
});