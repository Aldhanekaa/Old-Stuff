function name(jmlhAngkot, angkotBaik, angkotRusak) {

    var i = 1;

    var kondisiAngkot = {
        'baik': ' Beroprasi Dengan Baik',
        'rusak': ' Sedang Rusak',
        'buruk': ' Beroprasi Buruk'
    };

    for (i; i <= jmlhAngkot; i++) {
        if (i <= angkotBaik && i != angkotRusak[1]) {
            console.log('Angkot No ' + i + kondisiAngkot['baik']);
        } else if (i == angkotRusak[0] || i == angkotRusak[1] || i == angkotRusak[2]) {
            console.log('Angkot No ' + i + kondisiAngkot['rusak'])
        } else {
            console.log('Angkot No ' + i + kondisiAngkot['buruk'])
        }
    };

    var d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var b = true;
    while (b === true) {
        var nanya = prompt('Cek Angkot')

        switch (nanya) {
            case 'angkot no ' + d[0]:
            case 'angkot no ' + d[1]:
            case 'angkot no ' + d[3]:
            case 'angkot no ' + d[4]:
                alert(nanya + kondisiAngkot['baik']);
                break;
            case 'angkot no ' + d[5]:
            case 'angkot no ' + d[8]:
            case 'angkot no ' + d[9]:
                alert(nanya + kondisiAngkot['buruk']);
                break;
            case 'angkot no ' + d[7]:
            case 'angkot no ' + d[2]:
            case 'angkot no ' + d[6]:
                alert(nanya + kondisiAngkot['rusak']);
                break;
            default:
                var b = confirm('Data Tidak Terdaftar Atau Mungkin Anda Salah Command');
                break;
        }

    };
}