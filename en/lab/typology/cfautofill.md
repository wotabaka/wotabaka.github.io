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

some questions have ita own scoring rule
```

* grant-brownsword
formula:
`Dom(!0?+.5) + Aux(!0?-.5) + Tert(!0?-1.5) - Inf`
* myers letters
`difficult to know`

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
  return dom + aux + ter - inf;
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
(()=>{e={Ne:23,Ni:1,Se:45,Si:23,Te:23,Ti:40,Fe:34,Fi:23},i={INFJ:['Ni','Fe','Ti','Se'],INFP:['Fi','Ne','Si','Te'],INTJ:['Ni','Te','Fi','Se'],INTP:['Ti','Ne','Si','Fe'],ENFJ:['Fe','Ni','Se','Ti'],ENFP:['Ne','Fi','Te','Si'],ENTJ:['Te','Ni','Fe','Si'],ENTP:['Ne','Ti','Fe','Si'],ISFJ:['Si','Fe','Ti','Ne'],ISFP:['Fi','Se','Ni','Te'],ISTJ:['Si','Te','Fi','Ne'],ISTP:['Ti','Se','Ni','Fe'],ESFJ:['Fe','Si','Ne','Ti'],ESFP:['Se','Fi','Te','Ni'],ESTP:['Se','Ti','Fe','Ni'],ESTJ:['Te','Si','Ne','Fi']},T=(()=>{T=[];for(l in i)T.push([l,(S=i[l],e[S[0]]+(e[S[0]]-23?.5:0)+(e[S[1]]+(e[S[1]]-23?-.5:0))+(e[S[2]]+(e[S[2]]-23?-1.5:0))-e[S[3]])]);return T.sort(((e,i)=>e[1]-i[1])),T})(),S=document.querySelectorAll('table');for(i=0;i<8;i++)S[18].children[0].children[i].children[1].firstChild.innerText=Object.values(e)[i];for(e=0;e<3;e++)S[19].children[0].children[e].lastChild.firstChild.innerText=T[15][0];for(e=0;e<16;e++)S[21].children[0].children[e].firstChild.innerText=T[e][0],S[21].children[0].children[e].lastChild.innerText=T[e][1]})();void(0)
```
