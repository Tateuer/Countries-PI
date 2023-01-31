const { Router } = require('express');
const  {countryDb} =  require('./functions');
const { Country, Activity } = require('../db');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
  
router.get('/countries', async(req, res) => {
    const name = req.query.name;
    console.log(name)
    try {
        const allCountries = await countryDb();
		if (name) {
			const founds = allCountries.filter(el =>
				el.name.toLowerCase().includes(name.toLowerCase())
			);
			founds.length
				? res.status(200).send(founds)
				: res.status(404).send("No matches found ");
		}
		res.status(200).send(allCountries);
     } catch (error) {      
    }  
});
router.get('/countries/:id', async (req, res) => {
     const {id} = req.params;    
    try {
        const country = await Country.findByPk(id, {
            include: Activity
        }); 
        if(country){
            res.status(200).send(country);
        }else{
            res.status(404).send({error: "Country not found"});
        }
    } catch (error) {
        res.status(400).send({error: error.message});
    }  
});
router.post('/activities', async (req, res) => {
    try {
        const activity = await Activity.create({
            id: req.body.id,
            name: req.body.name,
            difficulty: req.body.difficulty,
            duration: req.body.duration,
            season: req.body.season, 
            countries: req.body.countries,  
        });
        await activity.addCountries(req.body.countries);
        res.status(201).send({message:"Activity created succesfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/activities', async (req, res) => {
       try {
            const activities = await Activity.findAll({  
                include: [{
                model: Country,
                attributes: ['id']
            }] 
        })
                   return res.json(activities) 
    } catch (error) {
           res.send(error)
    }
});




module.exports = router;