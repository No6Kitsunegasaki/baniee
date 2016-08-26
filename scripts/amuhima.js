// Description:
//   あむひまが来たらー？
// Commands:
//   baniee あむひまが来たらー？ - tatake

module.exports = (robot => {
  robot.respond(/が来たらー？|がきたらー？/i, (msg => {
    var re = [
      'たたけ〜'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
