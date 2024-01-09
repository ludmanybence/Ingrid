# Setup

Fill in the `VITE_EXCHANGEIO_API_KEY` field in the .env file

# Prod

Make sure `Docker` is running

If you have Make installed you can simply run 

```
make up_build
```

or

```
make up
``` 

once "up_build" had been run before

```
make down
``` 
will stop the image if it's running.


Navigate to 
``` 
http://localhost:4173 
```

# Dev

### Frontend
Run 
```
npm i 
```

to install dependencies, then 


```
npm run dev
```

### Storybook

```
npm run storybook
```


### Test

```
npm test
```

# Known Issues (did not have time to fix)

Chrome-based browsers redirect http requests from cache, changing an "http" request to "https",
which causes the request to receive a 403 (Forbidden) from exchangeratesapi.io on a free API key

The issue itself comes down to the combination of Chromium caching policies (HTTP Strict Transport Security),
the use of RTK Query to cache requests, and exchangeratesio's decision to forbid https for free users, quite frustrating nevertheless.

To combat this:
Opt to use Firefox or Safari to view the app
or procure a paid API key (not required by any feature of the app)


# Had I had more time to spend on the app

- Implement component unit tests
- Write storybook files for all components
- Make the dates of Historical Comparison changeable (and move values to store so they persist)
- Add a loading spinner to replace the "Loading..." and to give feedback on button click that a request is being handled
- Much more work on theme and colors (and possibly a UI library)
- Persist selected tab
- Change date of data label to warn user that their data is stale (date + 1hour < now)

<br> 


# Ingrid Front-end Coding Assignment
This is a small coding assignment to assess a candidate's skill regarding front-end
development.
### Description
We need to build a small web based currency converter that can answer these questions:
What is 200 SEK converted into multiple other currencies like USD, GBP and SGD?
How much has currency changed in valuation between March 26th, 2015 and June 13th,
2017?
To answer those, you can use exchangeratesapi.io to get your currencies data. We would
also like to see the web app persist state on page reload.
### Technology stack
- React
- Using TypeScript would be considered a plus, but is not mandatory
- Any third party packages or frameworks you want to use.
### Requirements
We should be able to run the code on our computers. Hint: A good README.txt goes a
long way.
### What will we look at
- Your ability to write code that is easy to follow, understand and extend
- Show off your skills but remember that above all, we value code that's simple
- Your ability to create good looking UIs with user interaction in mind
- We want to see you can create something nice without detailed mockups. External UI
libraries are fine too
- Your ability to translate requirements into working implementation
- Your ability to document and explain non-coding requirements if there are any
- Your ability to secure code maintainability
### Last notes
We use this task to understand your coding style and how you approach problems.
We know it can take a few hours to finish and perfecting it could eat your whole day.
Therefore we encourage you to write as many comments as you can. If you're aware your
solution is missing something you didn't have time to finish, let us know - write a
comment, add pseudo code.
The more you tell us, the easier it will be to understand what you were trying to do.
Don't forget to show us what you're really good at. Whether that's UI work,
animations, code structure, performance optimization, give us a taste of your best
skills.
Good luck!


