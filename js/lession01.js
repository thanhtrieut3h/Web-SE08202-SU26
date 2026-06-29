// comment tren 1 dong
// bat thong bao ra ngoai trinh duyet
// alert("Hello world");
/*
comment 
tren nhieu dong
*/
// Tim hieu ve bien(cach khai bao bien) + kieu du lieu trong JS
// 1 - khai bao bien
let myName = "Nguyen Van A";
// let : tu khoa(keyword) de khai bao bien
// myName : ten bien do LTV tu dinh nghia
// = : toan tu gan gia tri
// "Nguyen van A" : gia tri cua bien
let myAge = 20;
// Quy tac dat ten bien : 
// 1 - ten bien khong bat dau bang nhung con so (chu so) va cac ky tu nhu : @, *, &, # ..
// 2 - ten bien khong trung voi cac tu khoa trong lap trinh : if ... else; for ... while
// 3 - ten bien co phan biet chu hoa va chu thuong
// 4 - ten bien tuan thu theo quy tac camel-case : chu cai dau tien cua tu thu nhat viet thuong, chu dau tien cua cac tu tiep theo se viet Hoa
// 2 - khai bao bien la 1 hang so (Hang so : gia tri cua bien khong duoc thay doi)
const PI = 3.14;
// quy tac dat ten hang so: Viet hoa toan bo va cac tu ngan cach nhau boi dau gach duoi(khong bat buoc)
 // PI = 3.15; // sai : khong duoc thay doi gia tri
 console.log(myName); // hien thi du lieu ra man hinh console cua trinh duyet
 console.log(myAge);
 console.log(PI);
 let number1 = 10;
 let number2 = 20;
 let sum = number1 + number2; // phep toan cong
 console.log(sum);
 // tim ve kieu du lieu trong JS
 // JS khong quy dinh san kieu du lieu cho bien, ma bien se tu dong nhan kieu du lieu khi duoc gan gia tri.
 // 1 - number
 let number = 100.34; // bien number se tu dong nhan kieu du lieu la : number vi no duoc gan gia tri la 1 so
 let dataType = typeof(number);
 console.log(dataType); // number
 let result = number / 0;
 console.log(result);
 console.log(typeof(result));

 let result2 = number / "abc";
 console.log(result2);
 console.log(typeof(result2));
// 2 - string
let className = "SE08202"; // kieu du lieu - chuoi
// khi mot bien duoc gan tri va gia tri do nam trong " " hoac ' ' hoac ` ` thi se nhan kieu du lieu la string(chuoi).
let mySubject = 'Website'; 
let myAddress = `test@gmail.com`; // nen su dung thuong xuyen
console.log(typeof(className, mySubject, myAddress));
let myDat = ` day la doan van mau.
              test don van`;
// 3 - boolean : chi nhan 2 gia tri true hoac false
let checking = true;
let myCheck  = false;
console.log(typeof(checking, myCheck));
// 4 - undefined : khi bien chua duoc gan gia tri
let myMoney;
console.log(typeof(myMoney));
// 5 - object (array, object ...) : tim hieu nhung buoi sau
// 6 - kieu du lieu symbol : tao ra cacc gia tri khong trung lap
let myID = Symbol("id");
console.log(typeof(myID));
// 7 - kieu null : khi bien duoc gan bang null
let myEmail = null; // kieu null
