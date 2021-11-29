const profileData = require('../../Practice/ReduxExamples/reducers/data/profileData.json');

module.exports = (app) => {

    const getProfile = (req, res) => {
        res.json(profileData);
    }

    const saveProfile = (req, res) => {
        profile = profileData.map(profile => {
            return profile
        });
        res.sendStatus(200);
    }

    app.put('/api/profile', saveProfile);

    app.get('/api/profile', getProfile);
};
