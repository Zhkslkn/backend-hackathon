const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports.login = async function(req, res) {
    const candidate = await User.findOne({
        iin: req.body.iin
    })

    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            const token = jwt.sign({
                iin: candidate.iin,
                userId: candidate._id
            }, 'dev-jwt', {expiresIn: 60 * 60})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: 'Пароли не совпадают. Поппробуйте снова.'
            })
        }
    } else {
        res.status(404).json({
            message: 'Пользователь с таким ИИН не найдено.'
        })
    }
}

module.exports.register = async function(req, res) {
    const candidate = await User.findOne({
        iin: req.body.iin
    })

    if (candidate) {
        res.status(409).json({
            message: 'Такой ИИН уже существует. Попробуйте другой.'
        })
    } else {
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            iin: req.body.iin,
            name: req.body.name,
            surname: req.body.surname,
            avatar: '5.png',
            phone: '',
            projectTheme: '',
            subject: '',
            password: bcrypt.hashSync(password, salt)
        })

        try {
            await user.save()
            res.status(201).json(user)
        } catch (error) {
            console.log(error)
        }

    }
}

module.exports.getUserById = async function(req, res) {
    const userId = req.body.id;

    try {
        const user = await User.findById(userId);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
