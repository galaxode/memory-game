class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currentTheme: 'galaxode'
    };

  }

  handleSubmit() {
    console.log(event.target.name);
    event.preventDefault();
    // Ensure an empty string cannot be submitted
    if (this.state.value !== '') {
      this.setState({currentTheme: this.state.value}, () => {
        this.props.updateIdenticon(this.state.value);
        this.setState({value: ''});
      });
    } else {
      alert('GitHub username field must not be empty.');
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleTooltipClick() {
    alert('A GitHub username is required to change the identicon theme.\n\nAn identicon is a hash of your username which GitHub uses as your default profile pic. Input your own username to see your unique identicon.');
  }

  render() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">GitHub Memory Match</a>
            </div>
        </div>

        <div className='input-area'>
          <div className='theme'><span>identicon theme: {this.state.currentTheme}</span></div>
          <div className='input-bar'>
            <form onSubmit={this.handleSubmit.bind(this)} autocomplete='nope'>
              <span className="glyphicon glyphicon-question-sign" onClick={this.handleTooltipClick}></span>
              <input className='githubUsernameField' name='githubUsername' type='text' value={this.state.value} onChange={this.handleChange.bind(this)} placeholder='Input a GitHub username' autocomplete='nope'/>
              <input className='githubUsernameButton btn btn-sm' type='submit' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

window.Nav = Nav;
