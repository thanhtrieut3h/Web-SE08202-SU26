// tim hieu cac toan tu va cac cac truc dieu khien, vong lap ... trong JS
// 1 - cac toan tu trong JS
// 1.1 : phep toan hoc : +,-,*,/, % ....
let res = 12 % 5 ; // phep chia lay du
console.log(res);
let number1 = 10;
number1 += 20; // x += y; x = x + y
console.log(number1);
let x = 10;
x += 50; // ? 60
let y = 30;
y -= 40; // ? -10 : x -= y; x = x -y;
let z = 3;
z *= 2; // ? 6; z = z * 2;
// 1.2 : cac phep so sanh trong JS
let a = 10;
let b = 20;
let c = a == b; // true or false : so sanh bang - kiem tra bang nhau ve mat gia tri, khong quan tam den kieu du lieu cua bien
console.log(c);
let d = a === b;// so sanh bang - giong nhau ve kieu du lieu va bang nhau ve mat gia tri
console.log(d);
let check = false; // boolean
let data = " "; // chuoi rong : string
let test = check === data; // true or false
console.log(test);
// " ", 0, false : bang nhau ve mat gia tri
// 1, true : bang nhau ve mat gia tri
let t1 = 1;
let t2 = true;
let t3 = t1 !== t2; // so sanh khong bang
console.log(t3);
// ! : phep toan phu dinh
// 1.3 : phep toan tang giam gia tri
let j = 10;
++j; // j = j + 1; // tang ngay 1 gia tri
console.log(j);
let u = 10;
u++; // tang sau 1 gia tri
console.log(u);
let v = 10;
let k = 9;
let s = (++v) + (--k) + (v++) - (k--) + (--v) + (++k);
//  s =   11  +   8   +  11   -   8   +   11  +   8;
console.log(s);
// 37 
// 39
// 41
let p1 = 9;
let p2 = 8;
let p3 = (p1--) + (--p2) + (--p1) - (p2--) + (++p1) - (++p2);
//  p3 =   9    +   7    +   7    -   7     +  8    -   7
// 17 (OK)
// 16
// 21
console.log(p3);
// 2 : cac cau truc dieu khien
// 21. if...else ...
if(s == p3){
    console.log("A");
} else {
    console.log("B");
}
/////////////////////////
if(s == p3){
    console.log("A1");
} else if( s <= p3){
    console.log("A2");
} else if (s >= p3){
    console.log("A3");
} else {
    console.log("B1");
}
let n1 = 10;
let m1 = 20;
// && : toan tu VA; || toan tu HOAC
// && : tat ca cac dieu kien khac nhau deu phai dung => Dung(True)
// || : chi can it nhat 1 dieu kien dung trong nhieu dieu kien => Dung (True)
if(s > p3 || m1 < n1){
    console.log("OK");
} else {
    console.log("No");
}
let month = 6;
switch(month){
    case 6:
        console.log("30 days");
        break;
    case 2:
        console.log("28 days");
        break;
    default:
        console.log("Fail day");
        break;
}