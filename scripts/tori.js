// Description:
//   なんで
// Commands:
//   baniee なんで - why

module.exports = (robot => {
  robot.respond(/なんで/i, (msg => {
    var re = [
      'しるか',
      'あたいは知らん　ググれ',
      'まあ@penguinana のtwitter検索でけんさくしたらいい'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
