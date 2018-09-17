const React = require('react')
//const ReactDOM = require ('react-dom')

class MusicPlay extends React.Component {
    constructor(props) {
        //console.log("here clock -- constructor");  
      super(props)
      //this.launchClock()
      this.state = {musicState : "stop"}
    }
    MusicCtrl(){
        if(this.state.musicState == "stop"){
            this.state.musicState = "play";
            document.getElementById('music-flute').play()
        }else{
            this.state.musicState = "stop";
            document.getElementById('music-flute').pause()
        }
        return
    }

    
    render() {
        console.log('Rendering...music play ')
//src="./data/flute_c_long_01.wav"
      return <div>
        <h3> Music : Final Fantasy Main Theme </h3>
        <button className="btn btn-primary" onClick={()=>{this.MusicCtrl()}}>{this.state.musicState}</button>        
        <audio controls>
            <source src="./data/Final_Fantasy_Main_Theme.mp3" type="audio/mpeg" />
            //Your browser does not support the audio element.
        </audio>
<audio id="music-flute" src="./data/Final_Fantasy_Main_Theme.mp3" type="audio/mpeg" preload="auto"></audio>

      </div> 
      
    }
  }

module.exports = MusicPlay