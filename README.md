        ____  _________ __________ _    ____________ 
       / __ \/  _/ ___// ____/ __ \ |  / / ____/ __ \
      / / / // / \__ \/ /   / / / / | / / __/ / /_/ /
     / /_/ // / ___/ / /___/ /_/ /| |/ / /___/ _, _/ 
    /_____/___//____/\____/\____/ |___/_____/_/ |_|  

 

## Overview  
Discover is designed for those looking to explore the world.
With a simple to use map which works on all devices you can search for hotels, bars, restaurants and more anywhere around the globe.
This information contains contact details and star ratings to make your dinning, accommodation or travel decisions a smooth and user-friendly experience.

## UX 
Discover is for users looking for an easy way to search popular locations around the world, it allows users to choose between a Country selector and city input search bar to be shown on the map different Locations, Attractions, Accommodation, Restaurants, Bars, Banks and airports. By searching the location then choosing Hotels the user will be shown all the Hotels in that area with contact details and useful information.

## User Stories   
-	As a user, looking to travel to a new city, I want to find Hotels and Bars within the area of interest.
1. I can search hotels by chosing the country drop down, enter the city and click hotels
2. I can also search museums, restaurants, bars, airports and banks.


-	As a user not knowing where I would like to travel I can use one of the YouTube links to get hints of great tourism destinations. Then use this website to find more information.
1. Not knowing exactly where I want to travel next and staying on Discover site I can view youtube videos of popular destinations.
2. watch other related videos of destinations 

-	As a user looking to ‘Bar Hop’ through the USA I can use the ‘Bar’ selector and find Pubs and cocktail bars in the location of interest.
1. Starting in the city I can search bar after bar using Discover to find all the top star rated bars around.
2. I can choose my hotel which  is suited to the spot with higher class bars.
3. Using the Restaurants selector to dine while out on the town.

-  As a user looking to advertise on websites.
1. I am able to directly contact the Developer to  enquire about paid advertising.

## Wireframes 
[wireframe mock-up](https://github.com/CaseyScott/milestone-2-interactive-frontend/blob/master/assets/images/mockup.png)

## Features:  
-	Discover uses Google Maps api which displays the maps of their Searched country and city in either the website window view or they can choose to go full screen.  
-	By also using Google Places api, Discover allows users to choose one of the selectors to search different options in their desired location e.g.  Australia / Brisbane/ Hotel.   
-	The YouTube links show users some of the top travel destinations around the world, they are there to inspire places of tourism. 
-	The general enquiries email form is to make direct contact with the developer for Bug reports, advertising on this site, business partnerships or general questions.  

## Features left to implement:  
-	Paid advertisements  

## Technologies Used
- This project uses HTML, CSS and JavaScript programming languages.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [BootstrapCDN](https://www.bootstrapcdn.com/)
    - The project uses **Bootstrapv3.3.7** to simplify the structure of the website and make the website responsive easily.
    - The project also uses BootstrapCDN to provide icons from [FontAwesome](https://www.bootstrapcdn.com/fontawesome/)
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google fonts** to style the website fonts.
- [Emailjs](http://www.emailjs.com/) Emailjs allows users to send emails from JavaScript.
- [Jasmine](https://jasmine.github.io/)
    - This project used **Jasmine** to automatically test all JavaScript and jQuery code.
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/)
    
## Testing  
-	The code has been written and tested in Cloud9 and Google Chrome Developer Tools.  
-	[HTML]( https://validator.w3.org/) code has been tested with mark-up validation service  
-	[CSS](https://jigsaw.w3.org/css-validator/) code has been tested with  CSS validation service  
-	[Javascript](https://www.jslint.com/) and jQuery code has been tested using JSLint  
-	[Jasmine](https://jasmine.github.io/) testing for email 
-   Email function was tested using Gmail and Emailjs.

### Bugs fixed
1. city search bar not emptying after country dropdown changed. fixed by switch the country dropdown and search bar positions.
2. email accepting any input fixed by using pattern=".+@" making it only accept input with @ in it.
3. Testing to ensure the Googles Maps API and Google Places API have been connected to the deployed GitHub Pages. Setting both API to enabled on Google map javascript api website.
4. markers on map not clearing after changing search area. Fixed with clearMarkers onclick function.
5. Markers not showing in side panel on desktop, google chrome extensions (adblocker) disabling image or marker. (adblocker needs to be allowed on the page to work)

### Browser testing for all features: 
- Testing screen sizing.
- Map in standard view and full screen.
- Selector radio buttons.
- Email test sent.
- Youtube links.
#### All tested in the following browsers:
-	Google Chrome  
-	Mozilla Firefox  
-	Opera  
-	Microsoft Edge  



## Deployment
This project was developed using Cloud9  IDE.  
Committed to git and pushed to GitHub.  
Discover has been deployed using GitHub Pages  

## To run the deployed website simply click the link below.  
https://caseyscott.github.io/Discover-travel/  

### How to Clone
1. Using this link [Github](https://github.com/CaseyScott/milestone-2-interactive-frontend)
2. On GitHub, navigate to the main page of the repository
3. Click Clone Or Download.
4. On the Clone with HTTPS pop up, copy the clone URL for the repository.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. In a linux enviroment like cloud9 IDE type git clone then paste the URl from the clone with HTTPS

- For other ways to clone or other information about cloning a repository [GitHub.com](https://caseyscott.github.io/Discover-travel/)

### Making changes
1. From the clone you as a developer can make changes to the repository
2. Once your changes have been testing you can set up your GitHub pages to Deploy automatically when ever you push to GitHub.
3. In GitHub navigate to your `<username>.github.io` repository and click Settings
4. Within Settings, navigate to the Source section within the GitHub Pages section. From the dropdown menu, selet master branch and then click Save.
5. Now that your GitHub pages site is set up, you can use `git commit` and `git push` to send yours changes to GitHub.
 

## Media  
-	The you tube videos used in this website were obtained from top search results  
-	The background image was obtained for google images
-	maps obtained from googles map api

## Credits 
-   JavaScript Code snippets used for Maps, markers and clearing the markers from Google maps api website
-   HTML for forms, tables and iframes used were obtained from bootstrap libarires website.  


### Acknowledgements
Thank you to the students and Mentors using Slack that have given helpful advise.

## Disclaimer 
The content used in this website is for educational purposes only.  