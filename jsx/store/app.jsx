const React = require('react')
//const ReactDOM = require('react-dom')
const Modal = require('./modal.jsx')


const Heading = () => {
  return <h1>Nile Book Store</h1>
}

class storeApp extends React.Component {
  constructor(props) {
      //console.log("here clock -- constructor");  
    super(props)
    this.state = {isModal : '0'}    
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.route.IsModalOn[0] =="true") 
        console.log("component will receive Props=== "+ this.props.route.IsModalOn[0] );
    else
        console.log("component will ERROR=== "+ this.props.route.IsModalOn[0] );


    if (this.isModal=="true" ) {
      this.previousChildren = this.props.children
    }
  }

  render() {    
    console.log('storeApp rendering == > : '+ this.props.route.IsModalOn[1]);
    console.log('location path == > : '+ this.props.location.pathname);
    
    if(this.props.location.pathname == this.props.route.IsModalOn[1]){
      this.props.route.setStoreModal("false");
    }
    return (
      <div className="well">
        <Heading/>
        <div>        
          {(this.props.route.IsModalOn[0] =="true")?this.previousChildren:this.props.children }
          {/*(this.isModal)?this.previousChildren:this.props.children */}
          {/* {this.props.children} */}
          {(this.props.route.IsModalOn[0]=="true")?
            <Modal isOpen={true} 
            returnTo={this.props.route.IsModalOn[1] }>
              {this.props.children}
            </Modal> : ''
          }
                          
        </div>
                              
        
      </div>
    )
  }
}
module.exports = storeApp