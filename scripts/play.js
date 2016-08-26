// Description:
//   あそぼう
// Commands:
//   baniee あそぼう - let's play!

module.exports = (robot => {
  robot.respond(/あそぼう|遊んで/i, (msg => {
    var re = [
      'わあ！うさぎ、ばんざい！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
