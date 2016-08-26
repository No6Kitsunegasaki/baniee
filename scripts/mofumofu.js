// Description:
//   もふもふ
// Commands:
//   baniee もふもふ - mofumofu

module.exports = (robot => {
  robot.respond(/もふもふ/i, (msg => {
    var re = [
      'な…っ///',
      'げほんげほん！',
      'さすぞ！',
      'なにするの！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
