
let kullanicihamlesi = prompt('taş, kağıt, makastan birini yazınız.');
let bilgisayarinHamlesi = ["taş", "kağıt", "makas"].at(Math.floor(Math.random() *3));
console.log('Bilgisayar hamlesi: ' + bilgisayarinHamlesi); 

if(kullanicihamlesi === 'taş' && bilgisayarinHamlesi === 'taş'){
  console.log('Berabere.');
} else if(kullanicihamlesi === 'taş' && bilgisayarinHamlesi === 'kağıt') {
  console.log('Kaybettiniz.');
} else if(kullanicihamlesi === 'taş' && bilgisayarinHamlesi === 'makas') {
  console.log('Kazandınız.');
} else if(kullanicihamlesi === 'kağıt' && bilgisayarinHamlesi === 'kağıt'){
  console.log('Berabere.');
} else if(kullanicihamlesi === 'kağıt' && bilgisayarinHamlesi === 'makas') {
  console.log('Kaybettiniz.');
} else if(kullanicihamlesi === 'kağıt' && bilgisayarinHamlesi === 'taş') {
  console.log('Kazandınız.');
} else if(kullanicihamlesi === 'makas' && bilgisayarinHamlesi === 'makas'){
  console.log('Berabere.');
} else if(kullanicihamlesi === 'makas' && bilgisayarinHamlesi === 'taş') {
  console.log('Kaybettiniz.');
} else if(kullanicihamlesi === 'makas' && bilgisayarinHamlesi === 'kağıt') {
  console.log('Kazandınız.');
} else {
  console.log('taş, kağıt veya makas yazınız.');
}