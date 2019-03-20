# EMAIL FEEDBACK APP

## 1. User signs up using OAuth20 || Express server + MongoDb + Passportjs
## 2. User Pays for email credits with stripe || Stripe + MongoDb
## 3. User create a new campaing || React + Redux
## 4. User enters a list of emails || React+Redux+ReduxForm
## 5. We send email list of surveyees || Email Provider
## 6. Surveyees click on a link || Email Provider + Express
## 7. We tabulate feedback || Mongodb
## 8. User can see a report of all surveye responses ||  MongoDb+React+Redux


# ReactApp => HttpRequest[Json] => Express/NodeApi => MongoDb

# HttpRequest => Port[5000] => Express => Route Hanlder => response

# OAuth FLOW:
## 1. User click 'login'
## 2. The event directs to localhost:5000/auth/goolge
## 3. The request forwarded to google with an appid e.g google.com/auth?appid=123
## 4. Google asks to grant permission
## 5. User confirms the access by the app
## 6. Google sends a code back to the server e.g. localhost:5000/auth/google/callback?code=456
## 7. App sends request to google with the 'code' included
## 8. Google sends the user details/profile based on the code
## 9. When Received user details create a record in the database
## 10.User Id is set in cookies for this user
## 11.User is redirected to the logged in page e.g. localhost:3000/
## 12.If additional resourses are needed from the API => cookies are used for identification as they are inculded with a user id for the app

### SO:
### 1. localhost:5000/auth/google =>
### 2. google.com/auth?appid=123 =>
### 3. localhost:5000/auth/google/callback?code=456 =>
### 4. google?456 =>
### 5. localhost?user  details =>
### 6. database =>
### 7. cookies?id =>
### 8. localhost:3000

# CLIENT ID With CLIENT SECRET
## index.js => config/keys.js ? prod => use env variables : dev? config/dev.js
## Store Client Id and secret in this file/ do not commit

# The habits are:
## - Understand the scope and the problem first before coding
## - Document as much as you can
## - Write readable & maintainable code
## - Be good at cross-functional work
## - Be an effective communicator
## - Recognize opportunities for improvements & impacts
## - Have a growth mindset

# Connecting the database. Just pluging in mongoose for now.
# You have this hour or you don't