import { Component } from "react";

export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {timeSetMin:10,timeLeftSec:0, pause:false};

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.pause = this.pause.bind(this);
        this.handleTimeSetMin = this.handleTimeSetMin.bind(this);

    }

    componentDidMount(){
        this.startTimer();        
    }

    componentWillUnmount() {
       this.stopTimer();
      }

    startTimer(){
        this.stopTimer();
        this.timer = setInterval(
            () => this.tick(),1000
        );
       
    }

    stopTimer(){
        this.setState({timeLeftSec:this.state.timeSetMin*60,pause:false})
        clearInterval(this.timer);
        //console.log(timeLeftSec);
    }

    pause(){
        this.setState ({pause:!this.state.pause});
    }

    tick(){
        const left = this.state.pause ? this.state.timeLeftSec : this.state.timeLeftSec-1;
        this.setState({timeLeftSec:left});
        if (left <=0)  this.stopTimer();
    }

    handleTimeSetMin(event) {
        this.setState ({timeSetMin:event.target.value});
    }
    
    render (){
        return(
            <div>
            <label>{this.props.name}
            <input type="number" value={this.state.timeSetMin} onChange={this.handleTimeSetMin}></input>
            </label>
            <br/>
            <button onClick={this.startTimer}>Start</button>            
            <button onClick={this.pause}>Pause</button>
            <button onClick={this.stopTimer}>Reset</button>
            <strong> Time Left: {this.state.timeLeftSec /60 |0}min {this.state.timeLeftSec % 60}s  </strong>
            </div>
        );
    }
    

    
}