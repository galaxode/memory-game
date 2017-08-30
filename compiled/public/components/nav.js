'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.state = {
      value: '',
      currentTheme: 'galaxode'
    };

    return _this;
  }

  _createClass(Nav, [{
    key: 'handleSubmit',
    value: function handleSubmit() {
      var _this2 = this;

      console.log(event.target.name);
      event.preventDefault();
      // Ensure an empty string cannot be submitted
      if (this.state.value !== '') {
        this.setState({ currentTheme: this.state.value }, function () {
          _this2.props.updateIdenticon(_this2.state.value);
          _this2.setState({ value: '' });
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'navbar navbar-default' },
        React.createElement(
          'div',
          { className: 'container-fluid' },
          React.createElement(
            'div',
            { className: 'navbar-header' },
            React.createElement(
              'a',
              { className: 'navbar-brand', href: '#' },
              'GitHub Memory Match'
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'input-area' },
          React.createElement(
            'div',
            { className: 'theme' },
            React.createElement(
              'span',
              null,
              'identicon: ',
              this.state.currentTheme
            )
          ),
          React.createElement(
            'div',
            { className: 'input-bar' },
            React.createElement(
              'form',
              { onSubmit: this.handleSubmit.bind(this), autocomplete: 'nope' },
              React.createElement('input', { className: 'githubUsernameField', name: 'githubUsername', type: 'text', value: this.state.value, onChange: this.handleChange.bind(this), placeholder: 'Input your github username', autocomplete: 'nope' }),
              React.createElement('input', { className: 'githubUsernameButton btn btn-sm', type: 'submit', value: 'Submit' })
            )
          )
        )
      );
    }
  }]);

  return Nav;
}(React.Component);

window.Nav = Nav;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6WyJOYXYiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjdXJyZW50VGhlbWUiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInVwZGF0ZUlkZW50aWNvbiIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsb0JBQWM7QUFGSCxLQUFiOztBQUhpQjtBQVFsQjs7OzttQ0FFYztBQUFBOztBQUNiQyxjQUFRQyxHQUFSLENBQVlDLE1BQU1DLE1BQU4sQ0FBYUMsSUFBekI7QUFDQUYsWUFBTUcsY0FBTjtBQUNBO0FBQ0EsVUFBSSxLQUFLUixLQUFMLENBQVdDLEtBQVgsS0FBcUIsRUFBekIsRUFBNkI7QUFDM0IsYUFBS1EsUUFBTCxDQUFjLEVBQUNQLGNBQWMsS0FBS0YsS0FBTCxDQUFXQyxLQUExQixFQUFkLEVBQWdELFlBQU07QUFDcEQsaUJBQUtGLEtBQUwsQ0FBV1csZUFBWCxDQUEyQixPQUFLVixLQUFMLENBQVdDLEtBQXRDO0FBQ0EsaUJBQUtRLFFBQUwsQ0FBYyxFQUFDUixPQUFPLEVBQVIsRUFBZDtBQUNELFNBSEQ7QUFJRDtBQUNGOzs7aUNBRVlJLEssRUFBTztBQUNsQixXQUFLSSxRQUFMLENBQWMsRUFBQ1IsT0FBT0ksTUFBTUMsTUFBTixDQUFhTCxLQUFyQixFQUFkO0FBQ0Q7Ozs2QkFHUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxjQUFiLEVBQTRCLE1BQUssR0FBakM7QUFBQTtBQUFBO0FBREo7QUFESixTQURGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxPQUFmO0FBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQWtCLG1CQUFLRCxLQUFMLENBQVdFO0FBQTdCO0FBQXZCLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sVUFBVSxLQUFLUyxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoQixFQUE4QyxjQUFhLE1BQTNEO0FBQ0UsNkNBQU8sV0FBVSxxQkFBakIsRUFBdUMsTUFBSyxnQkFBNUMsRUFBNkQsTUFBSyxNQUFsRSxFQUF5RSxPQUFPLEtBQUtaLEtBQUwsQ0FBV0MsS0FBM0YsRUFBa0csVUFBVSxLQUFLWSxZQUFMLENBQWtCRCxJQUFsQixDQUF1QixJQUF2QixDQUE1RyxFQUEwSSxhQUFZLDRCQUF0SixFQUFtTCxjQUFhLE1BQWhNLEdBREY7QUFFRSw2Q0FBTyxXQUFVLGlDQUFqQixFQUFtRCxNQUFLLFFBQXhELEVBQWlFLE9BQU0sUUFBdkU7QUFGRjtBQURGO0FBRkY7QUFQRixPQURGO0FBbUJEOzs7O0VBaERlRSxNQUFNQyxTOztBQW1EeEJDLE9BQU9sQixHQUFQLEdBQWFBLEdBQWIiLCJmaWxlIjoibmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTmF2IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgICAgY3VycmVudFRoZW1lOiAnZ2FsYXhvZGUnXG4gICAgfTtcblxuICB9XG5cbiAgaGFuZGxlU3VibWl0KCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5uYW1lKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIEVuc3VyZSBhbiBlbXB0eSBzdHJpbmcgY2Fubm90IGJlIHN1Ym1pdHRlZFxuICAgIGlmICh0aGlzLnN0YXRlLnZhbHVlICE9PSAnJykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudFRoZW1lOiB0aGlzLnN0YXRlLnZhbHVlfSwgKCkgPT4ge1xuICAgICAgICB0aGlzLnByb3BzLnVwZGF0ZUlkZW50aWNvbih0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6ICcnfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIjXCI+R2l0SHViIE1lbW9yeSBNYXRjaDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtYXJlYSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RoZW1lJz48c3Bhbj5pZGVudGljb246IHt0aGlzLnN0YXRlLmN1cnJlbnRUaGVtZX08L3NwYW4+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWJhcic+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0gYXV0b2NvbXBsZXRlPSdub3BlJz5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZ2l0aHViVXNlcm5hbWVGaWVsZCcgbmFtZT0nZ2l0aHViVXNlcm5hbWUnIHR5cGU9J3RleHQnIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX0gcGxhY2Vob2xkZXI9J0lucHV0IHlvdXIgZ2l0aHViIHVzZXJuYW1lJyBhdXRvY29tcGxldGU9J25vcGUnLz5cbiAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZ2l0aHViVXNlcm5hbWVCdXR0b24gYnRuIGJ0bi1zbScgdHlwZT0nc3VibWl0JyB2YWx1ZT0nU3VibWl0JyAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG53aW5kb3cuTmF2ID0gTmF2O1xuIl19