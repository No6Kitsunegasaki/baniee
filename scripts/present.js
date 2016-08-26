// Description:
//   present
// Commands:
//   baniee つ「にんじん」 - present for you

module.exports = (robot => {
  robot.respond(/[っつ][「【『].*[」】』]/i, (msg => {
    var re = [
      'ガツガツ…むしゃむしゃ…ドロリ'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
