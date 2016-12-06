class MemoryCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // GitHub api
      apiPath: 'https://api.github.com/users/',

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
    var component = this;
      $.get(this.state.apiPath + this.props.cardname, function(data) {
        component.setState({cardData: data});
    });
  }

  handleClick() {


    if (!this.state.flipped) {
      this.setState({flipped: true});

      this.props.registerChoice(this.props.cardname, (isMatch) => {
        if (isMatch) {
          this.setState({foundMatch: true});
        }
      });
      console.log(this.state.cardData);
    } else {
      console.log('Already flipped!');
    }
  }

  triggerClick() {
    this.props.toggleTryAgain((done) => {
      if (done) {
        this.setState({flipped: false}, function() {

        });
      }
    })
  }

  flip() {
    if (this.props.tryAgain) {
      this.triggerClick();
    }

    if (this.props.match) {
      this.setState({foundMatch: true});
    }

    if (this.state.foundMatch || (this.state.flipped === true && !this.props.tryAgain) ) {
      console.log('inside flipped state: ', this.state.foundMatch)
      return <img className={this.props.cardname + ' card'} src={this.state.cardData.avatar_url} width='120' />
    } else {
      console.log(this.state.foundMatch)
      return <img className={this.props.cardname + ' card'} src={this.state.cardBack + this.props.identiconName} width='120' />
    }
  }

  render() {

    // if (this.props.tryAgain === true) {
    //   this.setState({clicked: false}, function() {
    //     this.toggleTryAgain();
    //   });
    // }

    return (
      <span onClick={() => {this.handleClick()}}>
        {this.flip()}
      </span>
    )
  }
}


window.MemoryCard = MemoryCard;