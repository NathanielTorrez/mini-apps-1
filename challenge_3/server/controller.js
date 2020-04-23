const model = require('../db/model.js')

module.exports = {

  sendToDb: (req, res) => {

    model.postToDb(req.body, res)
    res.status(200)
    res.end()
  }

}