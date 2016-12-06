class MessageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  tryAgainClick() {
    //tell app to reset unmatched choices
    this.props.resetUnmatched();
  }

  messageChoice() {
    if (this.props.matched === null) {
      return;
    } else if (this.props.matched === true) {
      return <span>Great job! You found a match!!</span>
    } else {
      return <button onClick={this.tryAgainClick.bind(this)}>Sorry Try Again</button>
    }
  }

  render() {
    return (
      <div className='row'>
        <div className='col-sm-12 col-md-12'>
          {this.messageChoice()}
        </div>
      </div>
    )
  }
}

window.MessageView = MessageView;