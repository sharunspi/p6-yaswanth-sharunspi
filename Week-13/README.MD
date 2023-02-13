# Weather app

'PDF' Week-13 Architecture and design pattern documentation - Sharun contains the API architecture of the weather app

## API 1

Data of Multiple cities
Api which returns weather data of multiple cities .
Api also filters the result by city name or city code.
Api should return the data in pagination

End point: /weather-mutiple-cities?filterType=$type&limit=$num

## API 2

Detailed Forecast for the next X days.
X days should be decided by the user.Data should be very detailed.

End point: /weather-forecast/cityCode$cityCode?noOfDays=$noOfDays

## API 3

Filter the data by any particular city, any particular date , any particular moment

End point: /weather-data-by-city/$cityCode?date=$date&time=$time

## API 4

Current weather conditions of any particular city

End point: /weather-data-by-city/$cityCode
