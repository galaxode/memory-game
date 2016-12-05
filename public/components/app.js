class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shuffledCardNames: [],
      cardChoices: []

    };
  }

  componentDidMount() {
    // Use the data (github username array prop) to create a shuffled card spread
    // with two of each name to be matched
    this.setState({shuffledCardNames: _.shuffle(this.props.gitnames.concat(this.props.gitnames))});
  }


  render() {
    <div className='row'>
      <div className='col-sm-3'>
        {
          this.state.shuffledCardNames.map(function(cardname) {
            return <MemoryCard cardname={cardname} />
          })
        }
      </div>
    </div>
  }

window.App = App;