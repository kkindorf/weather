# weather
A weather app built with React, Redux and Chartist

Overview


This is a basic weather app that has been built using React, Redux and Chartist. 
I am pulling in data from the Open Weather Maps API and I am using geolocation to display the current weather conditions to the user,
a chart that displays an hourly forecast and a second chart that displays a five day forecast. 

Both charts render the same data type of data for consistency. The charts are built as line charts that currently display the percentage of humidity and the 
degrees in fahrenheit. The great thing about the structure of this application is that I'll be able to adjust data as I see fit if I want
to make tweaks to what is being displayed. Chartist's ease of use allows for this type of flexibility.

Screenshots:

![alt tag](http://i.imgur.com/Z4KGkdL.png)

The above image is of the application on a macbook air. My design concept for this application was aimed towards simplicity for reading. The top level component is my currentWeatherContainer component. This is where I am displaying the city, temperature, description and icon. The second component is my hourly weather chart that displays lines depicting the current humidity in percent and temperature in fahrenheit.
