import request from 'request';

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/${
    process.env.FORECAST_ACCESS_TOKEN
  }/${encodeURIComponent(latitude)},${encodeURIComponent(
    longitude,
  )}?lang=pt&units=si`;
  request({ url, json: true }, (err, { body }) => {
    if (err) {
      callback('Weather service is unavailable', undefined);
    } else if (body.error) {
      callback(`${body.error}.`, undefined);
    } else {
      callback(undefined, {
        summary: body.daily.data[0].summary,
        temperature: body.currently.temperature,
        precipProbability: body.currently.precipProbability,
      });
    }
  });
};

export default forecast;
