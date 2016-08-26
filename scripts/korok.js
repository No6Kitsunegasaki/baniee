// Description:
//   ころくだよ
// Commands:
//   baniee ころくだよ - korok

module.exports = (robot => {
  robot.respond(/ころくだよ|ころくがきたらー/i, (msg => {
    var re = [
      '放てー！(ﾄﾞーﾝ)',
      '火あぶり！',
      'きつね色を濃くしてやれ',
      'レディガガのえりまきにしろ！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
