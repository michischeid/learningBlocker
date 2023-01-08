import { Component } from "react";

export default class Timer extends Component{
    constructor(props){
        super(props);
        this.state = {timeSet:100,timeLeft:0, pause:false};

        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.pause = this.pause.bind(this);

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
        this.setState({timeLeft:this.state.timeSet,pause:false})
        clearInterval(this.timer);
    }

    pause(){
        this.setState ({pause:!this.state.pause});
    }

    tick(){
        const left = this.state.pause ? this.state.timeLeft : this.state.timeLeft-1;
        this.setState({timeLeft:left});
        if (left <=0)  this.stopTimer();
    }
    
    render (){
        return(
            <div>
            <button onClick={this.startTimer}>Start</button>            
            <button onClick={this.pause}>Pause</button>
            <button onClick={this.stopTimer}>Reset</button>
            <strong> Time Left: {this.state.timeLeft /60 |0}min {this.state.timeLeft % 60}s  </strong>
            </div>
        );
    }
    
}