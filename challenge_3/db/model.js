const db = require('./index.js');


module.exports = {

  postToDb: (req, res) => {

    db.query(` INSERT INTO user_info (fullName, email, pword, address1, city, state1, zipcode, cardNum, expiration, cvv, billZip) VALUES("${req.name}","${req.email}","${req.password}","${req.address}","${req.city}","${req.state}",${req.zipcode1},${req.cardNum},"${req.expiration}", ${req.cvv}, ${req.billZip});`, (error, results,fields) => {
      if (error) {
        console.error(error)
      } else {
        console.log(results)
      }
    })

  }


}