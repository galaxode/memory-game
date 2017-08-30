'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      identiconName: 'galaxode.png',
      shuffledCardNames: [],
      cardChoices: [],
      matched: null,
      choiceCount: 0,
      matchCount: 0,
      matchArray: [],
      matchesNeeded: _this.props.gitnames.length,
      tryAgain: false,
      wonGame: false

    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Use the data (github username array prop) to create a shuffled card spread
      // with two of each name to be matched
      this.shuffleCards();
    }
  }, {
    key: 'shuffleCards',
    value: function shuffleCards() {
      this.setState({ shuffledCardNames: _.shuffle(this.props.gitnames.concat(this.props.gitnames)) });
    }
  }, {
    key: 'updateIdenticon',
    value: function updateIdenticon(username) {
      this.setState({ identiconName: username + '.png' });
    }
  }, {
    key: 'checkMatch',
    value: function checkMatch(cardname, callback) {
      if (this.state.matchArray.indexOf(cardname) >= 0) {
        callback(true);
      } else {
        callback(false);
      }
    }
  }, {
    key: 'resetUnmatched',
    value: function resetUnmatched() {
      var _this2 = this;

      //if (!this.state.matched) {

      this.setState({ tryAgain: true }, function () {
        _this2.setState({
          cardChoices: [],
          matched: null,
          choiceCount: 0
        });
      });
      //}
    }
  }, {
    key: 'continueAfterMatch',
    value: function continueAfterMatch() {
      var _this3 = this;

      this.setState({ matched: null }, function () {
        _this3.setState({
          cardChoices: [],
          choiceCount: 0
        });
      });
    }
  }, {
    key: 'startNewGame',
    value: function startNewGame() {
      var _this4 = this;

      this.setState({
        shuffledCardNames: [],
        cardChoices: [],
        matched: null,
        choiceCount: 0,
        matchCount: 0,
        matchArray: [],
        tryAgain: false,
        wonGame: false
      }, function () {
        _this4.shuffleCards();
        console.log(_this4.state.matchCount);
      });
    }
  }, {
    key: 'toggleTryAgain',
    value: function toggleTryAgain(callback) {
      this.setState({ tryAgain: false }, function () {
        callback(true);
      });
    }
  }, {
    key: 'registerChoice',
    value: function registerChoice(choice, callback) {
      console.log(this.state.cardChoices);
      if (this.state.cardChoices.length < 2) {
        this.setState({
          cardChoices: this.state.cardChoices.concat([choice]),
          choiceCount: this.state.choiceCount + 1
        }, function () {
          var _this5 = this;

          var choiceCount = this.state.cardChoices.length;
          console.log('cardChoices: ', this.state.cardChoices, 'choiceCount: ', choiceCount);

          if (this.state.cardChoices.length === 2) {
            var cardChoice1 = this.state.cardChoices[0];
            var cardChoice2 = this.state.cardChoices[1];

            if (cardChoice1 === cardChoice2) {

              if (this.state.matchesNeeded === this.state.matchCount + 1) {

                this.setState({ wonGame: true }, function () {
                  return;
                });
              }

              this.setState({ matched: true, matchCount: this.state.matchCount + 1,
                matchArray: this.state.matchArray.concat([cardChoice1]) }, function () {
                // Send true to memory card tell it that it's a match
                console.log('Match Array: ', _this5.state.matchArray);
                console.log('Match Count: ', _this5.state.matchCount);
                callback(true);
              });
            } else {
              this.setState({ matched: false }, function () {
                callback(false);
              });
            }
          }
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(Nav, { updateIdenticon: this.updateIdenticon.bind(this) })
        ),
        React.createElement(
          'div',
          { className: 'row gameboard' },
          React.createElement(
            'div',
            { className: 'col-xs-9 col-sm-9 col-md-7 col-lg-7 card-container' },
            this.state.shuffledCardNames.map(function (cardname, cardindex) {
              var foundMatch = false;
              if (_this6.state.matchArray.indexOf(cardname) >= 0) {
                foundMatch = true;
              }
              return React.createElement(MemoryCard, {
                cardname: cardname,
                key: cardindex,
                identiconName: _this6.state.identiconName,
                avatarURLs: _this6.props.avatarURLs,
                registerChoice: _this6.registerChoice.bind(_this6),
                matched: _this6.state.matched,
                matchArray: _this6.state.matchArray,
                tryAgain: _this6.state.tryAgain,
                choiceCount: _this6.state.cardChoices.length,
                toggleTryAgain: _this6.toggleTryAgain.bind(_this6),
                checkMatch: _this6.checkMatch.bind(_this6),
                foundMatch: foundMatch });
            })
          )
        ),
        React.createElement(MessageView, {
          matched: this.state.matched,
          resetUnmatched: this.resetUnmatched.bind(this),
          continueAfterMatch: this.continueAfterMatch.bind(this),
          wonGame: this.state.wonGame,
          startNewGame: this.startNewGame.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiaWRlbnRpY29uTmFtZSIsInNodWZmbGVkQ2FyZE5hbWVzIiwiY2FyZENob2ljZXMiLCJtYXRjaGVkIiwiY2hvaWNlQ291bnQiLCJtYXRjaENvdW50IiwibWF0Y2hBcnJheSIsIm1hdGNoZXNOZWVkZWQiLCJnaXRuYW1lcyIsImxlbmd0aCIsInRyeUFnYWluIiwid29uR2FtZSIsInNodWZmbGVDYXJkcyIsInNldFN0YXRlIiwiXyIsInNodWZmbGUiLCJjb25jYXQiLCJ1c2VybmFtZSIsImNhcmRuYW1lIiwiY2FsbGJhY2siLCJpbmRleE9mIiwiY29uc29sZSIsImxvZyIsImNob2ljZSIsImNhcmRDaG9pY2UxIiwiY2FyZENob2ljZTIiLCJ1cGRhdGVJZGVudGljb24iLCJiaW5kIiwibWFwIiwiY2FyZGluZGV4IiwiZm91bmRNYXRjaCIsImF2YXRhclVSTHMiLCJyZWdpc3RlckNob2ljZSIsInRvZ2dsZVRyeUFnYWluIiwiY2hlY2tNYXRjaCIsInJlc2V0VW5tYXRjaGVkIiwiY29udGludWVBZnRlck1hdGNoIiwic3RhcnROZXdHYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMscUJBQWUsY0FESjtBQUVYQyx5QkFBbUIsRUFGUjtBQUdYQyxtQkFBYSxFQUhGO0FBSVhDLGVBQVMsSUFKRTtBQUtYQyxtQkFBYSxDQUxGO0FBTVhDLGtCQUFZLENBTkQ7QUFPWEMsa0JBQVksRUFQRDtBQVFYQyxxQkFBZSxNQUFLVCxLQUFMLENBQVdVLFFBQVgsQ0FBb0JDLE1BUnhCO0FBU1hDLGdCQUFVLEtBVEM7QUFVWEMsZUFBUzs7QUFWRSxLQUFiO0FB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cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkZW50aWNvbk5hbWU6ICdnYWxheG9kZS5wbmcnLFxuICAgICAgc2h1ZmZsZWRDYXJkTmFtZXM6IFtdLFxuICAgICAgY2FyZENob2ljZXM6IFtdLFxuICAgICAgbWF0Y2hlZDogbnVsbCxcbiAgICAgIGNob2ljZUNvdW50OiAwLFxuICAgICAgbWF0Y2hDb3VudDogMCxcbiAgICAgIG1hdGNoQXJyYXk6IFtdLFxuICAgICAgbWF0Y2hlc05lZWRlZDogdGhpcy5wcm9wcy5naXRuYW1lcy5sZW5ndGgsXG4gICAgICB0cnlBZ2FpbjogZmFsc2UsXG4gICAgICB3b25HYW1lOiBmYWxzZVxuXG5cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gVXNlIHRoZSBkYXRhIChnaXRodWIgdXNlcm5hbWUgYXJyYXkgcHJvcCkgdG8gY3JlYXRlIGEgc2h1ZmZsZWQgY2FyZCBzcHJlYWRcbiAgICAvLyB3aXRoIHR3byBvZiBlYWNoIG5hbWUgdG8gYmUgbWF0Y2hlZFxuICAgIHRoaXMuc2h1ZmZsZUNhcmRzKCk7XG4gIH1cblxuICBzaHVmZmxlQ2FyZHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2h1ZmZsZWRDYXJkTmFtZXM6IF8uc2h1ZmZsZSh0aGlzLnByb3BzLmdpdG5hbWVzLmNvbmNhdCh0aGlzLnByb3BzLmdpdG5hbWVzKSl9KTtcbiAgfVxuXG4gIHVwZGF0ZUlkZW50aWNvbih1c2VybmFtZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2lkZW50aWNvbk5hbWU6IHVzZXJuYW1lICsgJy5wbmcnfSk7XG4gIH1cblxuICBjaGVja01hdGNoKGNhcmRuYW1lLCBjYWxsYmFjaykge1xuICAgIGlmICh0aGlzLnN0YXRlLm1hdGNoQXJyYXkuaW5kZXhPZihjYXJkbmFtZSkgPj0gMCkge1xuICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByZXNldFVubWF0Y2hlZCgpIHtcbiAgICAvL2lmICghdGhpcy5zdGF0ZS5tYXRjaGVkKSB7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RyeUFnYWluOiB0cnVlfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBjYXJkQ2hvaWNlczogW10sXG4gICAgICAgICAgbWF0Y2hlZDogbnVsbCxcbiAgICAgICAgICBjaG9pY2VDb3VudDogMFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIC8vfVxuICB9XG5cbiAgY29udGludWVBZnRlck1hdGNoKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe21hdGNoZWQ6IG51bGx9LCAoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2FyZENob2ljZXM6IFtdLFxuICAgICAgICBjaG9pY2VDb3VudDogMFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGFydE5ld0dhbWUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaHVmZmxlZENhcmROYW1lczogW10sXG4gICAgICBjYXJkQ2hvaWNlczogW10sXG4gICAgICBtYXRjaGVkOiBudWxsLFxuICAgICAgY2hvaWNlQ291bnQ6IDAsXG4gICAgICBtYXRjaENvdW50OiAwLFxuICAgICAgbWF0Y2hBcnJheTogW10sXG4gICAgICB0cnlBZ2FpbjogZmFsc2UsXG4gICAgICB3b25HYW1lOiBmYWxzZVxuICAgIH0sICgpID0+IHtcbiAgICAgIHRoaXMuc2h1ZmZsZUNhcmRzKCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm1hdGNoQ291bnQpO1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlVHJ5QWdhaW4oY2FsbGJhY2spIHtcbiAgICB0aGlzLnNldFN0YXRlKHt0cnlBZ2FpbjogZmFsc2V9LCBmdW5jdGlvbigpIHtcbiAgICAgIGNhbGxiYWNrKHRydWUpXG4gICAgfSk7XG4gIH1cblxuICByZWdpc3RlckNob2ljZShjaG9pY2UsIGNhbGxiYWNrKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5jYXJkQ2hvaWNlcyk7XG4gICAgaWYgKHRoaXMuc3RhdGUuY2FyZENob2ljZXMubGVuZ3RoIDwgMikge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNhcmRDaG9pY2VzOiB0aGlzLnN0YXRlLmNhcmRDaG9pY2VzLmNvbmNhdChbY2hvaWNlXSksXG4gICAgICAgIGNob2ljZUNvdW50OiB0aGlzLnN0YXRlLmNob2ljZUNvdW50ICsgMVxuICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBjaG9pY2VDb3VudCA9IHRoaXMuc3RhdGUuY2FyZENob2ljZXMubGVuZ3RoO1xuICAgICAgICBjb25zb2xlLmxvZygnY2FyZENob2ljZXM6ICcsIHRoaXMuc3RhdGUuY2FyZENob2ljZXMsICdjaG9pY2VDb3VudDogJywgY2hvaWNlQ291bnQpO1xuXG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY2FyZENob2ljZXMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgdmFyIGNhcmRDaG9pY2UxID0gdGhpcy5zdGF0ZS5jYXJkQ2hvaWNlc1swXTtcbiAgICAgICAgICB2YXIgY2FyZENob2ljZTIgPSB0aGlzLnN0YXRlLmNhcmRDaG9pY2VzWzFdO1xuXG4gICAgICAgICAgaWYgKGNhcmRDaG9pY2UxID09PSBjYXJkQ2hvaWNlMikge1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLm1hdGNoZXNOZWVkZWQgPT09IHRoaXMuc3RhdGUubWF0Y2hDb3VudCArIDEpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dvbkdhbWU6IHRydWV9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bWF0Y2hlZDogdHJ1ZSwgbWF0Y2hDb3VudDogdGhpcy5zdGF0ZS5tYXRjaENvdW50ICsgMSxcbiAgICAgICAgICAgICAgbWF0Y2hBcnJheTogdGhpcy5zdGF0ZS5tYXRjaEFycmF5LmNvbmNhdChbY2FyZENob2ljZTFdKX0sICgpID0+IHtcbiAgICAgICAgICAgICAgLy8gU2VuZCB0cnVlIHRvIG1lbW9yeSBjYXJkIHRlbGwgaXQgdGhhdCBpdCdzIGEgbWF0Y2hcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ01hdGNoIEFycmF5OiAnLCB0aGlzLnN0YXRlLm1hdGNoQXJyYXkpO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTWF0Y2ggQ291bnQ6ICcsIHRoaXMuc3RhdGUubWF0Y2hDb3VudCk7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xuXG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHttYXRjaGVkOiBmYWxzZX0sICgpID0+IHtcbiAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXG4gICAgICAgICAgPE5hdiB1cGRhdGVJZGVudGljb249e3RoaXMudXBkYXRlSWRlbnRpY29uLmJpbmQodGhpcyl9IC8+XG5cbiAgICAgIDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBnYW1lYm9hcmQnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wteHMtOSBjb2wtc20tOSBjb2wtbWQtNyBjb2wtbGctNyBjYXJkLWNvbnRhaW5lcic+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2h1ZmZsZWRDYXJkTmFtZXMubWFwKChjYXJkbmFtZSwgY2FyZGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kTWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zdGF0ZS5tYXRjaEFycmF5LmluZGV4T2YoY2FyZG5hbWUpID49IDApIHtcbiAgICAgICAgICAgICAgICAgIGZvdW5kTWF0Y2ggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lbW9yeUNhcmRcbiAgICAgICAgICAgICAgICAgIGNhcmRuYW1lPXtjYXJkbmFtZX1cbiAgICAgICAgICAgICAgICAgIGtleT17Y2FyZGluZGV4fVxuICAgICAgICAgICAgICAgICAgaWRlbnRpY29uTmFtZT17dGhpcy5zdGF0ZS5pZGVudGljb25OYW1lfVxuICAgICAgICAgICAgICAgICAgYXZhdGFyVVJMcz17dGhpcy5wcm9wcy5hdmF0YXJVUkxzfVxuICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJDaG9pY2U9e3RoaXMucmVnaXN0ZXJDaG9pY2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSB7dGhpcy5zdGF0ZS5tYXRjaGVkfVxuICAgICAgICAgICAgICAgICAgbWF0Y2hBcnJheT17dGhpcy5zdGF0ZS5tYXRjaEFycmF5fVxuICAgICAgICAgICAgICAgICAgdHJ5QWdhaW4gPSB7dGhpcy5zdGF0ZS50cnlBZ2Fpbn1cbiAgICAgICAgICAgICAgICAgIGNob2ljZUNvdW50PXt0aGlzLnN0YXRlLmNhcmRDaG9pY2VzLmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgIHRvZ2dsZVRyeUFnYWluPXt0aGlzLnRvZ2dsZVRyeUFnYWluLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICBjaGVja01hdGNoPXt0aGlzLmNoZWNrTWF0Y2guYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIGZvdW5kTWF0Y2g9e2ZvdW5kTWF0Y2h9Lz5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZXNzYWdlVmlld1xuICAgICAgICAgIG1hdGNoZWQ9e3RoaXMuc3RhdGUubWF0Y2hlZH1cbiAgICAgICAgICByZXNldFVubWF0Y2hlZD17dGhpcy5yZXNldFVubWF0Y2hlZC5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNvbnRpbnVlQWZ0ZXJNYXRjaD17dGhpcy5jb250aW51ZUFmdGVyTWF0Y2guYmluZCh0aGlzKX1cbiAgICAgICAgICB3b25HYW1lPXt0aGlzLnN0YXRlLndvbkdhbWV9XG4gICAgICAgICAgc3RhcnROZXdHYW1lPXt0aGlzLnN0YXJ0TmV3R2FtZS5iaW5kKHRoaXMpfS8+XG5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuIl19