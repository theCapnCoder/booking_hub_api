# Booking HUB with real API

### How the app should work 
- Upon opening the app, it checks for the presence of a token, which is used to authenticate the user. If the token is present, the app loads the current user’s data and redirects the user to the main page, which displays a list of all available trips. - **YES**

- If the token is missing or an error occurs, the user is redirected to the Sign In page. - **YES**

- The loader is displayed until the user data is successfully loaded or an error occurs. - **NO**

- If an unauthorized user tries to access any page other than the Sign Up and Sign In pages, he will be redirected to the Sign In page. If an authorized user tries to access an unknown route, they will be redirected to the main page. - **NO**

- While making get requests, the user should see a loader with data-test-id="loader". You can take styles for it from the repository from the first part, or use your own. - **NO**

- User cannot submit any form until all fields are valid. - **NO**

- If a 401 error occurs, the user should be signed out. You can test this by manually deleting a token. To implement this, use createListenerMiddleware. - **NO**

- If there is no 401 error upon reloading the app, the user stays on the same page. - **NO**

- if an asynchronous operation fails, the user should be presented with an error notification. You can use any library for this, for example React-Toastify, but you should give the notification a custom class notification (in most libraries, this is possible). Pay attention that this class is present in the element when the notification appears. - **NO**

### Auth (0/4)
- You should implement logic with authenticated user detection and data loading as described above. - **NO**

- For sign in and sign up, if an operation is successful, the token should be saved for future requests and the user is redirected to the main page. - **NO**

- Upon clicking the Sign Out button in the header, the user is signed out (the token needs to be removed) and redirected to the sign in page. - **NO**

- The username displayed in the header should be taken from the authenticated user’s full name. - **NO**

### Main page (0/1)
- Upon navigating to the main page, a list of all trips is loaded and displayed to the user. - **NO**

### Trip page (0/1)
- Upon navigating to the trip page, the relevant trip data is loaded and displayed to the user. When the user clicks Book a trip button in the modal and form fields are valid, a request is made to book a trip. If the operation is successful, the user should be presented with a success notification. - **NO**

### Bookings page (0/1)
- Upon navigating to the bookings page, all of the current user’s bookings are loaded and displayed. When the user clicks the cancel booking button, a request is made to cancel the booking. The card for the canceled booking is only removed from the page if the cancellation is successful. If the operation is successful, the user should be presented with a success notification. - **NO**

### Requirements (3/5)
- use a separate repository for this part - **YES**
- you have to use a pre-existing API provided below - **NO**
- you should remove all mock data that were used in the last task - **NO**
- Redux Toolkit should be used to work with asynchronous operations - **YES**
- all other logic from the first part, like validation and filters, should remain - **YES**

What will be evaluated
functionality and compliance with the requirements listed above
work actions and reducers
work with asynchronous operations using Redux Toolkit
data encapsulation (component must receive data via props, local state only where needed)
Maximum score for the functionality described above: 9. You can get an additional point for:

