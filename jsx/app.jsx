const React = require('react')
const ReactDOM = require ('react-dom')
const ReactRouter = require('react-router')
const History = require('history')
// keres redux
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const reducers = require('./movieInfo.jsx')

const Content = require('./content.jsx')
const About = require('./about.jsx')
const Contact = require('./contact.jsx')
const Login = require('./login.jsx')
const Post = require('./post.jsx')
const Posts = require('./posts.jsx')
const movieInfo = require('./movieInfo.jsx')
const {withRouter} = require('react-router')

// added digital clock 
const DigitalClock = require('./clock.jsx')
// added Tool-tip utility. 
const Utiltip = require('./tooltip.jsx')

const posts = require('../posts.js')

const movieApp = require('./components/app/app.js')
const movieList = require('./components/movies/movies.js')
const movieFocus = require('./components/movie/movie.js')

// shopping mall components
const storeApp = require('./store/app.jsx')
const storeList = require('./store/index.jsx')
const Cart = require('./store/cart.jsx')
const Checkout = require('./store/checkout.jsx')
const Product = require('./store/product.jsx')


const PRODUCTS = [
  { id: 0, src: 'jsx/store/images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
  { id: 1, src: 'jsx/store/images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
  { id: 2, src: 'jsx/store/images/expressapiref-cover.jpg', title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
  { id: 3, src: 'jsx/store/images/reactquickly-cover.jpg', title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'},
  { id: 4, src: 'jsx/store/images/fullstack-cover.png', title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'}
]

let cartItems = {}
const addToCart = (id) => {
  if (cartItems[id])
    cartItems[id] += 1
  else
    cartItems[id] = 1
}

let IsModalOn = {}
const setStoreModal = (isOn) => {
    console.log("modalOn setting == "+isOn);
    IsModalOn[0] = isOn;
}
const setReturnPath = (rPath) => {
  console.log("Return path setting == "+rPath);
  IsModalOn[1] = rPath;
}
let { Router,
  Route,
  IndexRoute,
  Link
} = ReactRouter

let hashHistory = ReactRouter.useRouterHistory(History.createHashHistory)({
  queryKey: false
})


ReactDOM.render((
  <span>
    <div>
        <Provider store={createStore(reducers)}>
          <Router history={hashHistory}>

              <Route path="/" component={Content} >
                  <Route path="/about" component={About} />
                  <Route path="/posts" component={Posts} posts={posts}/>
                  <Route path="/posts/:id" component={Post}  posts={posts}/>
              
                  <Route path="/store" component={storeApp} setStoreModal={setStoreModal}
                          IsModalOn={IsModalOn} cartItems={cartItems} > 
                      <IndexRoute component={storeList} products={PRODUCTS} 
                          setStoreModal={setStoreModal} setReturnPath={setReturnPath}/>
                  
                      <Route path="/store/products/:id" component={Product}
                          addToCart={addToCart}
                          products={PRODUCTS} />
                      <Route path="/store/cart" component={Cart}
                          cartItems={cartItems} products={PRODUCTS}/>                  
                  </Route>

                  <Route path="/store/checkout" component={Checkout}
                      cartItems={cartItems} products={PRODUCTS}/>
              
                  <Route path="/movieInfo" component={movieApp} >
                      <IndexRoute component={movieList} />
                      <Route path="/movieInfo/list" component={movieList} />
                      <Route path="/movieInfo/list/:id" component={movieFocus} />
                  </Route>

                  <Route path="/contact" component={withRouter(Contact)} />
            </Route>

            <Route path="/login" component={Login}/>
          </Router>
        </Provider>
    </div>
    <div>
      <br></br>
      <h6>Digital clock Here </h6>
      <DigitalClock></DigitalClock>
    </div>
  </span>
), document.getElementById('content'))
