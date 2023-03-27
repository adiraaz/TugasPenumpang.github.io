var penumpang = []; //array kosong
tambahPenumpang = function (namaPenumpang, penumpang){
if (penumpang.length == 0) { //untuk mrnghitung panjangnya data
    penumpang.push(namaPenumpang); //untuk menambah data ke dalam array
    return penumpang; //untuk mengulang isi array & keluar dari function
} else {
    for (i = 0; i < penumpang.length; i++) { //untuk mencari ulang isi panjang data yang sudah di isi
    if (penumpang[i] == undefined){ //jika isi penumpang kosong/undefined
        penumpang[i] = namaPenumpang; //menambah isi kursi yang kosong
        return penumpang; //mengembalikan isi array & keluar dari function
    } else if (namaPenumpang == penumpang[i]) { //untuk mencari data sama yang telah diinput datanya
        console.log('penumpang tersebut sudah ada di dalam angkot. '); //memberikan informasi data yang sama/sudah ada
        return penumpang;//mengembalikan isi array & keluar dari function
    } else if (i == penumpang.length - 1) {//karena i nilainya 0, dan penumpang.length mempunyai nilai 1.
        //fungsi -1 setelah penumpang.length adalah untuk menyamakan nilai i dan penumpang.length
        penumpang.push(namaPenumpang);//menambah nama penumpang
        return penumpang;//mengembalikan isi array & keluar dari function
       }
      }
     }
    }