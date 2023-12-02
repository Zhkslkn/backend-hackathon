const express = require('express')
const multer = require('multer');
const controller = require('../controllers/dashboard')
const router = express.Router()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/olympiad', controller.addToOlympiad)
router.post('/projects', controller.addToProjects)
router.post('/upload', upload.single('file'), controller.uploadFile)
router.get('/getFile/:fileId', controller.getFileById)


module.exports = router
