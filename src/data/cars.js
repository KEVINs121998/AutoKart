  const cars = [
    {
      id: 1,
      name: "Maruti Swift",
      year: 2021,
      price: 625000,
      km: 32000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Manual",
     img: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Swift%202092.JPG",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Swift%202093.JPG",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Swift%202098.JPG",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Swift%204456.JPG"
  ]
    },
    {
      id: 2,
      name: "Hyundai Creta",
      year: 2020,
      price: 1150000,
      km: 45000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Manual",
    img: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Creta%201.5%20GLS%202022%20%281%29.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Creta%201.5%20GLS%202022%20%282%29.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Hyundai%20Creta%201.5%20GLS%202022%20%284%29.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Hyundai%20Creta%20SE.jpg"
  ]
    },
    {
      id: 3,
      name: "Tata Nexon",
      year: 2022,
      price: 875000,
      km: 21000,
      owner: "1st Owner",
      condition: "Accidental",
      transmission: "Manual",
       img: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Tata%20Nexon%20XZA%2B%20front%20view.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Tata%20Nexon%20XZA%2B%20rear%20view.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Nexon%202023%20Rear%20View%202.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20Nexon%20Blue%20Dual%20Tone.jpg"
  ]
    },
    {
      id: 4,
      name: "Honda City",
      year: 2019,
      price: 925000,
      km: 52000,
      owner: "2nd Owner",
      condition: "Good",
      transmission: "Automatic",
     img: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Honda%20City%20ZX%20i-VTEC%20%28India%29%20front%20view.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Honda%20City%20ZX%20i-VTEC%20%28India%29%20rear%20view.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Honda%20City%201.5%20GN2%20%2820220317%29%2002.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20City%201.5%20S%202022%20%281%29.jpg"
  ]
    },
    {
      id: 5,
      name: "Toyota Innova",
      year: 2019,
      price: 1650000,
      km: 68000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Manual",
     img: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Innova%20Crysta.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Innova%20Crysta%20front.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Innova%20Crysta%20rear.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Innova%20Crysta%20side.jpg"
  ]
    },
    {
      id: 6,
      name: "Kia Seltos",
      year: 2021,
      price: 1125000,
      km: 28000,
      owner: "1st Owner",
      condition: "Flooded",
      transmission: "Automatic",
       img: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Seltos%20car%20Htx%20model.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Seltos%202024.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Seltos%202024%204.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Seltos%20X-line.jpg"
  ]
    },
    {
      id: 7,
      name: "Mahindra XUV700",
      year: 2022,
      price: 1850000,
      km: 24000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Automatic",
       img: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Mahindra%20XUV700%202.2%20AX7%20%28India%29%20front%20view.png",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Mahindra%20XUV700%202.2%20AX7%20%28India%29%20rear%20view.png",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Mahindra%20XUV700%20AX7L%20front.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Mahindra%20XUV700%20AX7L%20rear.jpg"
  ]
    },
    {
      id: 8,
      name: "Volkswagen Polo",
      year: 2020,
      price: 650000,
      km: 35000,
      owner: "2nd Owner",
      condition: "Accidental",
      transmission: "Manual",
       img: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/2020%20Volkswagen%20Polo%20GT%20TSI%20%28India%29%20front%20view.png",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Volkswagen%20Polo%20Mk5%20brown%20front%20view%20in%20Brunei.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Volkswagen%20Polo%20Mk5%20brown%20rear%20view%20in%20Brunei.jpg",
    "https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Polo%20GT%20TSI%20in%20rain%20on%20an%20Indian%20street.jpg"
  ]
    },
    {
      id: 9,
      name: "Hyundai i20",
      year: 2021,
      price: 725000,
      km: 29000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Manual",
       img: [
    "https://commons.wikimedia.org/wiki/Special:FilePath/2020%20Hyundai%20i20%201.5%20Asta%20%28O%29%20Diesel%20%28India%29%20front%20view.png",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2020%20Hyundai%20i20%201.5%20Asta%20%28O%29%20Diesel%20%28India%29%20rear%20view.png",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Hyundai%20i20%20N%20Line%20%28BI3%3B%20India%29%20front%20view.png",
    "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Hyundai%20i20.jpg"
  ]
    },
    {
      id: 10,
      name: "Maruti Baleno",
      year: 2022,
      price: 780000,
      km: 18000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Automatic",
     img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Maruti%20Suzuki%20Baleno%20Alpha%20%28India%29%20front%20view%2002.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Maruti%20Suzuki%20Baleno%20Alpha%20%28India%29%20front%20view.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Maruti%20Suzuki%20Baleno%20Alpha%20%28India%29%20rear%20view.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Suzuki%20Baleno%2C%20South%20Surabaya.jpg"
]
    },
    {
      id: 11,
      name: "Tata Harrier",
      year: 2020,
      price: 1325000,
      km: 41000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Manual",
     img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20H5X%20concept%20for%20the%20production%20Harrier%20model%20at%20GIMS%202018%20%28Ank%20Kumar%29%2001.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20H5X%20concept%20for%20the%20production%20Harrier%20model%20at%20GIMS%202018%20%28Ank%20Kumar%29%2003.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20H5X%20concept%20for%20the%20production%20Harrier%20model%20at%20GIMS%202018%20%28Ank%20Kumar%29%2007.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Tata%20H5X%20concept%20for%20the%20production%20Harrier%20model%20at%20GIMS%202018%20%28Ank%20Kumar%29%2008.jpg"
]
    },
    {
      id: 12,
      name: "MG Hector",
      year: 2021,
      price: 1425000,
      km: 33000,
      owner: "2nd Owner",
      condition: "Good",
      transmission: "Automatic",
     img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/MG%20Hector%20Diesel%20%28India%29%20front%20view.png",
  "https://commons.wikimedia.org/wiki/Special:FilePath/2019%20MG%20Hector%20at%20the%20MG%20Motor%20India%20manufacturing%20plant%20in%20Halol%2C%20Gujarat.png",
  "https://commons.wikimedia.org/wiki/Special:FilePath/MG%28Morris%20Garages%29%20Hector%20SUV%20in%20Jamshedpur%2C%20Jharkhand%2C%20India%20%28Ank%20Kumar%2C%20Infosys%20Limited%29%29%2001.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/MG%28Morris%20Garages%29%20Hector%20SUV%20in%20Jamshedpur%2C%20Jharkhand%2C%20India%20%28Ank%20Kumar%2C%20Infosys%20Limited%29%29%2002.jpg"
]
    },
    {
      id: 13,
      name: "Honda Amaze",
      year: 2019,
      price: 625000,
      km: 48000,
      owner: "2nd Owner",
      condition: "Accidental",
      transmission: "Manual",
     img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Amaze%20front%20view.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Amaze%20India%20Side%20View.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Amaze%202018%20%28rear%29%20in%20Uttar%20Pradesh.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Amaze%20VX%20India%20%28cropped%29.jpg"
]
    },
    {
      id: 14,
      name: "Maruti Brezza",
      year: 2022,
      price: 925000,
      km: 22000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Manual",
    img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Brezza.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Brezza%20-%20front.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Maruti%20Suzuki%20Vitara%20Brezza%201.5%20ZXi%2B%20%28India%29%20front%20view.png",
  "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20Maruti%20Suzuki%20Vitara%20Brezza%20VXI.jpg"
]
    },
    {
      id: 15,
      name: "Kia Sonet",
      year: 2021,
      price: 875000,
      km: 31000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Automatic",
     img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Sonet%201.5%20EX%202021%20%2854309217638%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Sonet%201.5%20EX%202022.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Sonet%201.5%20EX%202023%20%2854213125624%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Kia%20Sonet%20QY%20FL%201.5%20EX%20Imperial%20Blue%20-%20front.jpg"
]
    },
    {
      id: 16,
      name: "Toyota Fortuner",
      year: 2018,
      price: 2450000,
      km: 72000,
      owner: "2nd Owner",
      condition: "Good",
      transmission: "Automatic",
     img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/2008-2010%20Toyota%20Fortuner%2C%20first%20generation%2C%20front%20view.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Fortuner%20%28first%20generation%29%20%28rear%29%2C%20Serdang.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Fortuner%20pre-facelift.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Fortuner%20TGN61%20FL1%202.7%20G%204x2%20Attitude%20Black%20Mica.jpg"
]
    },
    {
      id: 17,
      name: "Renault Kwid",
      year: 2020,
      price: 425000,
      km: 27000,
      owner: "1st Owner",
      condition: "Flooded",
      transmission: "Manual",
      img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Kwid%20%28front%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Kwid%20%28rear%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20KWID%20RXT%28O%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Kwid%202017%20in%20Montevideo%20%28front%29.jpg"
]
    },
    {
      id: 18,
      name: "Skoda Slavia",
      year: 2022,
      price: 1185000,
      km: 19000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Automatic",
  img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/2021%20%C5%A0koda%20Slavia%201.5%20TSI%20Style%20%28India%29%20front%20view.png",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Skoda%20Slavia%20Side%20view.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/IN%20Mumbai%200906%20%2884%29%20%2817256087015%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/India%20Adventure%20-%20Rajasthan%20%2811753090444%29.jpg"
]
    },
    {
      id: 19,
      name: "Mahindra Thar",
      year: 2021,
      price: 1375000,
      km: 26000,
      owner: "1st Owner",
      condition: "Good",
      transmission: "Manual",
      img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Thar.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Thar%20-%20panoramio%20%281%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Thar%20in%20dark%20red.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Mahindra%20Thar%20in%20maroon%2C%20rear%20right.jpg"
]
    },
    {
      id: 20,
      name: "Ford EcoSport",
      year: 2019,
      price: 575000,
      km: 55000,
      owner: "2nd Owner",
      condition: "Accidental",
      transmission: "Manual",
   img: [
  "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20EcoSport%20%28front%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20EcoSport%20%28rear%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20EcoSport%20%28side%29.jpg",
  "https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20EcoSport%201.5%20TDCi%20SE%202019.jpg"
]
    }
  ];

  export default cars;
