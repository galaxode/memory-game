'use strict';

module.exports = {
  entry: ['./public/index.js'],
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader',
      query: {
        modules: true
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2suY29uZmlnLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJlbnRyeSIsIm91dHB1dCIsInBhdGgiLCJmaWxlbmFtZSIsImxvYWRlcnMiLCJ0ZXN0IiwiZXhjbHVkZSIsImxvYWRlciIsInF1ZXJ5IiwicHJlc2V0cyIsIm1vZHVsZXMiLCJyZXNvbHZlIiwiZXh0ZW5zaW9ucyJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNmQyxTQUFPLENBQUMsbUJBQUQsQ0FEUTtBQUVmQyxVQUFRO0FBQ05DLFVBQU0sVUFEQTtBQUVOQyxjQUFVO0FBRkosR0FGTztBQU1mTCxVQUFRO0FBQ05NLGFBQVMsQ0FDUDtBQUNFQyxZQUFNLFNBRFI7QUFFRUMsZUFBUyxjQUZYO0FBR0VDLGNBQVEsT0FIVjtBQUlFQyxhQUFPO0FBQ0xDLGlCQUFTLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsU0FBcEI7QUFESjtBQUpULEtBRE8sRUFTUDtBQUNFSixZQUFNLFFBRFI7QUFFRUUsY0FBUTtBQUZWLEtBVE8sRUFhUDtBQUNFRixZQUFNLFFBRFI7QUFFRUUsY0FBUSxZQUZWO0FBR0VDLGFBQU87QUFDTEUsaUJBQVM7QUFESjtBQUhULEtBYk87QUFESCxHQU5PO0FBNkJmQyxXQUFTO0FBQ1BDLGdCQUFZLENBQUMsRUFBRCxFQUFLLEtBQUwsRUFBWSxPQUFaLEVBQXFCLE1BQXJCO0FBREw7QUE3Qk0sQ0FBakIiLCJmaWxlIjoid2VicGFjay5jb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW50cnk6IFsnLi9wdWJsaWMvaW5kZXguanMnXSxcbiAgb3V0cHV0OiB7XG4gICAgcGF0aDogJy4vcHVibGljJyxcbiAgICBmaWxlbmFtZTogJ2J1bmRsZS5qcydcbiAgfSxcbiAgbW9kdWxlOiB7XG4gICAgbG9hZGVyczogW1xuICAgICAge1xuICAgICAgICB0ZXN0OiAvXFwuanN4PyQvLFxuICAgICAgICBleGNsdWRlOiAvbm9kZV9tb2R1bGVzLyxcbiAgICAgICAgbG9hZGVyOiAnYmFiZWwnLFxuICAgICAgICBxdWVyeToge1xuICAgICAgICAgIHByZXNldHM6IFsncmVhY3QnLCAnZXMyMDE1JywgJ3N0YWdlLTAnXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXN0OiAvXFwuY3NzJC8sXG4gICAgICAgIGxvYWRlcjogJ3N0eWxlLWxvYWRlcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRlc3Q6IC9cXC5jc3MkLyxcbiAgICAgICAgbG9hZGVyOiAnY3NzLWxvYWRlcicsXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgbW9kdWxlczogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgcmVzb2x2ZToge1xuICAgIGV4dGVuc2lvbnM6IFsnJywgJy5qcycsICcuanNvbicsICcuanN4J11cbiAgfVxufTsiXX0=