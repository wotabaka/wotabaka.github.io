#

+ [sakinorva's cf test questions](CF.md)
+ [a table?](typology_table.md)

## what's the algorithm?
what's axis-based? i don't fuckin' understand

```
 *  *  *  *  *
-2 -1  0  1  2

init : 23
max  : 45 ?
min  : 1  ?

some questions have its own scoring rule
```

## score algorithm
formula (I maybe miss something here):
```
each point +0.5 for Dom
each point -0.5 for Aux
each point -1.5 for Tert

lets just assume if point checked is 11
then (11*0.5) will be added to Dom.
then (11*1.5) will be substracted from Tert.

+ Dom  (v-23 ? +0.5 * p)
+ Aux  (v-23 ? -0.5 * p)
+ Tert (v-23 ? -1.5 * p)
- Inf
```
* myers letters
`difficult to know, don't know how to automate it :(`


## in JavaScript:
```javascript
// example of the theoritically INFJ
const cf = {
  Ne: 23,
  Ni: 45,  // maximum value
  Se: 1,   // minimum value
  Si: 23,
  Te: 23,
  Ti: 28,
  Fe: 39,
  Fi: 23,
};

// or for simplicity, just use array
// with this order: Ne,Ni,Se,Si,Te,Ti,Fe,Fi
// const cf = [23,23,23,23,23,23,23,23];

const mbti = {
  INFJ: [ 'Ni', 'Fe', 'Ti', 'Se' ],
  INFP: [ 'Fi', 'Ne', 'Si', 'Te' ],
  INTJ: [ 'Ni', 'Te', 'Fi', 'Se' ],
  INTP: [ 'Ti', 'Ne', 'Si', 'Fe' ],
  ENFJ: [ 'Fe', 'Ni', 'Se', 'Ti' ],
  ENFP: [ 'Ne', 'Fi', 'Te', 'Si' ],
  ENTJ: [ 'Te', 'Ni', 'Fe', 'Si' ],
  ENTP: [ 'Ne', 'Ti', 'Fe', 'Si' ],
  ISFJ: [ 'Si', 'Fe', 'Ti', 'Ne' ],
  ISFP: [ 'Fi', 'Se', 'Ni', 'Te' ],
  ISTJ: [ 'Si', 'Te', 'Fi', 'Ne' ],
  ISTP: [ 'Ti', 'Se', 'Ni', 'Fe' ],
  ESFJ: [ 'Fe', 'Si', 'Ne', 'Ti' ],
  ESFP: [ 'Se', 'Fi', 'Te', 'Ni' ],
  ESTP: [ 'Se', 'Ti', 'Fe', 'Ni' ],
  ESTJ: [ 'Te', 'Si', 'Ne', 'Fi' ],
};

const score = (c) => {
  const dom = cf[c[0]] + ((cf[c[0]]-23)?.5:0);
  const aux = cf[c[1]] + ((cf[c[1]]-23)?-.5:0);
  const ter = cf[c[2]] + ((cf[c[2]]-23)?-1.5:0);
  const inf = cf[c[3]];
  return +(''+(dom + aux + ter - inf)).slice(0,4);
};

const scores = (() => {
  let res = [];
  for (let i in mbti) {
    res.push([i, score(mbti[i])])
  }
  res.sort((a, b) => a[1] - b[1]);
  return res;
})()

// for table of scores
const elTable = document.querySelectorAll('table');
for (let i = 0; i < 8; i++) {
  elTable[18]
    .children[0]
    .children[i]
    .children[1]
    .firstChild
    .innerText = Object.values(cf)[i];
}

for (let i = 0; i < 3; i++)
  elTable[19]
    .children[0]
    .children[i]
    .lastChild
    .firstChild
    .innerText = scores[15][0];

for (let i = 0; i < 16; i++) {
  elTable[21]
    .children[0]
    .children[i]
    .firstChild
    .innerText = scores[i][0];
  elTable[21]
    .children[0]
    .children[i]
    .lastChild
    .innerText = scores[i][1];
} 
```

## compiled version:

```javascript
(()=>{e={Ne:23,Ni:45,Se:1,Si:23,Te:23,Ti:30,Fe:40,Fi:23},i={INFJ:["Ni","Fe","Ti","Se"],INFP:["Fi","Ne","Si","Te"],INTJ:["Ni","Te","Fi","Se"],INTP:["Ti","Ne","Si","Fe"],ENFJ:["Fe","Ni","Se","Ti"],ENFP:["Ne","Fi","Te","Si"],ENTJ:["Te","Ni","Fe","Si"],ENTP:["Ne","Ti","Fe","Si"],ISFJ:["Si","Fe","Ti","Ne"],ISFP:["Fi","Se","Ni","Te"],ISTJ:["Si","Te","Fi","Ne"],ISTP:["Ti","Se","Ni","Fe"],ESFJ:["Fe","Si","Ne","Ti"],ESFP:["Se","Fi","Te","Ni"],ESTP:["Se","Ti","Fe","Ni"],ESTJ:["Te","Si","Ne","Fi"]},T=(()=>{T=[];for(S in i)T.push([S,(l=i[S],+(""+(e[l[0]]+(e[l[0]]-23?.5:0)+(e[l[1]]+(e[l[1]]-23?-.5:0))+(e[l[2]]+(e[l[2]]-23?-1.5:0))-e[l[3]])).slice(0,4))]);var l;return T.sort(((e,i)=>e[1]-i[1])),T})(),l=document.querySelectorAll("table");for(i=0;i<8;i++)l[18].children[0].children[i].children[1].firstChild.innerText=Object.values(e)[i];for(e=0;e<3;e++)l[19].children[0].children[e].lastChild.firstChild.innerText=T[15][0];for(e=0;e<16;e++)l[21].children[0].children[e].firstChild.innerText=T[e][0],l[21].children[0].children[e].lastChild.innerText=T[e][1]})();void(0)
```
