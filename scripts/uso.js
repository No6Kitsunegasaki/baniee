// Description:
//   Uso
// Commands:
//   baniee 嘘 - lie

module.exports = (robot => {
  robot.respond(/うそ|ウソ|嘘/i, (msg => {
    var re = [
      'しんじるものか',
      'またあたいをだまそうとして！',
      'うそつきぶーぶー！',
      'しってるんだから！うそね！',
      'エイプリルフールくらいしってます',
      'うそつきは死ぬよ！',
      'ふーん…そうなん…ってしんじるもんですかぁ！うそね！',
      'きょうだけはだれもしんじないわ！',
      'あんたのかお、嘘でたにんをおとしめてきたにんげんのかおよ！',
      'うそにんげんめ！',
      'うそをつくにんげんのしゅうかんをうたがうわ！',
      'うそでうそをかためてもいいことないからうそつくのやめて！',
      'ふわふわ',
      'うそだよ！あんたあたいをゆだんさせてけがわをはぐつもりね！',
      'うそにちがいないわ！',
      'だまされないんだから！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
