// Description:
//   baka
// Commands:
//   baniee バカ - baka

module.exports = (robot => {
  robot.respond(/バカ|ばか|死ね|クズ|くず/i, (msg => {
    var re = [
      ' がいじめる……',
      ' がいじわるいうよー！たすけて-!',
      'そういう口の聞き方じゃ将来おそろしいことになるよ',
      'できたらたにんにそういうこというのやめな',
      'やめなよ、もう(人生を)',
      ' あたいもう月に帰る！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
