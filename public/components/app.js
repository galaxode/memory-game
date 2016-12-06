class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shuffledCardNames: [],
      cardChoices: [],
      matched: null,
      choiceCount: 0,
      matchCount: 0,
      tryAgain: false

    };
  }

  componentDidMount() {
    // Use the data (github username array prop) to create a shuffled card spread
    // with two of each name to be matched
    this.setState({shuffledCardNames: _.shuffle(this.props.gitnames.concat(this.props.gitnames))});
  }

  resetUnmatched() {
    this.setState({
      cardChoices: [],
      matched: null,
      choiceCount: 0,
      tryAgain: true
    })
  }

  toggleTryAgain() {
    this.setState({tryAgain: false});
  }

  registerChoice(choice) {
    if (this.state.cardChoices.length < 2) {
      this.setState({cardChoices: this.state.cardChoices.concat([choice]),
                      choiceCount: this.state.choiceCount++}, function() {
        console.log(this.state.cardChoices);


        if (this.state.cardChoices.length === 2) {
          var cardChoice1 = this.state.cardChoices[0];
          var cardChoice2 = this.state.cardChoices[1];
          if (cardChoice1 === cardChoice2) {
            this.setState({matched: true}, function() {
              console.log('Found a match!');
            });
          } else {
            this.setState({matched: false});
          }
        }
      });
    }
  }


  render() {
    return (
      <div>

        <div className='row'>
          <div className='col-sm-3 col-md-6'>
            {
              this.state.shuffledCardNames.map((cardname, cardindex) => {
                return <MemoryCard
                  cardname={cardname}
                  key={cardindex}
                  registerChoice={this.registerChoice.bind(this)}
                  matched = {this.state.matched}
                  tryAgain = {this.state.tryAgain}
                  choiceCount={this.state.choiceCount}
                  toggleTryAgain={this.toggleTryAgain.bind(this)}/>
              })
            }
          </div>
        </div>

        <MessageView matched={this.state.matched} resetUnmatched={this.resetUnmatched.bind(this)}/>

      </div>
    )
  }
}

window.App = App;