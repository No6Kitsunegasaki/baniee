// Description:
//   モンゴル人
// Commands:
//   baniee モンゴル人 - Mongolian

module.exports = (robot => {
  robot.respond(/モンゴル人/i, (msg => {
    var re = [
      'モンゴルマン！',
      'ドルジ！',
      'チンギスハン！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
