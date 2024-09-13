const db = require('../config/connection');
const { User, Survey } = require('../models');
const userSeeds = require('./userSeeds.json');
const surveySeeds = require('./surveySeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Survey', 'surveys'); //second one is 'collection' name. may need to come back and fix this. 
    await cleanDB('User', 'users');

    await User.create(userSeeds);

    for (let i = 0; i < surveySeeds.length; i++) {
      const { _id, username } = await Survey.create(surveySeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: username },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
