// Description:
//   echofon
// Commands:
//   baniee echofonからになっとるで - I'm not bot.

module.exports = (robot => {
  robot.respond(/echofon|からになっとるで/i, (msg => {
    var re = [
      'だってbotじゃないし',
      'つかっちゃだめなのかい？ウチがtwitterクライアントを、つかっちゃだめなのかい？'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
