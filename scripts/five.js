// Description:
//   ありがと
// Commands:
//   baniee ありがと - thx

module.exports = (robot => {
  robot.respond(/ありがと|いいこ/i, (msg => {
    var re = [
      'にこ！',
      'ゲヘヘ'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
