var tabel = document.getElementById('tabel'),
            nim = document.getElementById('nim'),
            nama = document.getElementById('nama'),
            prodi = document.getElementById('prodi'),
            btnTambah = document.getElementById('btnTambah'),
            form = document.getElementById('frmUtama'),
            pesan = document.getElementById('pesan'),
            email = document.getElementById('email'),
            db;         
 
function tambahBaris(e) {
    // Periksa apakah NIM sudah ada
    if (tabel.rows.namedItem(nim.value)) {
        pesan.textContent = 'Error: Nim sudah terdaftar!';
        e.preventDefault();
        return;
    }

    data.nama = nama.value;
    data.nim = nim.value;
    data.prodi = prodi.value;
    data.email = email.value;
 
    // Membuat baris baru
    var baris = tabel.insertRow();
    baris.id = nim.value;
    baris.insertCell().appendChild(document.createTextNode(nim.value));
    baris.insertCell().appendChild(document.createTextNode(nama.value));
    baris.insertCell().appendChild(document.createTextNode(prodi.value));
    baris.insertCell().appendChild(document.createTextNode(email.value));
 
    // Membuat tombol hapus untuk setiap baris
    var btnHapus = document.createElement('input');
    btnHapus.type = 'button';
    btnHapus.value = 'Hapus';
    btnHapus.id = nim.value;            
    baris.insertCell().appendChild(btnHapus);
 
    e.preventDefault();
}               
 
function hapusBaris(e) {
    if (e.target.type=='button') {                
        tabel.deleteRow(tabel.rows.namedItem(e.target.id).sectionRowIndex);
    }
}
function Kembali(){
    history.go(-1);
}
function Hapus(){
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("prodi").value = "";
    document.getElementById("email").value = "";
}
form.addEventListener('submit', tambahBaris, false);                  
tabel.addEventListener('click', hapusBaris, true);            

let data = {
    nama : '',
    nim : '',
    prodi :'',  
    email :'', 
    
    set setNama(newNama){
        this.nama = newNama;
    },
    get getNama(){
        return this.nama;
    },
    set setNim(newNim){
        this.nim = newNim;
    },
    get getNim(){
        return this.nim;
    },
    set setProdi(newProdi){
        this.prodi = newProdi;
    },
    get getProdi(){
        return this.prodi;
    },
    set setEmail(newEmail){
        this.email = newEmail;
    },
    get getEmail(){
        return this.email;
    } 
}