# Booking HUB

### Router (1/1)

Application should have the following routes: - **DONE**
- /sign-up — sign up page
- /sign-in — sign in page
- / — main page with all trips, search and filters
- /trip/:tripId — trip details page
- /bookings — list of current user’s bookings

### Header (5/5)

- should be visible on all pages - **DONE**
- logo should be a link to main page — / - **DONE**
- should have navigation block to the right on all pages except /sign-up and /sign-in - **DONE**
- there should be two items in navigation block
  - first item is a link to /bookings page - **DONE**
  - when you hover over the second item, a list appears with username and Sign Out button. For now, the username should be static and Sign Out button should just navigate to /sign-in - **DONE**

### Footer (2/2)
- should be visible on all pages - **DONE**
- should be at the bottom of a page, even if there is less content - **DONE**

### Sign Up page (4/7)
- has a form that contains the following fields:
  - Full name - **DONE**
  - Email - **DONE**
  - Password — must be between 3 and 20 characters long - **NO**
- all form fields are required - **NO**
- on clicking Sign Up button, only if all fields are valid, user is navigated to / - **NO**
- Sign In button should navigate to /sign-in page - **DONE**
- you don’t need to save data from this form - **DONE**

### Sign In page (3/6)

- form contains the following fields
  - Email **DONE**
  - Password — between 3 and 20 characters long **NO**
- all form fields are required **NO**
- on clicking Sign In button, only if all fields are valid, user is navigated to / **NO**
- Sign Up button should navigate to /sign-up page **DONE**
- you don’t need to save data from this form **DONE**

### Main page (4/4)

- has a block with filters that contains: - **DONE**
  - search bar (use search method to search by trip title, search must be case insensitive) 
  - select for level
  - select for duration with values:
     - from 1 day to 5 (inclusive)
     - from 6 days to 10 (inclusive)
     - from 11 days and more
- when entering a value in the search bar or changing filters, the corresponding cards should be displayed - **DONE**
- all filters should work together and can be applied at the same time (don’t forget to handle filters reset) - **DONE**
- each trip card should contain the following elements: - **DONE**
  - picture
  - title of the trip
  - trip information — duration and level of difficulty
  - price
  - Discover a trip button that navigates to /trip/:tripId page

### Trip page (6/10)

- contains complete information about a trip — picture, name, duration, level, description and price - **DONE**
- when you click Book a trip button, a modal window opens - **DONE**
- modal window (markup for it is in trip.html) - **DONE**
- contains a name, duration and level of the trip - **DONE**
- contains a form with the following fields:
  - Date — planned date, should be not earlier than tomorrow - **NO**
  - Number of guests — should be from 1 to 10 inclusive - **NO**
- all form fields are required - **NO**
- final price is equal to the price multiplied by the number of guests - **DONE**
- when clicking a close button in the upper right corner, the form closes - **DONE**
- when clicking Book a trip button, if all fields are valid, the form closes and on /bookings page the appropriate card should appear. You don’t need to save data after page reload, but when going to this page through the header, or when submitting the form, the data should be taken from the state. All additional data required for the interface can be mocked - **NO**

### Bookings page (5/5)

- should contain a list of bookings - **DONE**
  - cards should be sorted by date (from closest to farthest)
- each booking card should contain: - **DONE**
  - name of the trip - **DONE**
  - booking information — number of guests, planned date (must be in YYYY-MM-DD format), final price - **DONE**
  - cancel button in the upper right corner — when clicking it, the card should disappear from the list - **DONE**