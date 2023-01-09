import { Component } from "react";

export default class CustomNotification extends Component {
    
    componentDidMount() {
        if (!("Notification" in window)) {
          console.log("Browser does not support desktop notification");
        } else {
            Notification.requestPermission();
          this.showNotification();
        }
      }

      showNotification() {
        if (this.props.show) new Notification(this.props.text);
      }
    render() {
        return (<div></div>);
    }
}
