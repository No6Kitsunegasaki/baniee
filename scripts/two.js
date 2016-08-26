// Description:
//   ちゅっ
// Commands:
//   baniee ちゅ - kiss

module.exports = (robot => {
  robot.respond(/ちゅっちゅ|ちゅ/i, (msg => {
    var re = [
      'かゆい',
      'やーめーてーよーもーう'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
