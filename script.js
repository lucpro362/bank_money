const ONE_HUNDRED_PERCENT = 100;
let bankName = prompt('Nhap ten ngan hang:');
let bankPercent = prompt('Nhap lai suat:');

let year = prompt('Nhap so nam:');
let money = prompt('Nhap so tien:');;

let moneyInOneYear = money * (bankPercent / ONE_HUNDRED_PERCENT);

let interestMoney = year * moneyInOneYear;

let total = +money + + interestMoney;

let message = `
<h1>Ung Dung Tinh Lai suat cua ngan hang: ${bankName}</h1>
<pre>
So Nam Gui: ${year}

Lai suat:${bankPercent} %

Sau ${year} nam tien lai: ${interestMoney}

So tien goc va lai sau ${year} nam: ${total}

</pre>
`;

document.write(message);
