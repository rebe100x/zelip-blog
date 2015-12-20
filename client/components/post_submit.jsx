
/**
 * This component renders a form of two input and a button to submit a post
 *
 */
PostSubmit = React.createClass({ 

 
  getInitialState () {
      return {
          titleValue: "",
          errorMsg: "",
          errorClass: ""   
      }
  },

  formSubmition (event) {
    event.preventDefault();
    var post = {
      title: event.target.title.value,
      text: event.target.text.value,
      author: event.target.author.value,
    };


    if (!post.title || !post.author) {
    	this.setState({
      	errorMsg: (!post.title)? "Please provide a title to your post !" : "Please provide a author to your post !",
        errorClass: "has-error"
      });
    return;
    } else {
      this.setState({
        errorMsg: "",
        errorClass: ""
      });
		}
      
    

    Meteor.call('postInsert', post, function (error, result) {
      // display the error to the user and abort
      if (error)
          return false;
      else  
      	FlowRouter.go(`/posts/${ result._id }`);
    });
  },

  render() {
  		let errorClassName = "form-group " + this.state.errorClass;
	    return (
	    	<div className={errorClassName}>
	        <form className="main form page" onSubmit={this.formSubmition}>
	        	<h1>Post message</h1>
	          <PostInput
	            title={"Title"}
	            placeholder={"Title"} />
	          <PostInputTextarea
	            title={"Text"}
	            placeholder={"Text"} />
	          <PostInput
	            title={"Author"}
	            placeholder={"Your nickname"} />
	            <input type="submit" value="Submit" className="btn btn-warning"/>
	          </form>
	        <span className="help-block">{this.state.errorMsg}</span>
	        </div>
      );
    
  }
});


PostInput = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string.isRequired
    },
    render () {

        return (
            <div className='form-group'>
                
                <div className="controls">
                    <input
                        name={this.props.title.toLowerCase()}
                        id={this.props.title.toLowerCase()}
                        type="text"
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        className="form-control" 
                        autocomplete="none" />                    
                </div>
            </div>
        );
    }
});

PostInputTextarea = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        placeholder: React.PropTypes.string.isRequired
    },    
    render () {

        return (
            <div className='form-group'>
                
                <div className="controls">
                    <textarea
                        name={this.props.title.toLowerCase()}
                        id={this.props.title.toLowerCase()}
                        placeholder={this.props.placeholder}
                        value={this.props.value}
                        className="form-control"
                        />
                </div>
            </div>
        );
    }
});