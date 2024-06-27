// get value string
let stringNumber = "";
let arrNumber = []
let arrNumber2 = []
let arrTongHop = []
// nối mảng
document.querySelector("#newStringNumber").oninput = function (event) {
    stringNumber = event.target.value;
    arrNumber2 = splitString();
    arrTongHop = arrNumber.concat(arrNumber2)
}

function splitString() {
    let arrcheck = stringNumber.split(" ");
    let arr = []
    let check = /^-?\d*\.?\d+$/
    for (item of arrcheck) {
        if (check.test(item)) {
            arr.push(item * 1)
        }
    }
    return arr
}

document.querySelector("#stringNumber").oninput = function (event) {
    stringNumber = event.target.value;
    arrNumber = splitString();
    arrTongHop = arrNumber.concat(arrNumber2)
}


//tổng số dương
document.querySelector("#tongSoDuong").onclick = function () {
    let tong = 0

    arrTongHop.forEach(value => {
        if (value >= 0) {
            tong += value * 1;
        }
    });
    document.querySelector("#kqBtn").innerHTML = `Tổng các số dương là: ${tong} `;
}

// đếm số dương
document.querySelector("#demSoDuong").onclick = function () {
    let dem = 0
    arrTongHop.forEach(value => {
        if (value >= 0) {
            dem += 1;
        }
    });
    document.querySelector("#kqBtn").innerHTML = `Số lượng số dương là: ${dem} `;
}

// tìm số nhỏ nhất
document.querySelector("#timMin").onclick = function () {

    let newArr = arrTongHop.sort((a, b) => a - b)

    document.querySelector("#kqBtn").innerHTML = `Số nhỏ nhất là: ${newArr[0]} `;
}

// số dương nhỏ nhất
document.querySelector("#timMinDuong").onclick = function () {

    let newArr = arrTongHop.sort((a, b) => a - b)
    let minDuong = newArr.find(item => item > 0)

    document.querySelector("#kqBtn").innerHTML = `Số dương nhỏ nhất là: ${minDuong} `;
}

// số chắn cuối mảng
document.querySelector("#timSoChan").onclick = function () {
    let newArr = arrTongHop.reverse().filter(item => {
        if (item - item.toFixed(0) == 0) {
            return item
        }
    });
    let kq = newArr.find(item => item % 2 == 0)

    if (!kq) {
        kq = "-1 (-1 là không có)"
    }

    document.querySelector("#kqBtn").innerHTML = `Số chắn cuối cùng là: ${kq} `;

}

// sắp xếp mảng tăng
document.querySelector("#xepTang").onclick = function () {
    arrTongHop = arrTongHop.sort((a, b) => a - b)

    document.querySelector("#kqBtn").innerHTML = `Mảng mới đã xếp: ${arrTongHop} `;
}

// tìm số nguyên tố đầu tiên
function ktUocSo(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}
document.querySelector("#timSNT").onclick = function () {
    let kq = "Không có số nào"
    for (let item of arrTongHop) {
        if (item - item.toFixed(0) == 0) {
            if (item <= 1) {
                continue
            } else if (item == 2) {
                kq = item;
                break;
            } else {
                if (ktUocSo(item)) {
                    kq = item;
                    break
                }
            }
        }
    }
    document.querySelector("#kqBtn").innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${kq} `;
}

//đổi vị trí
function kt2So(num1, num2) {
    if (num1 > num2) {
        return true
    } else {
        return false
    }
}

document.querySelector("#doiViTri").onclick = function () {
    let doi = document.querySelector("#indexBiDoi").value;
    let biDoi = document.querySelector("#indexDoi").value;
    let kt = true & kt2So(doi, 0) & kt2So(biDoi, 0) & kt2So(arrTongHop.length, biDoi) & kt2So(arrTongHop.length, doi)
    if (!kt) {
        document.querySelector("#kqBtn").innerHTML = `Kiểm tra lại vị trí thuộc khoảng 0 đến ${arrTongHop.length - 1}`;

    } else {
        if (doi != biDoi) {
            let temp = arrTongHop[biDoi]
            arrTongHop[biDoi] = arrTongHop[doi]
            arrTongHop[doi] = temp
        }
        document.querySelector("#kqBtn").innerHTML = `Chuỗi sau khi đổi: ${arrTongHop} `
    }
}

// ktra số nguyên

document.querySelector("#ktraSoNguyen").onclick = function () {
    let kq = arrTongHop.filter((item) => {
        if (typeof item === 'number' && isFinite(item) && Math.floor(item) === item) {
            return item
        }
    })
    document.querySelector("#kqBtn").innerHTML = `Các số nguyên trong mảng: ${kq.length} <br> Gồm: ${kq}`
}

// so sánh 

document.querySelector("#soSanhAmDuong").onclick = function () {
    let soDuong = arrTongHop.filter(item => item > 0);
    let soAm = arrTongHop.filter(item => item < 0);
    let kq = ""
    if (soDuong.length > soAm.length) {
        kq = "nhiều hơn"
    } else if (soDuong.length < soAm.length) {
        kq = "ít hơn"
    } else {
        kq = "bằng"
    }
    document.querySelector("#kqBtn").innerHTML = `Số dương là: ${soDuong.length} ${kq} số âm là: ${soAm.length}`

}   