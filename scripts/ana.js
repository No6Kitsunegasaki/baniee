// Description:
//   アナ・コッポラ
// Commands:
//   baniee アナちゃん - Ana Coppola

module.exports = (robot => {
  robot.respond(/アナちゃん/i, (msg => {
    var re = [
      'ともだち！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
