
function caasControllers (app) {
  app.get('/', function (req, res) {
    res.render('home')
  })

  app.get('/nice/:from/:to', function (req, res) {
    var niceCompliment = {
      'message': 'You\'re a nice person ' + req.params.to,
      'from': req.params.from
    }
    res.format({
      html: function () {
        res.render('nice', {niceCompliment})
      },
      default: function () {
        res.send({niceCompliment})
      }
    })
  })

  app.get('/like/:from/:to', function (req, res) {
    var likeCompliment = {
      'message': 'I really like you ' + req.params.to,
      'from': req.params.from
    }
    res.format({
      html: function () {
        res.render('like', {likeCompliment})
      },
      default: function () {
        res.send({likeCompliment})
      }
    })
  })

  app.get('/happy/:from/:to', function (req, res) {
    var happyCompliment = {
      'message': req.params.to + ' You\'re such a happy person! ',
      'from': req.params.from
    }
    res.format({
      html: function () {
        res.render('happy', {happyCompliment})
      },
      default: function () {
        res.send({happyCompliment})
      }
    })
  })
}

module.exports = caasControllers
