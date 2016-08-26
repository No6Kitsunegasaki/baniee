// Description:
//   Cute
// Commands:
//   baniee かわいい - so cute

module.exports = (robot => {
  robot.respond(/かわいい/i, (msg => {
    var re = [
      'うおーしんじるものか！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
