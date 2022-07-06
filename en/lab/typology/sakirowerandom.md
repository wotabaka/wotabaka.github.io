# Enneagram rowe test
https://sakinorva.net/test/rowe

```
total question = 306
```

* Pseudo code:

```
Get the question nodes
Iterate by 5 through it:
  Add a random number in index between 0-5
  Check the radio button
Click the submit button
```

* in JavaScript:

```javascript
// get all input tags
const inputs = document.querySelectorAll('input#answer');

// randomly checked the radio button of each question
for (let i=0; i<306*5; i+=5) {
  inputs[i+(Math.round(Math.random()*10)%5)].checked = true;
}

// click the submit button
document.querySelector('.submitit').click();
```

* Compiled version:

```javascript
(()=>{const e=document.querySelectorAll("input#answer");for(let t=0;t<1530;t+=5)e[t+Math.round(10*Math.random())%5].checked=!0;document.querySelector(".submitit").click()})();void(0)
```
