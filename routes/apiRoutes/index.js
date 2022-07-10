const router = require('express').Router();
const bedRoutes = require('../apiRoutes/bedRoutes');
// const zookeeperRoutes = require('../apiRoutes/zookeeperRoutes');

router.use(bedRoutes);
// router.use(zookeeperRoutes);

module.exports = router;
