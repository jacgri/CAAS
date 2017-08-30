
function caasControllers(app) {

  app.get('/nice/:from/:to', function(req, res){
    res.send ({
      "message": "You\'re a nice person " + req.params.to, 
      "from": req.params.from})
  })

  app.get('/like/:from/:to', function(req, res){
    res.send ({
      "message": "I really like you " + req.params.to, 
      "from": req.params.from})
  })

  app.get('/happy/:from/:to', function(req, res){
    res.send ({
      "message": req.params.to + " You\'re such a happy person! ", 
      "from": req.params.from})
  })

}

module.exports = caasControllers