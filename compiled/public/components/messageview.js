'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessageView = function (_React$Component) {
  _inherits(MessageView, _React$Component);

  function MessageView(props) {
    _classCallCheck(this, MessageView);

    var _this = _possibleConstructorReturn(this, (MessageView.__proto__ || Object.getPrototypeOf(MessageView)).call(this, props));

    _this.state = {};

    return _this;
  }

  _createClass(MessageView, [{
    key: 'tryAgainClick',
    value: function tryAgainClick() {
      //tell app to reset unmatched choices
      this.props.resetUnmatched();
    }
  }, {
    key: 'successClick',
    value: function successClick() {
      this.props.continueAfterMatch();
    }
  }, {
    key: 'newGame',
    value: function newGame() {
      this.props.startNewGame();
    }
  }, {
    key: 'messageChoice',
    value: function messageChoice() {

      if (this.props.matched === null) {
        return;
      }
      if (this.props.wonGame) {
        return React.createElement(
          'button',
          { className: 'btn btn-xlarge message won', onClick: this.newGame.bind(this) },
          'You Won! Click to play again!'
        );
      } else if (this.props.matched === true) {
        return React.createElement(
          'button',
          { className: 'btn btn-success btn-lg message match', onClick: this.successClick.bind(this) },
          'You found a match!! Click to continue!'
        );
      } else {
        return React.createElement(
          'button',
          { className: 'btn btn-warning btn-lg message tryAgain', onClick: this.tryAgainClick.bind(this) },
          'No match. Click here to flip \'em back.'
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row message-container' },
        React.createElement(
          'div',
          { className: 'm' },
          React.createElement(
            'div',
            { className: 'notsure' },
            this.messageChoice()
          )
        )
      );
    }
  }]);

  return MessageView;
}(React.Component);

window.MessageView = MessageView;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jb21wb25lbnRzL21lc3NhZ2V2aWV3LmpzIl0sIm5hbWVzIjpbIk1lc3NhZ2VWaWV3IiwicHJvcHMiLCJzdGF0ZSIsInJlc2V0VW5tYXRjaGVkIiwiY29udGludWVBZnRlck1hdGNoIiwic3RhcnROZXdHYW1lIiwibWF0Y2hlZCIsIndvbkdhbWUiLCJuZXdHYW1lIiwiYmluZCIsInN1Y2Nlc3NDbGljayIsInRyeUFnYWluQ2xpY2siLCJtZXNzYWdlQ2hvaWNlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVzs7O0FBQ0osdUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhLEVBQWI7O0FBSGlCO0FBS2xCOzs7O29DQUVlO0FBQ2Q7QUFDQSxXQUFLRCxLQUFMLENBQVdFLGNBQVg7QUFDRDs7O21DQUVjO0FBQ2IsV0FBS0YsS0FBTCxDQUFXRyxrQkFBWDtBQUNEOzs7OEJBRVM7QUFDUixXQUFLSCxLQUFMLENBQVdJLFlBQVg7QUFDRDs7O29DQUVlOztBQUVkLFVBQUksS0FBS0osS0FBTCxDQUFXSyxPQUFYLEtBQXVCLElBQTNCLEVBQWlDO0FBQy9CO0FBQ0Q7QUFDRCxVQUFJLEtBQUtMLEtBQUwsQ0FBV00sT0FBZixFQUF3QjtBQUN0QixlQUFPO0FBQUE7QUFBQSxZQUFRLFdBQVUsNEJBQWxCLEVBQStDLFNBQVMsS0FBS0MsT0FBTCxDQUFhQyxJQUFiLENBQWtCLElBQWxCLENBQXhEO0FBQUE7QUFBQSxTQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBS1IsS0FBTCxDQUFXSyxPQUFYLEtBQXVCLElBQTNCLEVBQWlDO0FBQ3RDLGVBQU87QUFBQTtBQUFBLFlBQVEsV0FBVSxzQ0FBbEIsRUFBeUQsU0FBUyxLQUFLSSxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUFsRTtBQUFBO0FBQUEsU0FBUDtBQUNELE9BRk0sTUFFQTtBQUNMLGVBQU87QUFBQTtBQUFBLFlBQVEsV0FBVSx5Q0FBbEIsRUFBNEQsU0FBUyxLQUFLRSxhQUFMLENBQW1CRixJQUFuQixDQUF3QixJQUF4QixDQUFyRTtBQUFBO0FBQUEsU0FBUDtBQUNEO0FBQ0Y7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUNBO0FBQUE7QUFBQSxZQUFLLFdBQVUsR0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsU0FBZjtBQUNHLGlCQUFLRyxhQUFMO0FBREg7QUFERjtBQURBLE9BREY7QUFTRDs7OztFQTdDdUJDLE1BQU1DLFM7O0FBZ0RoQ0MsT0FBT2YsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoibWVzc2FnZXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNZXNzYWdlVmlldyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuXG4gIH1cblxuICB0cnlBZ2FpbkNsaWNrKCkge1xuICAgIC8vdGVsbCBhcHAgdG8gcmVzZXQgdW5tYXRjaGVkIGNob2ljZXNcbiAgICB0aGlzLnByb3BzLnJlc2V0VW5tYXRjaGVkKCk7XG4gIH1cblxuICBzdWNjZXNzQ2xpY2soKSB7XG4gICAgdGhpcy5wcm9wcy5jb250aW51ZUFmdGVyTWF0Y2goKTtcbiAgfVxuXG4gIG5ld0dhbWUoKSB7XG4gICAgdGhpcy5wcm9wcy5zdGFydE5ld0dhbWUoKTtcbiAgfVxuXG4gIG1lc3NhZ2VDaG9pY2UoKSB7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5tYXRjaGVkID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLndvbkdhbWUpIHtcbiAgICAgIHJldHVybiA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi14bGFyZ2UgbWVzc2FnZSB3b24nIG9uQ2xpY2s9e3RoaXMubmV3R2FtZS5iaW5kKHRoaXMpfT5Zb3UgV29uISBDbGljayB0byBwbGF5IGFnYWluITwvYnV0dG9uPlxuICAgIH0gZWxzZSBpZiAodGhpcy5wcm9wcy5tYXRjaGVkID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gPGJ1dHRvbiBjbGFzc05hbWU9J2J0biBidG4tc3VjY2VzcyBidG4tbGcgbWVzc2FnZSBtYXRjaCcgb25DbGljaz17dGhpcy5zdWNjZXNzQ2xpY2suYmluZCh0aGlzKX0+WW91IGZvdW5kIGEgbWF0Y2ghISBDbGljayB0byBjb250aW51ZSE8L2J1dHRvbj5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLXdhcm5pbmcgYnRuLWxnIG1lc3NhZ2UgdHJ5QWdhaW4nIG9uQ2xpY2s9e3RoaXMudHJ5QWdhaW5DbGljay5iaW5kKHRoaXMpfT5ObyBtYXRjaC4gQ2xpY2sgaGVyZSB0byBmbGlwICdlbSBiYWNrLjwvYnV0dG9uPlxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBtZXNzYWdlLWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub3RzdXJlJz5cbiAgICAgICAgICB7dGhpcy5tZXNzYWdlQ2hvaWNlKCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuTWVzc2FnZVZpZXcgPSBNZXNzYWdlVmlldztcbiJdfQ==