// Description:
//   風早くんは実在するのか
// Commands:
//   baniee 風早くん - existed

module.exports = (robot => {
  robot.respond(/風早くん/i, (msg => {
    var re = [
      'いるよね！',
      'いないかも！',
      'いなくもない！',
      'いるもん！',
      'いるいる！',
      'いるから！',
      'いるってば！',
      'いるとのこと！',
      'いる(いる)！',
      'いるもん！なくし！',
      'いるよ！いるいる！',
      'いるし！',
      'いるーーー！',
      'いるのよう！',
      'いるんだもん！',
      'いるっつーの！',
      'いるよ！',
      'いるもんね！',
      'いるんだって！',
      'いる！',
      'いるよーっ！',
      'いるもの！',
      'いるってば！'
    ]
    msg.reply(re[Math.floor(Math.random() * (re.length))])
  }))
})
