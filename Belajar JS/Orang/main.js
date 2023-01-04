// let mahasiswa = [
//     {
//         nama: 'Aldhan',
//         energi: 10,
//         makan(porsi) {
//             this.energi += porsi;
//             return `Halo ${this.nama} !, Sekarang energi mu adalah: ${this.energi}`
//         }
//     }
// ]

// console.log(mahasiswa.makan(10));


// function orang(nama = 'Aldhan', energi = 10, IQ = 140, porsi = 4, waktuMainGame = 4, waktuBacaBuku = 10) {
//     this.nama = nama;
//     this.energi = energi;
//     this.IQ = IQ;
//     this.waktuMainGame = waktuMainGame;
//     this.waktuBacaBuku = waktuBacaBuku;
//     this.porsi = porsi;
//     console.log("Kode Berhasil Dijalankan ! \n")
// }

// orang.prototype.makan = function () {
//     this.energi += 3 * this.porsi;
//     return `sekarang energi ${this.nama} adalah : ${this.energi}`;
// }
// orang.prototype.mainGame = function () {
//     this.IQ -= 3 * this.waktuMainGame;
//     return `sekarang IQ ${this.nama} adalah : ${this.IQ}`
// }
// orang.prototype.bacaBuku = function () {
//     this.IQ += 2 * this.waktuBacaBuku;
//     return `sekarang IQ ${this.nama} bertambah : ${this.waktuBacaBuku} dan IQ ${this.nama} menjadi : ${this.IQ}`
// }

// let nama = ['Aldhan', 'Dody']
// let energi = [10, 20]

// let aldhan = new orang()

const mhs = [
    {
        nama: 'Aldhaneka Aufa Izzat',
        tempat_kuliah: 'MIT University',
        mataKuliah: ['Data Science', 'Algrithm', 'Data analysis', 'Machine Learning', 'AI']
    },

    {
        nama: 'Aldhan',
        tempat_kuliah: 'MIT University',
        mataKuliah: ['Data Science', 'Algrithm', 'Data analysis', 'Machine Learning', 'AI']
    }
]

function takeData(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(x => `<li>${x}</li>`).join('')}
    </ol>`
}

const el = () => {
    return `${mhs.map(m => `<div class="mhs" style="margin-bottom: 100px;">
    <h2>Nama : ${m.nama}</h2>
    <h3>tempat kuliah : ${m.tempat_kuliah}</h3>
    <h4>Mata Kuliah : <h4>
    ${takeData(m.mataKuliah)}
</div>`).join('')}`
}

document.body.innerHTML = el();







function init() {
    return (firstName, ...lastName) => {
        return `${(firstName, lastName) ? `dia namanya adalah ${firstName}  ${lastName}` : `Nama dia tidak diketahui`}`
    }
}
let p = init()
console.log(p('Aldhaneka', 'Aufa Izzat'))