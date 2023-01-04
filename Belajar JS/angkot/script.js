

class angkot {
    constructor(namaSopir, trayek, penumpang, kas) {
        this.namaSopir = namaSopir;
        this.trayek = trayek;
        this.penumpang = penumpang;
        this.kas = kas
    }
    penumpangNaik(namaPenumpang) {
        this.penumpang.push(namaPenumpang)
    }
    penumpangTurun(namaPenumpang, bayar = 2000) {
        if (this.penumpang.length == 0) {
            alert('penumpang tidak ada!')
            return this.penumpang
        } else if (bayar == '') {
            this.kas -= 2000
        }
        for (let i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined
            }
        }
        this.kas += bayar;
        var totalPenumpang = this.penumpang.length - 1
        return `Sekarang penumpang ada ${totalPenumpang} orang, diantaranya adalah: ${this.penumpang}`
    }
}

let Dody = new angkot('Dody', ['jakarta', 'bogor'], [], 0)