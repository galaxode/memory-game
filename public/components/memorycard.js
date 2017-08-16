class MemoryCard extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      // GitHub api
      apiPath: 'https://galaxode:niccopants!99@api.github.com/users/',

      // To be filled in with response from GET request to GitHub api
      cardData: {},

      // This is a github identicon. It is hardcoded for now, but the plan is to
      // use the logged in user's github username for the identicon instead of
      // mine, which is 'galaxode'. We replace 'galaxode' with a diff username.
      cardBack: 'https://github.com/identicons/',

      flipped: false,

      foundMatch: false

    };
  }

  componentDidMount() {
    // var component = this;
    //   $.get(this.state.apiPath + this.props.cardname, function(data) {
    //     component.setState({cardData: data});
    // });
  }

  handleClick() {
    console.log(this.props.choiceCount);
    if (!this.state.flipped && this.props.choiceCount < 2) {
      this.setState({flipped: true});

      this.props.registerChoice(this.props.cardname, (isMatch) => {
        if (isMatch) {
          this.setState({foundMatch: true});
        }
      });
    } else {
      console.log('You may not flip this card now.');
    }
  }

  triggerUnflip() {
    this.props.toggleTryAgain((done) => {
      if (done) {
        this.setState({flipped: false}, function() {

        });
      }
    })
  }


  displayCard() {


    if (this.props.tryAgain) {
      this.triggerUnflip();
    }

    const cardname = this.props.cardname;
    const avatarURL = this.props.avatarURLs[cardname];

    if (this.props.foundMatch || this.state.foundMatch || (this.state.flipped && !this.props.tryAgain && (this.props.choiceCount <= 2)) ) {

      return <img className={cardname + ' card'} src={avatarURL} width='120' />
    } else if (this.state.flipped === false || this.props.tryAgain === false) {

      return <img className={cardname + ' card'} src={this.state.cardBack + this.props.identiconName} width='120' />
    }
  }

  render() {




    return (
      <span onClick={() => {this.handleClick()}}>
        {this.displayCard()}
      </span>
    )
  }
}


window.MemoryCard = MemoryCard;
