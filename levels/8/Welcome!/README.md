# Welcome!

### Details:

Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

#### The Task

- Think of a way to store the languages as a database _(eg an object)_. The languages are listed below so you can copy and paste!
- Write a 'welcome' function that takes a parameter 'language' _(always a string)_, and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

#### The Database

```
english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
```

#### Possible invalid inputs include:

```
IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
IP_ADDRESS_NOT_FOUND - ip address not in the database
IP_ADDRESS_REQUIRED - no ip address was supplied
```

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/javascript.svg" height="24px" alt="JavaScript">](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js) [<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/python.svg" height="24px" alt="Python">](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js)
