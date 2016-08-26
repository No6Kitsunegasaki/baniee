// Description:
//   おはよう
// Commands:
//   baniee おはよう - good morning

module.exports = (robot => {
  robot.respond(/おはよう|こんにちは/i, (msg => {
    var re = [
      'よう',
      'ヤーヤーイェアチェケ'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
