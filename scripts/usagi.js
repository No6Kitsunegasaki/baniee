// Description:
//   うさぎのみみ
// Commands:
//   baniee うさぎのみみ - usamimi

module.exports = (robot => {
  robot.respond(/うさぎのみみ|うさぎの耳/i, (msg => {
    var re = [
      'しょくぱんのみみよりもこうきなあたいのおみみになんかよう！？',
      '耳トルネード！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
