const Olympiad = require("../models/olympiad")
const Projects = require("../models/Projects")
const File = require("../models/File")
module.exports.addToOlympiad = async function(req, res) {
    const candidate = await Olympiad.findOne({
        iin: req.body.iin
    })

    if (candidate) {
        res.status(401).json({
            message: 'Вы уже зарегистрированы на другую олимпиаду.'
        })
    } else {
        const user = new Olympiad({
            name: req.body.name,
            surname: req.body.surname,
            class: req.body.class,
            subject: req.body.subject,
            teacherName: req.body.teacherName,
            teacherSurname: req.body.teacherSurname,
            iin: req.body.iin
        })

        try {
            await user.save()
            res.status(201).json(user)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports.addToProjects = async function(req, res) {

    const project = new Projects({
        projectName: req.body.projectName,
        subject: req.body.subject,
        nameFirst: req.body.nameFirst,
        surnameFirst: req.body.surnameFirst,
        iinFirst: req.body.iinFirst,
        nameSecond: req.body.nameSecond,
        surnameSecond: req.body.surnameSecond,
        iinSecond: req.body.iinSecond,
        nameThird: req.body.nameThird,
        surnameThird: req.body.surnameThird,
        iinThird: req.body.iinThird,
        nameFourth: req.body.nameFourth,
        surnameFourth: req.body.surnameFourth,
        iinFourth: req.body.iinFourth,
        projectFile: req.body.projectFile,
    })

    try {
        await project.save()
        res.status(201).json(project)
    } catch (error) {
        console.log(error)
    }
}

module.exports.uploadFile = async function(req, res) {
    try {
        const fileData = req.file.buffer;
        const contentType = req.file.mimetype;

        // Сохранение в базу данных
        const newFile = new File({
            data: fileData,
            contentType: contentType,
            // Другие поля, если необходимо
        });
        await newFile.save();

        res.status(201).json({ message: 'File uploaded and saved successfully', newFile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports.getFileById = async function(req, res) {
    try {
        const fileId = req.params.fileId;
        const file = await File.findById(fileId);

        if (!file) {
            return res.status(404).json({ error: 'File not found' });
        }

        res.set('Content-Type', file.contentType);
        res.send(file.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
