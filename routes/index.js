var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/news', function (req,res){
  var sinhviens = ['John', 'Alex', 'Marry'];
  res.render('news', { student: sinhviens});
})

module.exports = router;
