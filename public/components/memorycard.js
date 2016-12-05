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
      cardBack: 'https://github.com/identicons/galaxode.png',

      clicked: false,

    };
  }

  componentDidMount() {
    var component = this;
      $.get(this.state.apiPath + this.props.cardname, function(data) {
        component.setState({cardData: data});
    });
  }

  handleClick() {
    if (!this.state.clicked) {
      this.setState({clicked: !this.state.clicked});
      this.props.registerChoice(this.props.cardname);
      console.log(this.state.cardData);
    } else {
      console.log('Already clicked!');
    }
  }

  render() {
    return (
      <span onClick={() => {this.handleClick()}}>
        {this.state.clicked ?
          <img className={this.props.cardname} src={this.state.cardData.avatar_url} width='80' />
          : <img className={this.props.cardname} src={this.state.cardBack} width='80' />}
      </span>
    )
  }
}


window.MemoryCard = MemoryCard;