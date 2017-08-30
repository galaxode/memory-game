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
      } else {
        alert('GitHub username field must not be empty.');
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ value: event.target.value });
    }
  }, {
    key: 'handleTooltipClick',
    value: function handleTooltipClick() {
      alert('A GitHub username is required to change the identicon theme.\n\nAn identicon is a hash of your username which GitHub uses as your default profile pic. Input your own username to see your unique identicon.');
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
              'identicon theme: ',
              this.state.currentTheme
            )
          ),
          React.createElement(
            'div',
            { className: 'input-bar' },
            React.createElement(
              'form',
              { onSubmit: this.handleSubmit.bind(this), autocomplete: 'nope' },
              React.createElement('span', { className: 'glyphicon glyphicon-question-sign', onClick: this.handleTooltipClick }),
              React.createElement('input', { className: 'githubUsernameField', name: 'githubUsername', type: 'text', value: this.state.value, onChange: this.handleChange.bind(this), placeholder: 'Input a GitHub username', autocomplete: 'nope' }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jb21wb25lbnRzL25hdi5qcyJdLCJuYW1lcyI6WyJOYXYiLCJwcm9wcyIsInN0YXRlIiwidmFsdWUiLCJjdXJyZW50VGhlbWUiLCJjb25zb2xlIiwibG9nIiwiZXZlbnQiLCJ0YXJnZXQiLCJuYW1lIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsInVwZGF0ZUlkZW50aWNvbiIsImFsZXJ0IiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZVRvb2x0aXBDbGljayIsImhhbmRsZUNoYW5nZSIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU8sRUFESTtBQUVYQyxvQkFBYztBQUZILEtBQWI7O0FBSGlCO0FBUWxCOzs7O21DQUVjO0FBQUE7O0FBQ2JDLGNBQVFDLEdBQVIsQ0FBWUMsTUFBTUMsTUFBTixDQUFhQyxJQUF6QjtBQUNBRixZQUFNRyxjQUFOO0FBQ0E7QUFDQSxVQUFJLEtBQUtSLEtBQUwsQ0FBV0MsS0FBWCxLQUFxQixFQUF6QixFQUE2QjtBQUMzQixhQUFLUSxRQUFMLENBQWMsRUFBQ1AsY0FBYyxLQUFLRixLQUFMLENBQVdDLEtBQTFCLEVBQWQsRUFBZ0QsWUFBTTtBQUNwRCxpQkFBS0YsS0FBTCxDQUFXVyxlQUFYLENBQTJCLE9BQUtWLEtBQUwsQ0FBV0MsS0FBdEM7QUFDQSxpQkFBS1EsUUFBTCxDQUFjLEVBQUNSLE9BQU8sRUFBUixFQUFkO0FBQ0QsU0FIRDtBQUlELE9BTEQsTUFLTztBQUNMVSxjQUFNLDBDQUFOO0FBQ0Q7QUFDRjs7O2lDQUVZTixLLEVBQU87QUFDbEIsV0FBS0ksUUFBTCxDQUFjLEVBQUNSLE9BQU9JLE1BQU1DLE1BQU4sQ0FBYUwsS0FBckIsRUFBZDtBQUNEOzs7eUNBRW9CO0FBQ25CVSxZQUFNLDhNQUFOO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx1QkFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsaUJBQWY7QUFDSTtBQUFBO0FBQUEsY0FBSyxXQUFVLGVBQWY7QUFDSTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxjQUFiLEVBQTRCLE1BQUssR0FBakM7QUFBQTtBQUFBO0FBREo7QUFESixTQURGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxPQUFmO0FBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQXdCLG1CQUFLWCxLQUFMLENBQVdFO0FBQW5DO0FBQXZCLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU0sVUFBVSxLQUFLVSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFoQixFQUE4QyxjQUFhLE1BQTNEO0FBQ0UsNENBQU0sV0FBVSxtQ0FBaEIsRUFBb0QsU0FBUyxLQUFLQyxrQkFBbEUsR0FERjtBQUVFLDZDQUFPLFdBQVUscUJBQWpCLEVBQXVDLE1BQUssZ0JBQTVDLEVBQTZELE1BQUssTUFBbEUsRUFBeUUsT0FBTyxLQUFLZCxLQUFMLENBQVdDLEtBQTNGLEVBQWtHLFVBQVUsS0FBS2MsWUFBTCxDQUFrQkYsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBNUcsRUFBMEksYUFBWSx5QkFBdEosRUFBZ0wsY0FBYSxNQUE3TCxHQUZGO0FBR0UsNkNBQU8sV0FBVSxpQ0FBakIsRUFBbUQsTUFBSyxRQUF4RCxFQUFpRSxPQUFNLFFBQXZFO0FBSEY7QUFERjtBQUZGO0FBUEYsT0FERjtBQW9CRDs7OztFQXREZUcsTUFBTUMsUzs7QUF5RHhCQyxPQUFPcEIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6Im5hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE5hdiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGN1cnJlbnRUaGVtZTogJ2dhbGF4b2RlJ1xuICAgIH07XG5cbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQubmFtZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBFbnN1cmUgYW4gZW1wdHkgc3RyaW5nIGNhbm5vdCBiZSBzdWJtaXR0ZWRcbiAgICBpZiAodGhpcy5zdGF0ZS52YWx1ZSAhPT0gJycpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRUaGVtZTogdGhpcy5zdGF0ZS52YWx1ZX0sICgpID0+IHtcbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVJZGVudGljb24odGhpcy5zdGF0ZS52YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiAnJ30pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdHaXRIdWIgdXNlcm5hbWUgZmllbGQgbXVzdCBub3QgYmUgZW1wdHkuJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgaGFuZGxlVG9vbHRpcENsaWNrKCkge1xuICAgIGFsZXJ0KCdBIEdpdEh1YiB1c2VybmFtZSBpcyByZXF1aXJlZCB0byBjaGFuZ2UgdGhlIGlkZW50aWNvbiB0aGVtZS5cXG5cXG5BbiBpZGVudGljb24gaXMgYSBoYXNoIG9mIHlvdXIgdXNlcm5hbWUgd2hpY2ggR2l0SHViIHVzZXMgYXMgeW91ciBkZWZhdWx0IHByb2ZpbGUgcGljLiBJbnB1dCB5b3VyIG93biB1c2VybmFtZSB0byBzZWUgeW91ciB1bmlxdWUgaWRlbnRpY29uLicpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZGVmYXVsdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5HaXRIdWIgTWVtb3J5IE1hdGNoPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1hcmVhJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGhlbWUnPjxzcGFuPmlkZW50aWNvbiB0aGVtZToge3RoaXMuc3RhdGUuY3VycmVudFRoZW1lfTwvc3Bhbj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtYmFyJz5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfSBhdXRvY29tcGxldGU9J25vcGUnPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ25cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvb2x0aXBDbGlja30+PC9zcGFuPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdnaXRodWJVc2VybmFtZUZpZWxkJyBuYW1lPSdnaXRodWJVc2VybmFtZScgdHlwZT0ndGV4dCcgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj0nSW5wdXQgYSBHaXRIdWIgdXNlcm5hbWUnIGF1dG9jb21wbGV0ZT0nbm9wZScvPlxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdnaXRodWJVc2VybmFtZUJ1dHRvbiBidG4gYnRuLXNtJyB0eXBlPSdzdWJtaXQnIHZhbHVlPSdTdWJtaXQnIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbndpbmRvdy5OYXYgPSBOYXY7XG4iXX0=