module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'src/components/Main.js',
      SearchBar: 'src/components/SearchBar.js',
      SearchButton: 'src/components/SearchButton.js',
      TaskBar: 'src/components/TaskBar.js',
      CheckBox: 'src/components/CheckBox.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    inline: true
  },
  devtool: "cheap-module-eval-source-map"
};
