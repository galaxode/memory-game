class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identiconName: 'hughes89.png',
      shuffledCardNames: [],
      cardChoices: [],
      matched: null,
      choiceCount: 0,
      matchCount: 0,
      matchesNeeded: this.props.gitnames.length,
      tryAgain: false,

    };
  }

  componentDidMount() {
    // Use the data (github username array prop) to create a shuffled card spread
    // with two of each name to be matched
    this.setState({shuffledCardNames: _.shuffle(this.props.gitnames.concat(this.props.gitnames))});
  }

  updateIdenticon(username) {
    this.setState({identiconName: username + '.png'});
  }

  checkGameStatus() {
    if (matchCount) {

    }
  }

  resetUnmatched() {
    if (!this.state.matched) {
      this.setState({tryAgain: true}, () => {
        this.setState({
          cardChoices: [],
          matched: null,
          choiceCount: 0
        });
      });
    }
  }

  continueAfterMatch() {
    this.setState({matched: null}, () => {
      this.setState({
        cardChoices: [],
        choiceCount: 0
      });
    });
  }

  toggleTryAgain(callback) {
    this.setState({tryAgain: false}, function() {
      callback(true)
    });
  }

  registerChoice(choice, callback) {
    console.log(this.state.cardChoices);
    if (this.state.cardChoices.length < 2) {
      this.setState({
        cardChoices: this.state.cardChoices.concat([choice]),
        choiceCount: this.state.choiceCount++}, function() {
        console.log(this.state.cardChoices);


        if (this.state.cardChoices.length === 2) {
          var cardChoice1 = this.state.cardChoices[0];
          var cardChoice2 = this.state.cardChoices[1];

          if (cardChoice1 === cardChoice2) {
            this.setState({matched: true, matchCount: this.state.MatchCount + 1}, () => {
              if (this.state.matchesNeeded === this.state.matchCount) {
                this.setState({wonGame: true});
              } else {
                // enable continued play
              }
            });
          } else {
            this.setState({matched: false}, () => {
              callback(false);
            });
          }
        }
      });
    }
  }


  render() {
    return (
      <div>
      <div className='row'>

          <Nav updateIdenticon={this.updateIdenticon.bind(this)} />

      </div>

        <div className='row'>
          <div className='col-sm-9 col-md-6 col-lg-6'>
            {
              this.state.shuffledCardNames.map((cardname, cardindex) => {
                return <MemoryCard
                  cardname={cardname}
                  key={cardindex}
                  identiconName={this.state.identiconName}
                  registerChoice={this.registerChoice.bind(this)}
                  matched = {this.state.matched}
                  tryAgain = {this.state.tryAgain}
                  choiceCount={this.state.choiceCount}
                  toggleTryAgain={this.toggleTryAgain.bind(this)}/>
              })
            }
          </div>
        </div>

        <MessageView
          matched={this.state.matched}
          resetUnmatched={this.resetUnmatched.bind(this)}
          continueAfterMatch={this.continueAfterMatch.bind(this)}
          wonGame={this.wonGame}/>

      </div>
    )
  }
}

window.App = App;