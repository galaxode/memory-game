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

  newGame() {
    this.props.startNewGame();
  }

  messageChoice() {

    if (this.props.matched === null) {
      return;
    }
    if (this.props.wonGame) {
      return <button className='btn btn-xlarge message won' onClick={this.newGame.bind(this)}>You Won! Click to play again!</button>
    } else if (this.props.matched === true) {
      return <button className='btn btn-success btn-lg message match' onClick={this.successClick.bind(this)}>You found a match!! Click to continue!</button>
    } else {
      return <button className='btn btn-warning btn-lg message tryAgain' onClick={this.tryAgainClick.bind(this)}>No match. Click here to flip 'em back.</button>
    }
  }

  render() {
    return (
      <div className='row message-container'>
      <div className='m'>
        <div className='notsure'>
          {this.messageChoice()}
        </div>
        </div>
      </div>
    )
  }
}

window.MessageView = MessageView;
