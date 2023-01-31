/*const { Router } = require('express');
const router = Router();
const { Activity, Country } = require('../db')

router.get('/', async (req, res) => {
    try {
            const activities = await Activity.findAll({  
                include: Country  
                })
                return res.json(activities) 
    } catch (error) {
        res.send(error)
    }
})

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countryId} = req.body

    try {
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })

        const pushCountry = await Country.findOne({
            where: {
                id: countryId,
            }
        })
        await newActivity.addCountry(pushCountry)  
        res.sendStatus(201)

    } catch (error) {
        res.send(error)
    }
})


module.exports = router;
*/