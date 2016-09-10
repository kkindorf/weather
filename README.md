# weather
A weather app built with React, Redux and Chartist

Overview
++++++++++

This is a basic weather app that has been built using React, Redux and Chartist. 
I am pulling in data from the Open Weather Maps API and I am using geolocation to display the current weather conditions to the user,
a chart that displays an hourly forecast and a second chart that displays a five day forecast. 

Both charts render the same data type of data for consistency. The charts are built as line charts that currently display the percentage of humidity and the 
degrees in fahrenheit. The great thing about the structure of this application is that I'll be able to adjust data as I see fit if I want
to make tweaks to what is being displayed. Chartist's ease of use allows for this type of flexibility.

Screenshots:
++++++++++
![alt tag](http://i.imgur.com/CIJdu4x.png)

The above image is of the application on a macbook air. My design concept for this application were aimed at simplicity for reading and
understanding the data being presented to the user. As you can see I have two components being rendered. The top level component is my currentWeatherContainer component. This is where I am displaying the city, temperature, description and icon. 
The second component is my hourly weather chart that displays lines depicting the current humidity in percent and temperature in fahrenheit.

![alt tag](http://i.imgur.com/98qRBJn.png)

Here is another image of the application with responsive features. The layout of the application is nearly the same. With the benefit of Chartist's built in responsiveness for charts, it was very easy to build this application the idea of making it responsive first and have the layout be adaptable to any screen size.
