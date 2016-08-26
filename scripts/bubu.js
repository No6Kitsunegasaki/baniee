// Description:
//   デザトリアン
// Commands:
//   baniee デザトリアン - desire

module.exports = (robot => {
  robot.respond(/デザトリアン/i, (msg => {
    var re = [
      'ほわほわほわーん',
      '「パジャマで出社したっていいじゃないかー何が悪いんだー」（ガシャーン）',
      '社会人とは思えない通勤ファッション！もう私、堪忍袋の緒が切れました！',
      '「どこでカレーうどん食べたって自由じゃないかー」（がしゃーん）',
      '「もっとぺらぺらのスリッパで仕事したーい！」',
      '「木べらを持ったら踊るのはあたりまえじゃないかー」（がっしゃーん）',
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
