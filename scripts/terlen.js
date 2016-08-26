// Description:
//   ter len 0
// Commands:
//   baniee ter len 0 - terminal length 0

module.exports = (robot => {
  robot.respond(/ter len 0/i, (msg => {
    var re = [
      'Cisco!',
      'IOS is OS of Cisco!!!'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
