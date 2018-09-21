const React = require('react')
const {
    Link
} = require('react-router')

const storeApp = require('./app.jsx')

class storeList extends React.Component {
    constructor(props) {
        //console.log("here clock -- constructor");  
      super(props)
      this.state = {returnTo : '/store' }
      this.handleModalnPath= this.handleModalnPath.bind(this);
    }

    handleModalnPath(){
      this.props.route.setStoreModal("true");
      this.props.route.setReturnPath(this.props.location.pathname);
    }

    render() {
      console.log("rendering store list ===> "+this.props.location.pathname);
      //console.log(storeApp.PRODUCTS);
      return (
        <div>
          <p><Link to="/store/cart" className="btn btn-danger">Cart</Link></p>
          <div>
            {(this.props.route.products).map(picture => (
              <Link key={picture.id}
                to={{pathname: `/store/products/${picture.id}` }
                } onClick={this.handleModalnPath} >
                <img style={{ margin: 10 }} src={picture.src} height="100" />
              </Link>
            ))}
          </div>
                    
        </div>
      )
    }
}

module.exports = storeList  