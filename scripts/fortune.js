// Description:
//   fortune
// Commands:
//   baniee show run - show run

module.exports = (robot => {
  robot.respond(/show run/i, (msg => {
    var re = [
      'Software Version Bani,',
      'set int R-ear ip address 10.1.1.1 255.255.255.0'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
