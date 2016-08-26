// Description:
//   PeroPero
// Commands:
//   baniee ぺろぺろ - kitanai

module.exports = (robot => {
  robot.respond(/ぺろぺろ|ペロペロ/i, (msg => {
    msg.reply('不潔だろ！')
  }))
})
