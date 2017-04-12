class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      identiconName: 'galaxode.png',
      shuffledCardNames: [],
      cardChoices: [],
      matched: null,
      choiceCount: 0,
      matchCount: 0,
      matchArray: [],
      matchesNeeded: this.props.gitnames.length,
      tryAgain: false,
      wonGame: false


    };
  }

  componentDidMount() {
    // Use the data (github username array prop) to create a shuffled card spread
    // with two of each name to be matched
    this.shuffleCards();
  }

  shuffleCards() {
    this.setState({shuffledCardNames: _.shuffle(this.props.gitnames.concat(this.props.gitnames))});
  }

  updateIdenticon(username) {
    this.setState({identiconName: username + '.png'});
  }

  checkMatch(cardname, callback) {
    if (this.state.matchArray.indexOf(cardname) >= 0) {
      callback(true);
    } else {
      callback(false);
    }
  }

  resetUnmatched() {
    //if (!this.state.matched) {

      this.setState({tryAgain: true}, () => {
        this.setState({
          cardChoices: [],
          matched: null,
          choiceCount: 0
        });
      });
    //}
  }

  continueAfterMatch() {
    this.setState({matched: null}, () => {
      this.setState({
        cardChoices: [],
        choiceCount: 0
      });
    });
  }

  startNewGame() {
    this.setState({
      shuffledCardNames: [],
      cardChoices: [],
      matched: null,
      choiceCount: 0,
      matchCount: 0,
      matchArray: [],
      tryAgain: false,
      wonGame: false
    }, () => {
      this.shuffleCards();
      console.log(this.state.matchCount);
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
        console.log('cardChoices: ', this.state.cardChoices, 'choiceCount: ', this.state.choiceCount);


        if (this.state.cardChoices.length === 2) {
          var cardChoice1 = this.state.cardChoices[0];
          var cardChoice2 = this.state.cardChoices[1];

          if (cardChoice1 === cardChoice2) {

              if (this.state.matchesNeeded === this.state.matchCount + 1) {

                this.setState({wonGame: true}, () => {
                  return;
                });
              }

            this.setState({matched: true, matchCount: this.state.matchCount + 1,
              matchArray: this.state.matchArray.concat([cardChoice1])}, () => {
              // Send true to memory card tell it that it's a match
              console.log('Match Array: ', this.state.matchArray);
              console.log('Match Count: ', this.state.matchCount);
              callback(true);


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
          <div className='col-xs-9 col-sm-9 col-md-7 col-lg-6'>
            {
              this.state.shuffledCardNames.map((cardname, cardindex) => {
                var foundMatch = false;
                if (this.state.matchArray.indexOf(cardname) >= 0) {
                  foundMatch = true;
                }
                return <MemoryCard
                  cardname={cardname}
                  key={cardindex}
                  identiconName={this.state.identiconName}
                  registerChoice={this.registerChoice.bind(this)}
                  matched = {this.state.matched}
                  matchArray={this.state.matchArray}
                  tryAgain = {this.state.tryAgain}
                  choiceCount={this.state.choiceCount}
                  toggleTryAgain={this.toggleTryAgain.bind(this)}
                  checkMatch={this.checkMatch.bind(this)}
                  foundMatch={foundMatch}/>
              })
            }
          </div>
        </div>

        <MessageView
          matched={this.state.matched}
          resetUnmatched={this.resetUnmatched.bind(this)}
          continueAfterMatch={this.continueAfterMatch.bind(this)}
          wonGame={this.state.wonGame}
          startNewGame={this.startNewGame.bind(this)}/>

      </div>
    )
  }
}

window.App = App;