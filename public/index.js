
// Hard-coded data because of new GitHub API restrictions

var gitnames = [
  'tretuna',
  'codydaig',
  'therobinkim',
  'galaxode',
  'sourjam',
  'JotheElephant',
  'wyattlindsey',
  'busbyactual'
];

var avatarURLs = {
  busbyactual: 'https://avatars2.githubusercontent.com/u/14985016?v=4',
  tretuna: 'https://avatars2.githubusercontent.com/u/16496746?v=4',
  codydaig: 'https://avatars1.githubusercontent.com/u/2314748?v=4',
  therobinkim: 'https://avatars2.githubusercontent.com/u/7613067?v=4',
  galaxode: 'https://avatars3.githubusercontent.com/u/6465787?v=4',
  sourjam: 'https://avatars0.githubusercontent.com/u/10098533?v=4',
  JotheElephant: 'https://avatars2.githubusercontent.com/u/20631654?v=4',
  wyattlindsey: 'https://avatars2.githubusercontent.com/u/3846359?v=4'
}

ReactDOM.render(<App gitnames={gitnames} avatarURLs={avatarURLs}/>, document.getElementById('app'));
