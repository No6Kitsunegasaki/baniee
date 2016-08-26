// Description:
//   recipi
// Commands:
//   baniee レシピ - kondate

module.exports = (robot => {
  robot.respond(/レシピ/i, (msg => {
    var re = [
      'もやしゆでてぽんず',
      'もやしいためてカレー粉まぶす',
      'もやし電子レンジでチンして酢醤油',
      'もやしに火を通して焼き肉のたれかけて食う',
      'こてっちゃんかってこい',
      'いもを電子レンジで七分バターとチン',
      'マヨと七味と卵とご飯混ぜて炒めて食え',
      'とりミンチとバジルとピーマン炒めてご飯に乗せる',
      'さきいかでだしをとって卵入れてしおこしょうでスープにしよう'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
