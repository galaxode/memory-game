'use strict';

// Hard-coded data because of new GitHub API restrictions

var gitnames = ['tretuna', 'codydaig', 'therobinkim', 'galaxode', 'sourjam', 'JotheElephant', 'wyattlindsey', 'busbyactual'];

var avatarURLs = {
  busbyactual: 'https://avatars2.githubusercontent.com/u/14985016?v=4',
  tretuna: 'https://avatars2.githubusercontent.com/u/16496746?v=4',
  codydaig: 'https://avatars1.githubusercontent.com/u/2314748?v=4',
  therobinkim: 'https://avatars2.githubusercontent.com/u/7613067?v=4',
  galaxode: 'https://avatars3.githubusercontent.com/u/6465787?v=4',
  sourjam: 'https://avatars0.githubusercontent.com/u/10098533?v=4',
  JotheElephant: 'https://avatars2.githubusercontent.com/u/20631654?v=4',
  wyattlindsey: 'https://avatars2.githubusercontent.com/u/3846359?v=4'
};

ReactDOM.render(React.createElement(App, { gitnames: gitnames, avatarURLs: avatarURLs }), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3B1YmxpYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJnaXRuYW1lcyIsImF2YXRhclVSTHMiLCJidXNieWFjdHVhbCIsInRyZXR1bmEiLCJjb2R5ZGFpZyIsInRoZXJvYmlua2ltIiwiZ2FsYXhvZGUiLCJzb3VyamFtIiwiSm90aGVFbGVwaGFudCIsInd5YXR0bGluZHNleSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFFQSxJQUFJQSxXQUFXLENBQ2IsU0FEYSxFQUViLFVBRmEsRUFHYixhQUhhLEVBSWIsVUFKYSxFQUtiLFNBTGEsRUFNYixlQU5hLEVBT2IsY0FQYSxFQVFiLGFBUmEsQ0FBZjs7QUFXQSxJQUFJQyxhQUFhO0FBQ2ZDLGVBQWEsdURBREU7QUFFZkMsV0FBUyx1REFGTTtBQUdmQyxZQUFVLHNEQUhLO0FBSWZDLGVBQWEsc0RBSkU7QUFLZkMsWUFBVSxzREFMSztBQU1mQyxXQUFTLHVEQU5NO0FBT2ZDLGlCQUFlLHVEQVBBO0FBUWZDLGdCQUFjO0FBUkMsQ0FBakI7O0FBV0FDLFNBQVNDLE1BQVQsQ0FBZ0Isb0JBQUMsR0FBRCxJQUFLLFVBQVVYLFFBQWYsRUFBeUIsWUFBWUMsVUFBckMsR0FBaEIsRUFBb0VXLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEhhcmQtY29kZWQgZGF0YSBiZWNhdXNlIG9mIG5ldyBHaXRIdWIgQVBJIHJlc3RyaWN0aW9uc1xuXG52YXIgZ2l0bmFtZXMgPSBbXG4gICd0cmV0dW5hJyxcbiAgJ2NvZHlkYWlnJyxcbiAgJ3RoZXJvYmlua2ltJyxcbiAgJ2dhbGF4b2RlJyxcbiAgJ3NvdXJqYW0nLFxuICAnSm90aGVFbGVwaGFudCcsXG4gICd3eWF0dGxpbmRzZXknLFxuICAnYnVzYnlhY3R1YWwnXG5dO1xuXG52YXIgYXZhdGFyVVJMcyA9IHtcbiAgYnVzYnlhY3R1YWw6ICdodHRwczovL2F2YXRhcnMyLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE0OTg1MDE2P3Y9NCcsXG4gIHRyZXR1bmE6ICdodHRwczovL2F2YXRhcnMyLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzE2NDk2NzQ2P3Y9NCcsXG4gIGNvZHlkYWlnOiAnaHR0cHM6Ly9hdmF0YXJzMS5naXRodWJ1c2VyY29udGVudC5jb20vdS8yMzE0NzQ4P3Y9NCcsXG4gIHRoZXJvYmlua2ltOiAnaHR0cHM6Ly9hdmF0YXJzMi5naXRodWJ1c2VyY29udGVudC5jb20vdS83NjEzMDY3P3Y9NCcsXG4gIGdhbGF4b2RlOiAnaHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS82NDY1Nzg3P3Y9NCcsXG4gIHNvdXJqYW06ICdodHRwczovL2F2YXRhcnMwLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzEwMDk4NTMzP3Y9NCcsXG4gIEpvdGhlRWxlcGhhbnQ6ICdodHRwczovL2F2YXRhcnMyLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzIwNjMxNjU0P3Y9NCcsXG4gIHd5YXR0bGluZHNleTogJ2h0dHBzOi8vYXZhdGFyczIuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzg0NjM1OT92PTQnXG59XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIGdpdG5hbWVzPXtnaXRuYW1lc30gYXZhdGFyVVJMcz17YXZhdGFyVVJMc30vPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiJdfQ==