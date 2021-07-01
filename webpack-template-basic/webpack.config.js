// node.js 에서 작동.

// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
  // parcel index.html
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js', // html이 아닌 js를 진입점으로 설정.

  // 결과물(번들)을 반환하는 설정
  output: {
    // path: path.resolve(__dirname, 'dist'), //__dirname : 현재파일이 있는 그 경로를 지정. (+dist = 절대경로)
    // filename: 'main.js',
    // 기존에 남겨져 있던 내용 제거.
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/, // .css라는 확장자로 끝나는 것을 찾는 정규표현식 (s? : s가 있을수도 없을수도 있다.)
        use: [ // 순서 중요! 아래에서 위로!
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정.
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}