class MessageView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  tryAgainClick() {
    //tell app to reset unmatched choices
    this.props.resetUnmatched();
  }

  successClick() {
    this.props.continueAfterMatch();
  }

  messageChoice() {

    if (this.props.matched === null) {
      return;
    } else if (this.props.matched === true) {
      return <button className='btn btn-success btn-lg message match' onClick={this.successClick.bind(this)}>You found a match!! Click to continue!</button>
    } else if (this.props.wonGame) {
      return <button className='btn btn-success btn-lg message won'>You Won!</button>
    } else {
      return <button className='btn btn-warning btn-lg message tryAgain' onClick={this.tryAgainClick.bind(this)}>No match. Click here to flip 'em back.</button>
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