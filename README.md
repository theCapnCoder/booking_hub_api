# Booking HUB

### Router (1/1)

Application should have the following routes: - **DONE**
- /sign-up — sign up page
- /sign-in — sign in page
- / — main page with all trips, search and filters
- /trip/:tripId — trip details page
- /bookings — list of current user’s bookings

### Header (4/5)

- should be visible on all pages - **DONE**
- logo should be a link to main page — / - **DONE**
- should have navigation block to the right on all pages except /sign-up and /sign-in - **DONE**
- there should be two items in navigation block
  - first item is a link to /bookings page - **DONE**
  - when you hover over the second item, a list appears with username and Sign Out button. For now, the username should be static and Sign Out button should just navigate to /sign-in - **NO**

### Footer (1/2)
- should be visible on all pages - **DONE**
- should be at the bottom of a page, even if there is less content - **NO**

### Sign Up page (4/7)
- has a form that contains the following fields:
  - Full name - **DONE**
  - Email - **DONE**
  - Password — must be between 3 and 20 characters long - **NO**
- all form fields are required - **NO**
- on clicking Sign Up button, only if all fields are valid, user is navigated to / - **NO**
- Sign In button should navigate to /sign-in page - **DONE**
- you don’t need to save data from this form - **DONE**

### Sign In page

- form contains the following fields
  - Email **DONE**
  - Password — between 3 and 20 characters long **NO**
- all form fields are required **NO**
- on clicking Sign In button, only if all fields are valid, user is navigated to / **NO**
- Sign Up button should navigate to /sign-up page **DONE**
- you don’t need to save data from this form **DONE**

### Main page (0/4)

- has a block with filters that contains: - **NO**
  - search bar (use search method to search by trip title, search must be case insensitive)
  - select for level
  - select for duration with values:
     - from 1 day to 5 (inclusive)
     - from 6 days to 10 (inclusive)
     - from 11 days and more
- when entering a value in the search bar or changing filters, the corresponding cards should be displayed - **NO**
- all filters should work together and can be applied at the same time (don’t forget to handle filters reset) - **NO**
- each trip card should contain the following elements: - **NO**
  - picture
  - title of the trip
  - trip information — duration and level of difficulty
  - price
  - Discover a trip button that navigates to /trip/:tripId page

### Trip page (1/3)

- contains complete information about a trip — picture, name, duration, level, description and price - **DONE**
- when you click Book a trip button, a modal window opens - **NO**
- modal window (markup for it is in trip.html) - **NO**

