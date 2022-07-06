# Rangkuman fungsi kognitif tes sakinorva

- Disklaimer: Data diambil tanpa izin dari sakinorva.net;
- Silahkan tes sendiri disini: https://sakinorva.net/functions

DOM scraper:
```
for(qq=[],q=document.querySelectorAll("input#answer"),i=0;i<480;i+=5)e=q[i].parentNode.parentNode.previousElementSibling.innerText.split(" "),e.shift(),qq.push([+q[i].name.replace("q",""),e.join(" ").replace('"','\\"')]);for(i of(body=document.querySelector("body"),body.innerHTML="[<br/>",qq))body.innerHTML+=`  { "id": ${i[0]}, "text": "${i[1]}", "function": "Xx" },<br/>`;body.innerHTML+="]"};void(0)
```

Rincian jumlah per 96 data:
```json
{
  "cf": {
    "Ne": 12,
    "Ni": 13,
    "Se": 12,
    "Si": 12,
    "Te": 12,
    "Ti": 11,
    "Fe": 12,
    "Fi": 12
  },
  "total": 96
}
```

> [data mentahan](sakifunc_id.json)

## Extraverted Intuition (Ne)

| N   | question                                                                                                         | id  | skor |
| --- | ---                                                                                                              | --- | ---  |
| 1   | Kamu punya kecenderungan untuk berbicara keluar dari topik dalam sebuah percakapan.                              | 11  |      |
| 2   | Mudah bagimu untuk memikirkan sesuatu yang abstrak dan acak untuk dikatakan.                                     | 13  |      |
| 3   | Saking banyaknya kemungkinan yang kamu temukan, susah bagimu untuk berkomitmen pada satu keputusan.              | 16  |      |
| 4   | Kamu sangat bersemangat atas hal baru. Namun, ketika hal itu tidak lagi terasa baru, kamu akan menelantarkannya. | 33  |      |
| 5   | Kamu mempertanyakan segala hal.                                                                                  | 34  |      |
| 6   | Kamu menyukai diskusi, kamu menawarkan banyak ide dalam situasi yang ada.                                        | 44  |      |
| 7   | Kamu memulai banyak rencana, namun hanya beberapa yang akhirnya bisa kamu selesaikan.                            | 49  |      |
| 8   | Kamu mungkin dideskripsikan sebagai orang yang 'berkepala kosong'.                                               | 52  |      |
| 9   | Dalam mengungkapkan ide-ide baru, kamu sering menggunakan analogi atau pengibaratan.                             | 66  |      |
| 10  | Susah bagimu untuk berkonsentrasi pada satu hal saja.                                                            | 81  |      |
| 11  | Kamu tertarik dengan hal-hal yang baru, asing, dan orisinal.                                                     | 88  |      |
| 12  | Kamu melihat dunia sebagai kumpulan kemungkinan yang menunggu untuk dieksplor.                                   | 91  |      |

## Introverted Intuition (Ni)

| N   | question                                                                                                     | id  | skor |
| --- | ---                                                                                                          | --- | ---  |
| 1   | Kamu seringkali kesusahan untuk mengungkapkan suatu hal dalam kata-kata walaupun kamu memahami hal tersebut. | 7   |      |
| 2   | Kamu mengimajinasikan hal-hal yang tidak berhubungan langsung dengan dunia nyata.                            | 18  |      |
| 3   | Kamu tertarik dengan hal-hal abstrak dan sering terobsesi dengan makna tersembunyi.                          | 20  |      |
| 4   | Kamu sering mengambil kesimpulan yang datang entah dari mana; kamu cenderung 'menyadari' jawaban.            | 22  |      |
| 5   | Kamu menaruh kepercayaan yang banyak terhadap alam bawah sadar dan hal-hal misterius.                        | 30  |      |
| 6   | Kamu merasa bahwa pendapatmu sering disalahpahami orang lain.                                                | 51  |      |
| 7   | Kamu banyak mengunakan kiasan puitis untuk menyampaikan ide-ide baru.                                        | 59  |      |
| 8   | Kamu seringkali memiliki firasat tentang sesuatu di masa depan yang pada akhirnya terbukti benar.            | 64  |      |
| 9   | Kamu melihat gambaran besar alih-alih lautan detail.                                                         | 65  |      |
| 10  | Kamu punya kesulitan berkomunikasi dengan orang-orang yang memiliki pandangan berbeda.                       | 75  |      |
| 11  | Kamu punya kesulitan untuk menyampaikan ide-idemu kepada orang lain.                                         | 79  |      |
| 12  | Kamu tertarik pada filosofi dan hal-hal mistis.                                                              | 80  |      |
| 13  | Kamu lebih memilih untuk hidup di dunia mimpimu dibanding dunia nyata.                                       | 92  |      |

## Extraverted Sensing (Se)

| N   | question                                                                                                | id  | skor |
| --- | ---                                                                                                     | --- | ---  |
| 1   | Kamu menyukai keindahan dan "menikmati hal-hal yang baik dalam hidup."                                  | 4   |      |
| 2   | Kamu hidup di 'tempat ini dan saat ini'.                                                                | 12  |      |
| 3   | Biasanya, kamu adalah yang pertama bereaksi terhadap suatu pertanyaan.                                  | 28  |      |
| 4   | Kamu menyukai pengalaman yang baru dan mengasyikkan.                                                    | 42  |      |
| 5   | Kamu hidup di masa kini, bukan masa lalu atau masa depan.                                               | 45  |      |
| 6   | Kamu adalah seorang pengambil resiko.                                                                   | 60  |      |
| 7   | Kamu bisa memanipulasi percakapan dengan menganalisa bahasa tubuh orang lain.                           | 61  |      |
| 8   | Kamu mungkin terlihat bar-bar dan menyakiti orang-orang disekitarmu tanpa sadar.                        | 68  |      |
| 9   | Kamu punya indera navigasi yang bagus dan mudah tahu arah walaupun di tempat baru.                      | 72  |      |
| 10  | Kamu percaya bahwa keberadaanmu dalam sebuah ruangan pasti disadari orang lain.                         | 84  |      |
| 11  | Kamu menerima sebuah informasi dari dunia luar tanpa pikir panjang.                                     | 85  |      |
| 12  | Kamu sadar akan hal-hal di sekitarmu dan tidak mungkin melewatkan sesuatu yang terjadi di depan matamu. | 96  |      |

## Introverted Sensing (Si)

| N   | question                                                                                                                 | id  | skor |
| --- | ---                                                                                                                      | --- | ---  |
| 1   | Kamu sangat memperhitungkan detil dan pengalaman yang lampau.                                                            | 2   |      |
| 2   | Kamu berbakat dalam mengidentifikasi apakah sebuah detail cocok dengan kebiasaan yang ada.                               | 3   |      |
| 3   | Kamu mudah menyadari rangsangan/sensasi internal dari tubuh dan bisa mengambil tindakan sesuai dengan kebutuhan tubuhmu. | 5   |      |
| 4   | Kamu hanya mengandalkan pengalaman yang lampau untuk memandumu melewati masa kini.                                       | 10  |      |
| 5   | Kamu menghubungkan pengalaman masa kini dengan pengalaman masa lalu                                                      | 14  |      |
| 6   | Kamu tidak menyukai perubahan.                                                                                           | 15  |      |
| 7   | Kamu sangat menghargai tradisi dan kewajiban.                                                                            | 17  |      |
| 8   | Kamu tidak tertarik dengan ketidakpastian atau hal-hal yang belum diketahui.                                             | 26  |      |
| 9   | Kamu mengikuti sebuah rutinitas yang konsisten.                                                                          | 43  |      |
| 10  | Mau tidak mau, kamu akan selalu fokus kepada detil-detil kecil.                                                          | 57  |      |
| 11  | Menurutmu, kamu adalah orang yang praktis dan realistis, bebas dari imajinasi.                                           | 76  |      |
| 12  | Kamu dideskripsikan sebagai 'tidak bisa berpindah tujuan'.                                                               | 93  |      |

## Extraverted Thinking (Te)

| N   | question                                                                                                  | id  | skor |
| --- | ---                                                                                                       | --- | ---  |
| 1   | Kamu setuju bahwa hasil akhir adalah yang terpenting.                                                     | 6   |      |
| 2   | Kamu tidak bertele-tele dalam berkomunikasi.                                                              | 9   |      |
| 3   | Kamu mempercayai fakta dan data lebih dari apapun.                                                        | 25  |      |
| 4   | Kamu mengandalkan sumber-sumber eksternal untuk mendukung argumenmu.                                      | 27  |      |
| 5   | Kamu sangat objektif dan 'berkata apa adanya'.                                                            | 35  |      |
| 6   | Kamu suka mengorganisir atau mengatur hal-hal untuk bersenang-senang.                                     | 50  |      |
| 7   | Kamu selalu menetapkan target pribadi.                                                                    | 54  |      |
| 8   | Ketika memiliki waktu luang, kamu merasa canggung dan tanpa tujuan.                                       | 58  |      |
| 9   | Menurutmu, kamu adalah orang yang terorganisir dan mampu mengontrol sesuatu sebelum terjadi kekacauan.    | 67  |      |
| 10  | Kamu mengambil jalan pintas yang tidak sesuai dengan kebiasaan yang ada demi efisiensi dan produktivitas. | 74  |      |
| 11  | Kamu akan melakukan apapun demi memenangkan perdebatan.                                                   | 87  |      |
| 12  | Kamu biasanya menyelesaikan masalah bersama orang lain dan melibatkan mereka dalam pengambilan keputusan. | 89  |      |

## Introverted Thinking (Ti)

| N   | question                                                                                                                                | id  | skor |
| --- | ---                                                                                                                                     | --- |      |
| 1   | Untuk mendeskripsikan dunia di sekelilingmu, kamu membuat kerangka kerja, teori dan sistem yang logis secara internal.                  | 21  |      |
| 2   | Menurutmu, mendapat kebenaran atau fakta lebih penting dari memenangkan sebuah perdebatan.                                              | 23  |      |
| 3   | Kamu sulitl beradaptasi dengan data-data baru karena tidak sesuai dengan pemahaman pribadimu atas sebuah ide.                           | 39  |      |
| 4   | Kamu menyelesaikan masalahmu sendiri dan mengasingkan diri saat mencari kesimpulan.                                                     | 40  |      |
| 5   | Caramu memahami sebuah konsep adalah mengidentifikasinya secara logis dan menghubungkan pola antara konsep-konsep yang ada.             | 46  |      |
| 6   | Kamu pemecah masalah yang baik dan memiliki kemampuan untuk menganalisis secara mendalam.                                               | 48  |      |
| 7   | Menurutmu, suatu solusi lebih baik dibahas secara menyeluruh sebelum dieksekusi, meskipun waktu yang jadi taruhannya.                   | 53  |      |
| 8   | Kamu memodifikasi sistem logika internalmu untuk memasukkan data baru, dan akan mengevaluasi ulang sistem itu jika datanya tidak cocok. | 56  |      |
| 9   | Kamu menghargai kebenaran dan logika lebih dari apapun.                                                                                 | 82  |      |
| 10  | Kamu telah menjadi logis secara konsisten seumur hidupmu.                                                                               | 83  |      |
| 11  | Kamu mengeksplor hal-hal secara mendalam hanya karena kamu ingin tahu lebih dalam.                                                      | 95  |      |

## Extraverted Feeling (Fe)

| N   | question                                                                                                    | id  | skor |
| --- | ---                                                                                                         | --- | ---  |
| 1   | Kamu merasakan solidaritas tingkat tinggi ketika berkomunikasi dalam kelompok.                              | 8   |      |
| 2   | Kamu mungkin terlihat 'palsu' atau 'manipulatif' bagi orang lain.                                           | 24  |      |
| 3   | Kamu sangat menghargai harmoni dalam kehidupan sosial dan sering berusaha keras untuk mempertahankannya.    | 31  |      |
| 4   | Kamu mencoba membantu orang lain sampai kamu mulai lupa memeperhatikan kebutuhan pribadimu.                 | 32  |      |
| 5   | Kamu mudah bersimpati kepada kesulitan yang dihadapi orang lain.                                            | 36  |      |
| 6   | Kemampuanmu dalam menyadari kebutuhan orang lain tidak bisa diragukan.                                      | 37  |      |
| 7   | Kamu berkarisma dan biasanya dilihat sebagai orang yang menawan.                                            | 47  |      |
| 9   | Kamu mungkin terlihat 'ikut campur' atau 'suka mengatur' di mata orang lain.                                | 62  |      |
| 10  | Kamu selalu berusaha untuk berkomunikasi secara bijaksana.                                                  | 70  |      |
| 11  | Kamu lebih memilih untuk berbohong demi kebaikan daripada mengecewakan seseorang.                           | 77  |      |
| 12  | Kamu menghargai kesetaraan hak dan berusaha keras untuk membuat semua orang terlibat dalam sebuah kelompok. | 86  |      |
| 13  | Kamu sedih jika perhatianmu untuk orang lain tidak dihargai.                                                | 90  |      |

## Introverted Feeling (Fi)

| N   | question                                                                                         | id  | skor |
| --- | ---                                                                                              | --- | ---  |
| 1   | Kamu sangat individualistis dan melihat keunikanmu sebagai bagian dari harga diri.               | 1   |      |
| 2   | Kamu mungkin terlihat egois.                                                                     | 19  |      |
| 3   | Kamu menjadi keras kepala saat menghadapi pertentangan atas apa yang kamu yakini secara pribadi. | 29  |      |
| 4   | Kamu mengekspresikan dirimu dengan jujur dan otentik.                                            | 38  |      |
| 5   | Kamu cenderung baru mengekspresikan simpati setelah berempati terlebih dahulu.                   | 41  |      |
| 6   | Kamu memiliki standar moral pribadi yang tidak akan terpengaruhi oleh faktor-faktor eksternal.   | 55  |      |
| 7   | Kamu jujur pada dirimu sendiri.                                                                  | 63  |      |
| 8   | Kamu mungkin terlihat cengeng atau penuh depresi.                                                | 69  |      |
| 9   | Orang-orang palsu membuatmu sebal.                                                               | 71  |      |
| 10  | Kamu punya kecenderungan untuk menentukan 'baik' dan 'buruk' dari suatu hal.                     | 73  |      |
| 11  | Kamu merasa seakan kamu adalah satu dari segelintir orang baik yang tersisa di dunia ini.        | 78  |      |
| 12  | Kamu ragu untuk mengasosiasikan dirimu pada suatu peran sosial secara pasti.                     | 94  |      |


*dibantu koreksi oleh Munchau dan kawan-kawan di grup Telegram MBTI INDONESIA
