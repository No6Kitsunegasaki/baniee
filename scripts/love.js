// Description:
//   love
// Commands:
//   baniee 好き - love

module.exports = (robot => {
  robot.respond(/好き/i, (msg => {
    var re = [
      'ふーん'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
