Header = React.createClass({  
  render() {
    return (
      <div className="header">
        <nav className="navbar">
          <a href='/' className="btn btn-success">Post</a>
          <a href='/submit' className="btn btn-info">Submit</a>           
        </nav>
      </div>
    )
  }
});