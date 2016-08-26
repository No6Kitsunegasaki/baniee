// Description:
//   サンプル
// Commands:
//   baniee 電流爆破が見たいか - call and response

module.exports = (robot => {
  robot.respond(/電流爆破が見たいか/i, (msg => {
    var re = [
      '見たいです！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
