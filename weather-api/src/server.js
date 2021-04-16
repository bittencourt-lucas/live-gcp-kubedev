import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import geocode from './utils/geocode';
import forecast from './utils/forecast';

const app = express();
const port = 3011;

app.use(express.json());
app.use(cors());

app.get('/weather', (req, res) => {
  const { address } = req.query;

  if (!address) {
    return res.json({
      error: 'Address must be provided',
    });
  }

  geocode(address, (geocodeError, { location, latitude, longitude } = {}) => {
    if (geocodeError) {
      return res.json({
        error: geocodeError,
      });
    }

    forecast(
      latitude,
      longitude,
      (err, { summary, temperature, precipProbability }) => {
        if (err) {
          return res.json({
            err,
          });
        }
        return res.json({
          location,
          summary,
          temperature,
          precipProbability,
        });
      },
    );
  });
});

app.listen(port, () => {});
