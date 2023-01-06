// regex
// pattern ve flag(opsiyonel) tanımlayarak yapılır.
// 1-RegExp constructor

let str = "Ben 30 yasindayim ve 1993 yilinda dogdum";
let username = "tayfun erbilen";

let pattern = "love";
let flag = "gi"; //g, i, m, s, u ve y olabilir.
let regEx = new RegExp(pattern, flag);

let regex = /love/gi;

let wordRegex = /salak/i; // i flag'ı case insensitive olarak bakmasını sağlıyor
let comment = "sen salak misin kardesim";
//let comment = prompt("yorumunu yaz, ama yazarken dikkatli ol");

//test() metodu ile regex ifade içinde geçiyor mu görüyoruz
// console.log(wordRegex.test(comment));
if (wordRegex.test(comment)) {
  console.log("Yorumunuzu düzeltiniz");
}

//match() regex ile alakalı eşleşen ilk ifade ile alakalı bilgiler döndürür
//hepsini döndürmesi için  'g' flag'ı kullanılır
//bulamazsa null döndürür
let string = "I love javascript Love prototurk";
console.log(string.match(/love/i));
console.log("********************");
console.log(string.match(/love/gi));

//search() ile index'ini verir bulamazsa -1 verir
console.log(string.search(/love/i));
/////////////////

//Replacing a substring
const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

// | , Python de olabilir, python de olabilir demek.
matchReplaced = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplaced);

const txt1 =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";

matches = txt1.replace(/%/g, "");
console.log(matches);

/*
[]: A set of characters(Karakter Kümesi)
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
Üstteki ifade A dan Z ye kadar a dan z ye kadar ve 0 dan 0 a kadar demek oluyor
Bu şekilde combine edebiliyoruz
*/
console.log("******************");
console.log(str.match(/[0-9]/g));

/*
\: uses to escape special characters(özel karakterlerden kaçış)
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
*/
console.log("******************");
console.log(str.match(/\d/g)); //sadece sayı
console.log(str.match(/\D/g)); //sayı olmayanlar

/*
. : any character except new line character(\n)(herhangi bir karakter \n hariç)
^: starts with(ile başlayan)
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.([] içinde ise ile başlamayan demek)
$: ends with(ile bitsin)
r'substring$' eg r'love$', sentence ends with a word love
*/
let firstname = "1tayfun";

//harf ile başlayıp harf ile bitiyor mu
console.log(/^[a-z]+$/.test(firstname)); //false
console.log(/^[a-z0-9]+$/.test(firstname)); //true

let firstname1 = "1tay fun.";
console.log(/^[a-z0-9 \.]+$/.test(firstname1)); //true

/*
*: zero or more times(hiç olmayabilir oladabilir)
r'[a]*' means a optional or it can occur many times.

+: one or more times(bir veya daha fazlası)
r'[a]+' means at least once or more times

?: zero or one times(hiç olmayabiri ya da bir tane var)
r'[a]?' means zero times or once

\b: word bounder, matches with the beginning or ending of a word(kelime sınırlayıcı)
{3}: Exactly 3 characters(3 karakterli bir şeyle eşleşiyor)
{3,}: At least 3 characters(En az 3 karakterli bir şeyle eşleşiyor)
{3,8}: 3 to 8 characters(3-8 karakterli bir şeyle eşleşiyor)

|: Either or (ya şu, ya da bu)
r'apple|banana' mean either of an apple or a banana

(): Capture and group(grupları yakalamak için kullanıyor)
*/

console.log("******************");
console.log(str.match(/\d+/g)); //sayıları birleştirerek getirdi
console.log(str.match(/\d{2}/g)); //2 karakterli sayıları ayrı ayrı getirdi
console.log(str.match(/\b\d{2}\b/g)); // kelimeyi 2 karakterli olarak sınırlarladık sadece 30 geldi
console.log(str.match(/\b\d{2,4}\b/g)); // kelimeyi 2 ile 4 karakter arasında olacak şekilde sınırlarladık, 30 ve 1993 geldi

let firstname2 = "taylan";
console.log(/[u|a]n$/.test(firstname2)); //un veya an ile bitiyor mu

let firstname3 = "tayfzn";
console.log(/a?n$/.test(firstname3)); //n ile bitiyor mu(a opsiyonel n zorunlu)

console.log(/^[A-Z][a-z]{3,12}$/.test("Asabeneh")); //Büyük harf ile başlasın, küçük ile devam etsin 3 ile 12 karakter arasında olsun

function is_valid_variable(str) {
  console.log(/^[a-z_]+$/i.test(str));
}

console.log("******************");
is_valid_variable("first_name"); // True
is_valid_variable("first-name"); // False
is_valid_variable("1first_name"); // False
is_valid_variable("firstname"); //True

let date = "2022-12-12";
console.log(date.match(/(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/));
