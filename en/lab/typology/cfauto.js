/*


if input_id === data.id:
  checkRadioButton()

if setup == 23:
  do nothing

*/

let Data;
const score = {
    Ne: 47,
    Ni: 15,
    Se: 15,
    Si: -1,
    Te: 31,
    Ti: 15,
    Fe: 15,
    Fi: 44,
  },
  inputs = document.querySelectorAll("input#answer"),
  url = "https://wotabaka.github.io/en/lab/typology/cfids.json",
  main = async () => {
    const response = await fetch(url);
    Data = await response.json();
    for (let i in Data) {
      for (let j in Data[i]) {
        score[i] = score[i] - 2;
        if (!score[i]) null;
        answer.filter((e) => e.id === j)[0].node[2 + v].checked = true;
      }
    }
    // console.log(getCount('Te'))
  };

let answer = [],
  s = {},
  v;
for (let i = 0; i < 96 * 5; i += 5) {
  answer.push({
    id: +inputs[i].name.replace("q", ""),
    nodes: [
      inputs[i + 2],
      inputs[i + 3],
      inputs[i + 4],
    ],
  });
}

for (let i in score) {
  score[i] - 23 > 0 ? (s[i] = score[i] - 23) : (s[i] = -(score[i] + 23));
  if (!(score[i] - 23)) s[i] = 0;
}

main();
