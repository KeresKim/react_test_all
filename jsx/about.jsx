const React = require('react')

// added Tool-tip utility. 
const Utiltip = require('./tooltip.jsx')

module.exports = function About() {
  return <div>
    <img src="image/ani-keres.jpg" width="100"/> 
    <ul>
      <li><h4> Name : Kiyoong Kim </h4></li>
      <li>Gen : Male </li>
      <li>Tel : 010.4079.xxxx </li>
      <li>Address : Anyang TaeYoung APT. </li>
      <li>Career : SW Engineer. </li>
      <li>Home Page : None </li>
      <li>Blog :  
      <a href="https://blog.naver.com/paijjang" target="_blank">
      https://blog.naver.com/paijjang</a></li>
      <li>Message: 
          <br/> Hi good to see you. <br/>
          17 Years of <Utiltip text="Most of time dedicated to Mobile phone development">
          Embedded Software</Utiltip> Career<br/>
          and Now Move to JavaScript <br/>
          Just hope to make a great programs of web applications <br/>
          and Android applications with JS.</li>
    </ul> 
  </div>
}