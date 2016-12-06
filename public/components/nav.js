class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currentTheme: 'default'
    };

  }

  handleSubmit() {
    console.log(event.target.name);
    event.preventDefault();
    this.setState({currentTheme: this.state.value}, () => {
      this.props.updateIdenticon(this.state.value);
      this.setState({value: ''});
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
    <div className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">GitHub Memory Match</a>
            </div>
        </div>
          <form onSubmit={this.handleSubmit.bind(this)} autocomplete='nope'>
            <input className='githubUsernameField' name='githubUsername' type='text' value={this.state.value} onChange={this.handleChange.bind(this)} placeholder='Input your github username here' autocomplete='nope'/>
            <input className='githubUsernameButton' type='submit' value='Submit' />
          </form>
          <span className='theme'>THEME: {this.state.currentTheme} identicon</span>
    </div>
    )
  }
}

window.Nav = Nav;