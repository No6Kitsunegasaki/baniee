// Description:
//   eat
// Commands:
//   baniee おいしい？ - yummy

module.exports = (robot => {
  robot.respond(/おいしい？/i, (msg => {
    var re = [
      'ゲフー'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
