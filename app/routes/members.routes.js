const auth = require('../middleware/auth.js');
var multer = require('multer');
var crypto = require('crypto');
var mime = require('mime-types');
var config = require('../../config/app.config.js');

var storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            if (err) return cb(err)

            cb(null, raw.toString('hex') + "." + mime.extension(file.mimetype))
        })
    }
});
var userImageUpload = multer({ storage: storage });
module.exports = (app) => {
    const member = require('../controllers/members.controller.js');
    app.post('/members/add-member',auth,userImageUpload.single('image'),member.addMember);
    app.get('/members/list-member',auth, member.listMember);
    app.get('/members/personal-info/:id',auth, member.personalInfo);
    app.post('/members/add-existingTasks',auth, member.addExisting);
    app.get('/members/list-task/:id',auth, member.listTask);
    app.patch('/members/update-task/:id',auth, member.updateTask);
    app.delete('/members/delete-task/:id',auth, member.deleteTask);
    app.get('/members/list-positions',auth, member.listPositions);
};

