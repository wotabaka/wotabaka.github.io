/*


if input_id === data.id:
  checkRadioButton()



*/

let Data
const setup = { // in percent
  Ne: 47,
  Ni: 23,
  Se: 23,
  Si: -1,
  Te: 23,
  Ti: 45,
  Fe: -1,
  Fi: 23,
}, 
url = 'https://wotabaka.github.io/en/lab/typology/cfids.json',
inputs = document.querySelectorAll('input#answer').slice(0, 96*5),
//ids = new Set(inputs.map(i => +(i.name.replace('q','')))),
getC = (cf) => Data[cf].count,


main = async () => {
  const response = await fetch(url);
  Data = await response.json();

  // console.log(getCount('Te'))
}

main()
