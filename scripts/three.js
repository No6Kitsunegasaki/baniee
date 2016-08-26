// Description:
//   おやすみ
// Commands:
//   baniee おやすみ - good night

module.exports = (robot => {
  robot.respond(/おやすみ|ばいばい/i, (msg => {
    var re = [
      'またね！',
      'ちゃんとねろよ！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
