import * as express from 'express';
const userService = require('./user.service');
const router = express.Router();

router.post('/api/1.0/users', async (req, res) => {
  await userService.save(req.body);
  return res.send({ message: 'You are onboard.' });
});

module.exports = router;
