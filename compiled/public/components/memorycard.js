'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MemoryCard = function (_React$Component) {
  _inherits(MemoryCard, _React$Component);

  function MemoryCard(props) {
    _classCallCheck(this, MemoryCard);

    var _this = _possibleConstructorReturn(this, (MemoryCard.__proto__ || Object.getPrototypeOf(MemoryCard)).call(this, props));

    _this.state = {
      // GitHub api
      apiPath: 'https://galaxode:niccopants!99@api.github.com/users/',

      // To be filled in with response from GET request to GitHub api
      cardData: {},

      // This is a github identicon. It is hardcoded for now, but the plan is to
      // use the logged in user's github username for the identicon instead of
      // mine, which is 'galaxode'. We replace 'galaxode' with a diff username.
      cardBack: 'https://github.com/identicons/',

      flipped: false,

      foundMatch: false

    };
    return _this;
  }

  _createClass(MemoryCard, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // var component = this;
      //   $.get(this.state.apiPath + this.props.cardname, function(data) {
      //     component.setState({cardData: data});
      // });
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _this2 = this;

      console.log(this.props.choiceCount);
      if (!this.state.flipped && this.props.choiceCount < 2) {
        this.setState({ flipped: true });

        this.props.registerChoice(this.props.cardname, function (isMatch) {
          if (isMatch) {
            _this2.setState({ foundMatch: true });
          }
        });
      } else {
        console.log('You may not flip this card now.');
      }
    }
  }, {
    key: 'triggerUnflip',
    value: function triggerUnflip() {
      var _this3 = this;

      this.props.toggleTryAgain(function (done) {
        if (done) {
          _this3.setState({ flipped: false }, function () {});
        }
      });
    }
  }, {
    key: 'displayCard',
    value: function displayCard() {

      if (this.props.tryAgain) {
        this.triggerUnflip();
      }

      var cardname = this.props.cardname;
      var avatarURL = this.props.avatarURLs[cardname];

      if (this.props.foundMatch || this.state.foundMatch || this.state.flipped && !this.props.tryAgain && this.props.choiceCount <= 2) {

        return React.createElement('img', { className: cardname + ' card', src: avatarURL, width: '120' });
      } else if (this.state.flipped === false || this.props.tryAgain === false) {

        return React.createElement('img', { className: cardname + ' card', src: this.state.cardBack + this.props.identiconName, width: '120' });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return React.createElement(
        'span',
        { onClick: function onClick() {
            _this4.handleClick();
          } },
        this.displayCard()
      );
    }
  }]);

  return MemoryCard;
}(React.Component);

window.MemoryCard = MemoryCard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3B1YmxpYy9jb21wb25lbnRzL21lbW9yeWNhcmQuanMiXSwibmFtZXMiOlsiTWVtb3J5Q2FyZCIsInByb3BzIiwic3RhdGUiLCJhcGlQYXRoIiwiY2FyZERhdGEiLCJjYXJkQmFjayIsImZsaXBwZWQiLCJmb3VuZE1hdGNoIiwiY29uc29sZSIsImxvZyIsImNob2ljZUNvdW50Iiwic2V0U3RhdGUiLCJyZWdpc3RlckNob2ljZSIsImNhcmRuYW1lIiwiaXNNYXRjaCIsInRvZ2dsZVRyeUFnYWluIiwiZG9uZSIsInRyeUFnYWluIiwidHJpZ2dlclVuZmxpcCIsImF2YXRhclVSTCIsImF2YXRhclVSTHMiLCJpZGVudGljb25OYW1lIiwiaGFuZGxlQ2xpY2siLCJkaXNwbGF5Q2FyZCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLFU7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1hBLEtBRFc7O0FBSWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYO0FBQ0FDLGVBQVMsc0RBRkU7O0FBSVg7QUFDQUMsZ0JBQVUsRUFMQzs7QUFPWDtBQUNBO0FBQ0E7QUFDQUMsZ0JBQVUsZ0NBVkM7O0FBWVhDLGVBQVMsS0FaRTs7QUFjWEMsa0JBQVk7O0FBZEQsS0FBYjtBQUppQjtBQXFCbEI7Ozs7d0NBRW1CO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7OztrQ0FFYTtBQUFBOztBQUNaQyxjQUFRQyxHQUFSLENBQVksS0FBS1IsS0FBTCxDQUFXUyxXQUF2QjtBQUNBLFVBQUksQ0FBQyxLQUFLUixLQUFMLENBQVdJLE9BQVosSUFBdUIsS0FBS0wsS0FBTCxDQUFXUyxXQUFYLEdBQXlCLENBQXBELEVBQXVEO0FBQ3JELGFBQUtDLFFBQUwsQ0FBYyxFQUFDTCxTQUFTLElBQVYsRUFBZDs7QUFFQSxhQUFLTCxLQUFMLENBQVdXLGNBQVgsQ0FBMEIsS0FBS1gsS0FBTCxDQUFXWSxRQUFyQyxFQUErQyxVQUFDQyxPQUFELEVBQWE7QUFDMUQsY0FBSUEsT0FBSixFQUFhO0FBQ1gsbUJBQUtILFFBQUwsQ0FBYyxFQUFDSixZQUFZLElBQWIsRUFBZDtBQUNEO0FBQ0YsU0FKRDtBQUtELE9BUkQsTUFRTztBQUNMQyxnQkFBUUMsR0FBUixDQUFZLGlDQUFaO0FBQ0Q7QUFDRjs7O29DQUVlO0FBQUE7O0FBQ2QsV0FBS1IsS0FBTCxDQUFXYyxjQUFYLENBQTBCLFVBQUNDLElBQUQsRUFBVTtBQUNsQyxZQUFJQSxJQUFKLEVBQVU7QUFDUixpQkFBS0wsUUFBTCxDQUFjLEVBQUNMLFNBQVMsS0FBVixFQUFkLEVBQWdDLFlBQVcsQ0FFMUMsQ0FGRDtBQUdEO0FBQ0YsT0FORDtBQU9EOzs7a0NBR2E7O0FBR1osVUFBSSxLQUFLTCxLQUFMLENBQVdnQixRQUFmLEVBQXlCO0FBQ3ZCLGFBQUtDLGFBQUw7QUFDRDs7QUFFRCxVQUFNTCxXQUFXLEtBQUtaLEtBQUwsQ0FBV1ksUUFBNUI7QUFDQSxVQUFNTSxZQUFZLEtBQUtsQixLQUFMLENBQVdtQixVQUFYLENBQXNCUCxRQUF0QixDQUFsQjs7QUFFQSxVQUFJLEtBQUtaLEtBQUwsQ0FBV00sVUFBWCxJQUF5QixLQUFLTCxLQUFMLENBQVdLLFVBQXBDLElBQW1ELEtBQUtMLEtBQUwsQ0FBV0ksT0FBWCxJQUFzQixDQUFDLEtBQUtMLEtBQUwsQ0FBV2dCLFFBQWxDLElBQStDLEtBQUtoQixLQUFMLENBQVdTLFdBQVgsSUFBMEIsQ0FBaEksRUFBc0k7O0FBRXBJLGVBQU8sNkJBQUssV0FBV0csV0FBVyxPQUEzQixFQUFvQyxLQUFLTSxTQUF6QyxFQUFvRCxPQUFNLEtBQTFELEdBQVA7QUFDRCxPQUhELE1BR08sSUFBSSxLQUFLakIsS0FBTCxDQUFXSSxPQUFYLEtBQXVCLEtBQXZCLElBQWdDLEtBQUtMLEtBQUwsQ0FBV2dCLFFBQVgsS0FBd0IsS0FBNUQsRUFBbUU7O0FBRXhFLGVBQU8sNkJBQUssV0FBV0osV0FBVyxPQUEzQixFQUFvQyxLQUFLLEtBQUtYLEtBQUwsQ0FBV0csUUFBWCxHQUFzQixLQUFLSixLQUFMLENBQVdvQixhQUExRSxFQUF5RixPQUFNLEtBQS9GLEdBQVA7QUFDRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFLUCxhQUNFO0FBQUE7QUFBQSxVQUFNLFNBQVMsbUJBQU07QUFBQyxtQkFBS0MsV0FBTDtBQUFtQixXQUF6QztBQUNHLGFBQUtDLFdBQUw7QUFESCxPQURGO0FBS0Q7Ozs7RUF0RnNCQyxNQUFNQyxTOztBQTBGL0JDLE9BQU8xQixVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJtZW1vcnljYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTWVtb3J5Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgLy8gR2l0SHViIGFwaVxuICAgICAgYXBpUGF0aDogJ2h0dHBzOi8vZ2FsYXhvZGU6bmljY29wYW50cyE5OUBhcGkuZ2l0aHViLmNvbS91c2Vycy8nLFxuXG4gICAgICAvLyBUbyBiZSBmaWxsZWQgaW4gd2l0aCByZXNwb25zZSBmcm9tIEdFVCByZXF1ZXN0IHRvIEdpdEh1YiBhcGlcbiAgICAgIGNhcmREYXRhOiB7fSxcblxuICAgICAgLy8gVGhpcyBpcyBhIGdpdGh1YiBpZGVudGljb24uIEl0IGlzIGhhcmRjb2RlZCBmb3Igbm93LCBidXQgdGhlIHBsYW4gaXMgdG9cbiAgICAgIC8vIHVzZSB0aGUgbG9nZ2VkIGluIHVzZXIncyBnaXRodWIgdXNlcm5hbWUgZm9yIHRoZSBpZGVudGljb24gaW5zdGVhZCBvZlxuICAgICAgLy8gbWluZSwgd2hpY2ggaXMgJ2dhbGF4b2RlJy4gV2UgcmVwbGFjZSAnZ2FsYXhvZGUnIHdpdGggYSBkaWZmIHVzZXJuYW1lLlxuICAgICAgY2FyZEJhY2s6ICdodHRwczovL2dpdGh1Yi5jb20vaWRlbnRpY29ucy8nLFxuXG4gICAgICBmbGlwcGVkOiBmYWxzZSxcblxuICAgICAgZm91bmRNYXRjaDogZmFsc2VcblxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyB2YXIgY29tcG9uZW50ID0gdGhpcztcbiAgICAvLyAgICQuZ2V0KHRoaXMuc3RhdGUuYXBpUGF0aCArIHRoaXMucHJvcHMuY2FyZG5hbWUsIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyAgICAgY29tcG9uZW50LnNldFN0YXRlKHtjYXJkRGF0YTogZGF0YX0pO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5wcm9wcy5jaG9pY2VDb3VudCk7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmZsaXBwZWQgJiYgdGhpcy5wcm9wcy5jaG9pY2VDb3VudCA8IDIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2ZsaXBwZWQ6IHRydWV9KTtcblxuICAgICAgdGhpcy5wcm9wcy5yZWdpc3RlckNob2ljZSh0aGlzLnByb3BzLmNhcmRuYW1lLCAoaXNNYXRjaCkgPT4ge1xuICAgICAgICBpZiAoaXNNYXRjaCkge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZvdW5kTWF0Y2g6IHRydWV9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdZb3UgbWF5IG5vdCBmbGlwIHRoaXMgY2FyZCBub3cuJyk7XG4gICAgfVxuICB9XG5cbiAgdHJpZ2dlclVuZmxpcCgpIHtcbiAgICB0aGlzLnByb3BzLnRvZ2dsZVRyeUFnYWluKChkb25lKSA9PiB7XG4gICAgICBpZiAoZG9uZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtmbGlwcGVkOiBmYWxzZX0sIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIGRpc3BsYXlDYXJkKCkge1xuXG5cbiAgICBpZiAodGhpcy5wcm9wcy50cnlBZ2Fpbikge1xuICAgICAgdGhpcy50cmlnZ2VyVW5mbGlwKCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZG5hbWUgPSB0aGlzLnByb3BzLmNhcmRuYW1lO1xuICAgIGNvbnN0IGF2YXRhclVSTCA9IHRoaXMucHJvcHMuYXZhdGFyVVJMc1tjYXJkbmFtZV07XG5cbiAgICBpZiAodGhpcy5wcm9wcy5mb3VuZE1hdGNoIHx8IHRoaXMuc3RhdGUuZm91bmRNYXRjaCB8fCAodGhpcy5zdGF0ZS5mbGlwcGVkICYmICF0aGlzLnByb3BzLnRyeUFnYWluICYmICh0aGlzLnByb3BzLmNob2ljZUNvdW50IDw9IDIpKSApIHtcblxuICAgICAgcmV0dXJuIDxpbWcgY2xhc3NOYW1lPXtjYXJkbmFtZSArICcgY2FyZCd9IHNyYz17YXZhdGFyVVJMfSB3aWR0aD0nMTIwJyAvPlxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5mbGlwcGVkID09PSBmYWxzZSB8fCB0aGlzLnByb3BzLnRyeUFnYWluID09PSBmYWxzZSkge1xuXG4gICAgICByZXR1cm4gPGltZyBjbGFzc05hbWU9e2NhcmRuYW1lICsgJyBjYXJkJ30gc3JjPXt0aGlzLnN0YXRlLmNhcmRCYWNrICsgdGhpcy5wcm9wcy5pZGVudGljb25OYW1lfSB3aWR0aD0nMTIwJyAvPlxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuXG5cblxuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiB7dGhpcy5oYW5kbGVDbGljaygpfX0+XG4gICAgICAgIHt0aGlzLmRpc3BsYXlDYXJkKCl9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG5cblxud2luZG93Lk1lbW9yeUNhcmQgPSBNZW1vcnlDYXJkO1xuIl19