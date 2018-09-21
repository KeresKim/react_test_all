const React = require('react')
const {Link} = require('react-router')

class Content extends React.Component {
  render() {
    return (
      <div>
        <h1>Keres Menu</h1>        
        <div className="navbar navbar-default">
          <ul className="nav nav-pills navbar-nav ">
            <li>
              <Link to="/login" activeClassName="active">
                Log-in
              </Link>
            </li>                        
            <li className={(this.context.router.isActive('/movieInfo'))? 'active': ''}>
              <Link to="/movieInfo" activeClassName="active">
                Movie Information
              </Link>
            </li>
            <li className={(this.context.router.isActive('/store'))? 'active': ''}>
              <Link to="/store" activeClassName="active">
                Shopping Mall
              </Link>
            </li>
            <li className={(this.context.router.isActive('/posts'))? 'active': ''}>
              <Link to="/posts" activeClassName="active">
                Blog Sites
              </Link>
            </li>
            <li className={(this.context.router.isActive('/contact'))? 'active': ''}>
              <Link to="/contact" activeClassName="active">
                Contact Us
              </Link>
            </li>
            
            <li className={(this.context.router.isActive('/about'))? 'active': ''}>
              <Link to="/about" activeClassName="active">
                About Keres
              </Link>
            </li>
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }
}
Content.contextTypes = {
  router: React.PropTypes.object.isRequired
}
module.exports = Content