var carList = [
    'ayla',
    'agya',
    'avanza',
    'calya',
    'kijang',
    'innova'
]

console.log(carList)
document.writeln(carList)
document.getElementById('cars').innerHTML = carList

//TIPE DATA
const string = 'Buku'
const number = 1234567
const boolean = true //false
const date = new Date()

console.log(string)
console.log(number)
console.log(boolean)
console.log(date)

//ARRAY MENTHOD
console.log('DATA INDEX KE TIGA:', carList[3]) //muncul data index ke-
console.log('BANYAK DATA:', carList.length)    //muncul banyaknya data
console.log('UBAH ARRAY JADI STRING', carList.toString()) //ubah array jadi string

//TAMBAH DATA ARRAY
carList.push('Tesla')
console.log(carList)

//REMOVE LAST
carList.pop()
console.log(carList)

//DELETE
delete carList[3]
console.log (carList)

//NEW DATA
const motorCycleList = [
    'VARIO',
    'PCX',
    'ADV',
    'NMAX',
    'CBR',
    'VESPA'
]

//CONCAT
const newVehicle = carList.concat(motorCycleList)
console.log ('DATA KENDARAAN :', newVehicle)

//PERHITUNGAN
const resultTambah = 3 + 2
console.log('Hasil Tambah :' resultTambah)











const foods = [
    {
        dataId: 1,
        rasa: 'Manis',
        warna: 'Merah',
        bentuk: 'bulat'
    },

    {
        dataId: 2,
        rasa: 'Asam',
        warna: 'Kuning',
        bentuk: 'Kotak'
    },

    {
        dataId: 3,
        rasa: 'Pedas',
        warna: 'Merah',
        bentuk: 'Panjang'
    }
]

foods.forEach(food => {} )