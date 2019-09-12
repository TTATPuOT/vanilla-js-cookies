# Vanilla JS ES6 Cookies
[Russian documentation here.](https://code.patriotovsky.ru/rabota-s-cookie-na-chistom-javascript/)

## How to use
### Create a instance of class
First of all you need to create a instance of class:
```js
const cookies = new Cookies();
```
### Create cookie
You can just create cookie for **30 days** easy:
```js
cookies.setCookie('name', 'value');
```
Also, you can set expires date:

```js
const date = new Date();
date.setDate(15); //Set 15th of month cookie is expires.
cookies.setCookie('name', 'value', {expires: date});
```
That's works also for updating cookies.
### Get cookie
```js
const value = cookies.deleteCookie('name'); //Return value or undefined, if cookie is not exists
```

### Delete cookie
```js
cookies.delete('test');
```
Also, you can just set cookie with past date.