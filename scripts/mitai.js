// Description:
//   Mitai?
// Commands:
//   baniee 見たい？ - soudemonai

module.exports = (robot => {
  robot.respond(/見たい？|見たいか/i, (msg => {
    var re = [
      '一切見たくない',
      'みるものか'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
