const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    // replace this with res.render when we have views set up
    res.status(200).render('login');
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
