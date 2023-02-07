module.exports = () => ({
  plugins: [
    require('postcss-pxtorem')({
      rootValue: 10,
      propList: ['*']
    })
  ]
});