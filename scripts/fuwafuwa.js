// Description:
//   ふわふわ
// Commands:
//   baniee ふわふわ - fuwaring

module.exports = (robot => {
  robot.respond(/ふわふわ/i, (msg => {
    var re = [
      'ふわふわするなー！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
