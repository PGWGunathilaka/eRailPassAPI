import { IStation } from "src/models/Station";

const stationDataRaw: IStation[] = [
    {
        "sLine": 10,
        "sName": "Nattandiya",
        "position": 47.2732
    },
    {
        "sLine": 2,
        "sName": "Slave Island",
        "position": 3.655
    },
    {
        "sLine": 2,
        "sName": "Wellawatta",
        "position": 9.3498
    },
    {
        "sLine": 2,
        "sName": "Dehiwala",
        "position": 12.0476
    },
    {
        "sLine": 2,
        "sName": "Mount Lavinia",
        "position": 14.226
    },
    {
        "sLine": 2,
        "sName": "Matara",
        "position": 160.6248
    },
    {
        "sLine": 2,
        "sName": "Bentota",
        "position": 63.65
    },
    {
        "sLine": 2,
        "sName": "Aluthgama",
        "position": 62.2144
    },
    {
        "sLine": 9,
        "sName": "Anuradhapura",
        "position": 131.6772
    },
    {
        "sLine": 2,
        "sName": "Hikkaduwa",
        "position": 98.1335
    },
    {
        "sLine": 1,
        "sName": "Batticaloa",
        "position": 124.0899
    },
    {
        "sLine": 2,
        "sName": "Colombo Fort",
        "position": 2.0234
    },
    {
        "sLine": 3,
        "sName": "Colombo Fort",
        "position": 0
    },
    {
        "sLine": 5,
        "sName": "Colombo Fort",
        "position": 0
    },
    {
        "sLine": 10,
        "sName": "Ragama",
        "position": 0.2392
    },
    {
        "sLine": 5,
        "sName": "Ragama",
        "position": 15.5928
    },
    {
        "sLine": 5,
        "sName": "Kinigama",
        "position": 271.4903
    },
    {
        "sLine": 5,
        "sName": "Bandarawela",
        "position": 269.1765
    },
    {
        "sLine": 7,
        "sName": "Sarasavi Uyana",
        "position": 1.1472
    },
    {
        "sLine": 5,
        "sName": "Enderamulla",
        "position": 11.7359
    },
    {
        "sLine": 5,
        "sName": "Ella",
        "position": 282.1408
    },
    {
        "sLine": 5,
        "sName": "Haputale",
        "position": 258.0935
    },
    {
        "sLine": 5,
        "sName": "Nanu Oya",
        "position": 216.5503
    },
    {
        "sLine": 7,
        "sName": "Kandy",
        "position": 6.331
    },
    {
        "sLine": 2,
        "sName": "Kollupitiya",
        "position": 5.1878
    },
    {
        "sLine": 9,
        "sName": "Mihintale",
        "position": 133.6289
    },
    {
        "sLine": 5,
        "sName": "Badulla",
        "position": 302.4693
    },
    {
        "sLine": 5,
        "sName": "Ganemulla",
        "position": 22.7122
    },
    {
        "sLine": 3,
        "sName": "Kottawa",
        "position": 21.6055
    },
    {
        "sLine": 5,
        "sName": "Weligalla",
        "position": 126.5382
    },
    {
        "sLine": 5,
        "sName": "Yagoda",
        "position": 24.5469
    },
    {
        "sLine": 5,
        "sName": "Gampaha",
        "position": 27.6588
    },
    {
        "sLine": 10,
        "sName": "Kudahakapola",
        "position": 10.0175
    },
    {
        "sLine": 10,
        "sName": "Katunayake",
        "position": 17.3626
    },
    {
        "sLine": 10,
        "sName": "Liyanagemulla",
        "position": 14.9686
    },
    {
        "sLine": 2,
        "sName": "Maradana",
        "position": 0.129
    },
    {
        "sLine": 3,
        "sName": "Maradana",
        "position": 1.8093
    },
    {
        "sLine": 5,
        "sName": "Maradana",
        "position": 1.7944
    },
    {
        "sLine": 5,
        "sName": "Hunupitiya",
        "position": 10.0553
    },
    {
        "sLine": 5,
        "sName": "Horape",
        "position": 14.1474
    },
    {
        "sLine": 5,
        "sName": "Daraluwa",
        "position": 30.1065
    },
    {
        "sLine": 5,
        "sName": "Bemmulla",
        "position": 32.2328
    },
    {
        "sLine": 5,
        "sName": "Magalegoda",
        "position": 34.4479
    },
    {
        "sLine": 5,
        "sName": "Heendeniya-Pattigoda",
        "position": 35.9703
    },
    {
        "sLine": 5,
        "sName": "Veyangoda",
        "position": 37.7952
    },
    {
        "sLine": 10,
        "sName": "Negombo",
        "position": 23.7143
    },
    {
        "sLine": 10,
        "sName": "Kurana",
        "position": 20.2291
    },
    {
        "sLine": 10,
        "sName": "Seeduwa",
        "position": 12.9083
    },
    {
        "sLine": 10,
        "sName": "Katunayake South - EPZ",
        "position": 16.2975
    },
    {
        "sLine": 10,
        "sName": "Alawathupitiya",
        "position": 11.3298
    },
    {
        "sLine": 10,
        "sName": "Kandana",
        "position": 3.5879
    },
    {
        "sLine": 10,
        "sName": "Peralanda",
        "position": 1.8324
    },
    {
        "sLine": 10,
        "sName": "Kochchikade",
        "position": 30.1293
    },
    {
        "sLine": 10,
        "sName": "Bolawatta",
        "position": 33.8249
    },
    {
        "sLine": 10,
        "sName": "Waikkala",
        "position": 31.6614
    },
    {
        "sLine": 10,
        "sName": "Boralessa",
        "position": 36.4569
    },
    {
        "sLine": 10,
        "sName": "Lunuwila",
        "position": 39.4653
    },
    {
        "sLine": 10,
        "sName": "Thummodara",
        "position": 44.4969
    },
    {
        "sLine": 10,
        "sName": "Nelumpokuna",
        "position": 54.7577
    },
    {
        "sLine": 10,
        "sName": "Puttalam",
        "position": 120.8732
    },
    {
        "sLine": 10,
        "sName": "Palavi",
        "position": 116.2197
    },
    {
        "sLine": 2,
        "sName": "Bambalapitiya",
        "position": 7.157
    },
    {
        "sLine": 2,
        "sName": "Rathmalana",
        "position": 16.1638
    },
    {
        "sLine": 2,
        "sName": "Walgama",
        "position": 157.333
    },
    {
        "sLine": 2,
        "sName": "Kamburugamuwa",
        "position": 155.2415
    },
    {
        "sLine": 10,
        "sName": "Ja-Ela",
        "position": 6.9953
    },
    {
        "sLine": 2,
        "sName": "Weligama Trainstation",
        "position": 146.6609
    },
    {
        "sLine": 5,
        "sName": "Nawalapitiya",
        "position": 145.742
    },
    {
        "sLine": 5,
        "sName": "Gampola",
        "position": 131.1183
    },
    {
        "sLine": 9,
        "sName": "Kurunegala",
        "position": 21.2171
    },
    {
        "sLine": 7,
        "sName": "Kandy",
        "position": 6.1342
    },
    {
        "sLine": 2,
        "sName": "Boossa",
        "position": 108.8609
    },
    {
        "sLine": 2,
        "sName": "Kumarakanda",
        "position": 102.613
    },
    {
        "sLine": 2,
        "sName": "Piyathigama",
        "position": 112.9292
    },
    {
        "sLine": 2,
        "sName": "Thiranagama",
        "position": 101.0479
    },
    {
        "sLine": 2,
        "sName": "Ginthota",
        "position": 111.3564
    },
    {
        "sLine": 2,
        "sName": "Panadura",
        "position": 28.5481
    },
    {
        "sLine": 2,
        "sName": "Wadduwa",
        "position": 34.7742
    },
    {
        "sLine": 2,
        "sName": "Kalutara North",
        "position": 42.2908
    },
    {
        "sLine": 2,
        "sName": "Kalutara South",
        "position": 44.3431
    },
    {
        "sLine": 2,
        "sName": "Payagala",
        "position": 51.729
    },
    {
        "sLine": 2,
        "sName": "Dodanduwa",
        "position": 104.5578
    },
    {
        "sLine": 2,
        "sName": "Hikkaduwa",
        "position": 98.1335
    },
    {
        "sLine": 2,
        "sName": "Seenigama",
        "position": 96.1334
    },
    {
        "sLine": 2,
        "sName": "Kahawe",
        "position": 92.5552
    },
    {
        "sLine": 2,
        "sName": "Madampagama",
        "position": 88.7842
    },
    {
        "sLine": 2,
        "sName": "Ambalangoda",
        "position": 86.0784
    },
    {
        "sLine": 2,
        "sName": "Balapititya",
        "position": 81.0451
    },
    {
        "sLine": 2,
        "sName": "Ahungalla",
        "position": 76.8446
    },
    {
        "sLine": 2,
        "sName": "Kosgoda",
        "position": 73.8054
    },
    {
        "sLine": 2,
        "sName": "Richmond Hill",
        "position": 114.5384
    },
    {
        "sLine": 2,
        "sName": "Secretariat",
        "position": 2.5728
    },
    {
        "sLine": 5,
        "sName": "Wanawasala",
        "position": 8.6536
    },
    {
        "sLine": 2,
        "sName": "Habaraduwa",
        "position": 131.1272
    },
    {
        "sLine": 5,
        "sName": "Watagoda",
        "position": 203.6408
    },
    {
        "sLine": 5,
        "sName": "Hatton",
        "position": 182.0694
    },
    {
        "sLine": 5,
        "sName": "Bujjomuwa",
        "position": 62.3894
    },
    {
        "sLine": 5,
        "sName": "Yaththalgoda",
        "position": 60.3087
    },
    {
        "sLine": 5,
        "sName": "Ambepussa",
        "position": 56.6882
    },
    {
        "sLine": 5,
        "sName": "Botale",
        "position": 54.6338
    },
    {
        "sLine": 5,
        "sName": "Wijayarajadahana",
        "position": 48.9954
    },
    {
        "sLine": 5,
        "sName": "Ganegoda",
        "position": 46.6507
    },
    {
        "sLine": 5,
        "sName": "Batuwatta",
        "position": 19.3398
    },
    {
        "sLine": 5,
        "sName": "Pattipola",
        "position": 234.4296
    },
    {
        "sLine": 5,
        "sName": "Dematagoda",
        "position": 3.6656
    },
    {
        "sLine": 5,
        "sName": "Ganemulla",
        "position": 22.7122
    },
    {
        "sLine": 5,
        "sName": "Watawala",
        "position": 166.3027
    },
    {
        "sLine": 5,
        "sName": "Great Western",
        "position": 208.8497
    },
    {
        "sLine": 5,
        "sName": "Kotagala",
        "position": 187.0866
    },
    {
        "sLine": 5,
        "sName": "Talawakele",
        "position": 194.4563
    },
    {
        "sLine": 3,
        "sName": "Kottawa",
        "position": 21.6055
    },
    {
        "sLine": 3,
        "sName": "Godagama",
        "position": 30.0333
    },
    {
        "sLine": 3,
        "sName": "Malapalla",
        "position": 22.5257
    },
    {
        "sLine": 3,
        "sName": "Cotta Road",
        "position": 5.5184
    },
    {
        "sLine": 3,
        "sName": "Kirulapona",
        "position": 9.299
    },
    {
        "sLine": 3,
        "sName": "Homagama Hospital",
        "position": 25.1178
    },
    {
        "sLine": 3,
        "sName": "Nawinna",
        "position": 15.2621
    },
    {
        "sLine": 3,
        "sName": "Homagama",
        "position": 26.5835
    },
    {
        "sLine": 3,
        "sName": "Avissawella",
        "position": 61.3128
    },
    {
        "sLine": 3,
        "sName": "Nugegoda",
        "position": 11.021
    },
    {
        "sLine": 3,
        "sName": "Maharagama",
        "position": 16.4974
    },
    {
        "sLine": 3,
        "sName": "Narahenpita",
        "position": 7.5061
    },
    {
        "sLine": 3,
        "sName": "Watareka",
        "position": 33.208
    },
    {
        "sLine": 3,
        "sName": "Puwakpitiya",
        "position": 57.6738
    },
    {
        "sLine": 3,
        "sName": "Kosgama",
        "position": 51.4858
    },
    {
        "sLine": 3,
        "sName": "Waga",
        "position": 46.6216
    },
    {
        "sLine": 3,
        "sName": "Meegoda",
        "position": 31.741
    },
    {
        "sLine": 3,
        "sName": "Udahamulla",
        "position": 13.4623
    },
    {
        "sLine": 3,
        "sName": "Pannipitiya",
        "position": 19.0777
    },
    {
        "sLine": 3,
        "sName": "Padukka",
        "position": 37.3517
    },
    {
        "sLine": 3,
        "sName": "Panagoda",
        "position": 28.3166
    },
    {
        "sLine": 3,
        "sName": "Baseline Road",
        "position": 3.785
    },
    {
        "sLine": 10,
        "sName": "Chilaw",
        "position": 67.7557
    },
    {
        "sLine": 10,
        "sName": "Manuwangama",
        "position": 73.2295
    },
    {
        "sLine": 10,
        "sName": "Kiriyankalli",
        "position": 90.8112
    },
    {
        "sLine": 10,
        "sName": "Walahapitiya",
        "position": 50.3384
    },
    {
        "sLine": 10,
        "sName": "Kudawewa",
        "position": 53.0009
    },
    {
        "sLine": 10,
        "sName": "Kakkapalliya",
        "position": 61.7032
    },
    {
        "sLine": 10,
        "sName": "Madampe",
        "position": 57.1754
    },
    {
        "sLine": 10,
        "sName": "Mundalama",
        "position": 95.3301
    },
    {
        "sLine": 10,
        "sName": "Bangadeniya",
        "position": 76.234
    },
    {
        "sLine": 2,
        "sName": "Pinwatta",
        "position": 31.7898
    },
    {
        "sLine": 2,
        "sName": "Katukurunda",
        "position": 47.1777
    },
    {
        "sLine": 2,
        "sName": "Waskaduwa",
        "position": 38.477
    },
    {
        "sLine": 2,
        "sName": "Induruwa",
        "position": 67.7564
    },
    {
        "sLine": 2,
        "sName": "Mahainduruwa",
        "position": 70.4268
    },
    {
        "sLine": 2,
        "sName": "Maggona",
        "position": 53.713
    },
    {
        "sLine": 2,
        "sName": "Kandegoda",
        "position": 84.3121
    },
    {
        "sLine": 2,
        "sName": "Beruwala",
        "position": 56.927
    },
    {
        "sLine": 2,
        "sName": "Payagala North",
        "position": 50.5751
    },
    {
        "sLine": 2,
        "sName": "Ahangama",
        "position": 137.9026
    },
    {
        "sLine": 2,
        "sName": "Akurala",
        "position": 91.1071
    },
    {
        "sLine": 2,
        "sName": "Rathgama",
        "position": 105.5283
    },
    {
        "sLine": 2,
        "sName": "Telwatte",
        "position": 94.8307
    },
    {
        "sLine": 2,
        "sName": "Unawatuna",
        "position": 123.2329
    },
    {
        "sLine": 5,
        "sName": "Walpola",
        "position": 18.2209
    },
    {
        "sLine": 5,
        "sName": "Bulugahagoda",
        "position": 20.8266
    },
    {
        "sLine": 9,
        "sName": "Polgahawela",
        "position": 0
    },
    {
        "sLine": 5,
        "sName": "Polgahawela",
        "position": 74.5163
    },
    {
        "sLine": 5,
        "sName": "Wilwatta",
        "position": 52.5453
    },
    {
        "sLine": 5,
        "sName": "Mirigama",
        "position": 50.6658
    },
    {
        "sLine": 5,
        "sName": "Alawwa",
        "position": 66.2492
    },
    {
        "sLine": 9,
        "sName": "Hiriyala",
        "position": 47.8904
    },
    {
        "sLine": 9,
        "sName": "Ambanpola",
        "position": 76.4893
    },
    {
        "sLine": 9,
        "sName": "Muththettugala",
        "position": 23.737
    },
    {
        "sLine": 9,
        "sName": "Shrawasthipura",
        "position": 125.0069
    },
    {
        "sLine": 9,
        "sName": "Nailiya",
        "position": 17.2311
    },
    {
        "sLine": 9,
        "sName": "Maho",
        "position": 64.7693
    },
    {
        "sLine": 11,
        "sName": "Maho",
        "position": 0
    },
    {
        "sLine": 9,
        "sName": "Thalawa",
        "position": 116.4874
    },
    {
        "sLine": 9,
        "sName": "Thambuttegama",
        "position": 105.4195
    },
    {
        "sLine": 9,
        "sName": "Pothuhera",
        "position": 12.2641
    },
    {
        "sLine": 9,
        "sName": "Anuradhapura New Town",
        "position": 128.6982
    },
    {
        "sLine": 9,
        "sName": "Thalawattegedara",
        "position": 7.0865
    },
    {
        "sLine": 9,
        "sName": "Thandikulam",
        "position": 184.3674
    },
    {
        "sLine": 9,
        "sName": "Parasangaswewa",
        "position": 144.4883
    },
    {
        "sLine": 9,
        "sName": "Vavuniya",
        "position": 181.3442
    },
    {
        "sLine": 9,
        "sName": "Medawachchiya",
        "position": 157.7619
    },
    {
        "sLine": 6,
        "sName": "Medawachchiya",
        "position": 0
    },
    {
        "sLine": 9,
        "sName": "Murikandy",
        "position": 236.2089
    },
    {
        "sLine": 9,
        "sName": "Omanthai",
        "position": 194.2534
    },
    {
        "sLine": 9,
        "sName": "Thirumurikandi",
        "position": 248.3885
    },
    {
        "sLine": 9,
        "sName": "Tellippalai",
        "position": 337.8943
    },
    {
        "sLine": 9,
        "sName": "Meesalai",
        "position": 303.9579
    },
    {
        "sLine": 9,
        "sName": "Inuvil",
        "position": 331.2476
    },
    {
        "sLine": 9,
        "sName": "Elephant Pass",
        "position": 270.3589
    },
    {
        "sLine": 9,
        "sName": "Chavakachcheri",
        "position": 307.9413
    },
    {
        "sLine": 9,
        "sName": "Kokuvil",
        "position": 326.7181
    },
    {
        "sLine": 9,
        "sName": "Kodikamam",
        "position": 300.4178
    },
    {
        "sLine": 9,
        "sName": "Maviddapuram",
        "position": 339.5654
    },
    {
        "sLine": 9,
        "sName": "Mallakam",
        "position": 335.3468
    },
    {
        "sLine": 9,
        "sName": "Eluthumadduval",
        "position": 294.795
    },
    {
        "sLine": 9,
        "sName": "Chunnakam",
        "position": 333.4893
    },
    {
        "sLine": 9,
        "sName": "Kachcheri",
        "position": 323.125
    },
    {
        "sLine": 9,
        "sName": "Jaffna",
        "position": 324.0534
    },
    {
        "sLine": 9,
        "sName": "Punkankulam",
        "position": 321.9335
    },
    {
        "sLine": 6,
        "sName": "Mannar",
        "position": 79.6626
    },
    {
        "sLine": 6,
        "sName": "Talaimannar",
        "position": 107.0615
    },
    {
        "sLine": 11,
        "sName": "Kekirawa",
        "position": 50.1116
    },
    {
        "sLine": 11,
        "sName": "Habarana",
        "position": 72.1822
    },
    {
        "sLine": 11,
        "sName": "Galoya Junction",
        "position": 88.6973
    },
    {
        "sLine": 11,
        "sName": "Agbopura",
        "position": 25.3658
    },
    {
        "sLine": 11,
        "sName": "Kantale",
        "position": 29.8001
    },
    {
        "sLine": 11,
        "sName": "Trincomalee",
        "position": 70.6772
    },
    {
        "sLine": 11,
        "sName": "China Bay",
        "position": 63.9721
    },
    {
        "sLine": 1,
        "sName": "Polonnaruwa",
        "position": 33.1685
    },
    {
        "sLine": 1,
        "sName": "Minneriya",
        "position": 9.4091
    },
    {
        "sLine": 1,
        "sName": "Hingurakgoda",
        "position": 17.0557
    },
    {
        "sLine": 1,
        "sName": "Manampitiya",
        "position": 43.0948
    },
    {
        "sLine": 1,
        "sName": "Parakum Uyana",
        "position": 27.8601
    },
    {
        "sLine": 1,
        "sName": "Eravur",
        "position": 111.2767
    },
    {
        "sLine": 1,
        "sName": "Valaichchenai",
        "position": 93.1427
    },
    {
        "sLine": 7,
        "sName": "Wattegama",
        "position": 18.5053
    },
    {
        "sLine": 5,
        "sName": "Ihalakotte",
        "position": 96.8095
    },
    {
        "sLine": 5,
        "sName": "Pilimathalawa",
        "position": 112.2396
    },
    {
        "sLine": 7,
        "sName": "Ukuwela",
        "position": 28.6645
    },
    {
        "sLine": 5,
        "sName": "Balana",
        "position": 103.8344
    },
    {
        "sLine": 7,
        "sName": "Matale",
        "position": 34.3472
    },
    {
        "sLine": 5,
        "sName": "Pannaliya",
        "position": 77.4649
    },
    {
        "sLine": 5,
        "sName": "Kadugannawa",
        "position": 108.2708
    },
    {
        "sLine": 7,
        "sName": "Katugastota",
        "position": 11.8903
    },
    {
        "sLine": 5,
        "sName": "Weligalla",
        "position": 126.5382
    },
    {
        "sLine": 5,
        "sName": "Koshinna",
        "position": 121.3985
    },
    {
        "sLine": 5,
        "sName": "Ulapane",
        "position": 138.5108
    },
    {
        "sLine": 5,
        "sName": "Tembligala",
        "position": 135.0652
    },
    {
        "sLine": 5,
        "sName": "Galboda",
        "position": 157.0604
    },
    {
        "sLine": 5,
        "sName": "Rozella",
        "position": 173.5422
    },
    {
        "sLine": 5,
        "sName": "Ihala Watawala",
        "position": 168.9894
    },
    {
        "sLine": 5,
        "sName": "Inguru Oya",
        "position": 151.5276
    },
    {
        "sLine": 5,
        "sName": "Ambewela",
        "position": 231.0563
    },
    {
        "sLine": 5,
        "sName": "Diyatalawa",
        "position": 263.1803
    },
    {
        "sLine": 5,
        "sName": "Ohiya",
        "position": 241.7157
    },
    {
        "sLine": 5,
        "sName": "Idalgashinna",
        "position": 250.6202
    },
    {
        "sLine": 5,
        "sName": "Kinigama",
        "position": 271.4903
    },
    {
        "sLine": 5,
        "sName": "Hali-Ela",
        "position": 296.5183
    },
    {
        "sLine": 5,
        "sName": "Demodara",
        "position": 288.2679
    },
    {
        "sLine": 5,
        "sName": "Uduwara",
        "position": 293.2255
    },
    {
        "sLine": 5,
        "sName": "Heeloya",
        "position": 275.934
    },
    {
        "sLine": 5,
        "sName": "Badulla",
        "position": 302.4693
    },
    {
        "sLine": 1,
        "sName": "Laksha Uyana",
        "position": 24.8511
    },
    {
        "sLine": 2,
        "sName": "Kumbalgama",
        "position": 143.6602
    },
    {
        "sLine": 2,
        "sName": "Midigama",
        "position": 141.4265
    },
    {
        "sLine": 11,
        "sName": "Thampalakamam",
        "position": 48.5896
    },
    {
        "sLine": 11,
        "sName": "Ganthalawa",
        "position": 37.3109
    },
    {
        "sLine": 11,
        "sName": "Mollipothana",
        "position": 41.5668
    },
    {
        "sLine": 9,
        "sName": "Ganewatte",
        "position": 42.828
    },
    {
        "sLine": 9,
        "sName": "Wellawa",
        "position": 31.1204
    },
    {
        "sLine": 9,
        "sName": "Galgamuwa",
        "position": 86.5636
    },
    {
        "sLine": 9,
        "sName": "Nagollagama",
        "position": 55.1529
    },
    {
        "sLine": 9,
        "sName": "Kondavil",
        "position": 328.8375
    },
    {
        "sLine": 9,
        "sName": "Girambe",
        "position": 4.0873
    },
    {
        "sLine": 3,
        "sName": "Pinnawala",
        "position": 42.2584
    },
    {
        "sLine": 1,
        "sName": "Kalkudah",
        "position": 96.0505
    },
    {
        "sLine": 1,
        "sName": "Punani",
        "position": 75.1361
    },
    {
        "sLine": 1,
        "sName": "Jayanthipura",
        "position": 22.444
    },
    {
        "sLine": 2,
        "sName": "Weligama",
        "position": 146.6609
    },
    {
        "sLine": 7,
        "sName": "Mawilmada",
        "position": 10.3339
    },
    {
        "sLine": 7,
        "sName": "Mahaiyawa",
        "position": 8.0948
    },
    {
        "sLine": 2,
        "sName": "Talpe",
        "position": 128.0563
    },
    {
        "sLine": 5,
        "sName": "Kelaniya",
        "position": 6.9148
    },
    {
        "sLine": 2,
        "sName": "Galle",
        "position": 117.8047
    },
    {
        "sLine": 9,
        "sName": "Kilinochchi",
        "position": 257.3632
    },
    {
        "sLine": 6,
        "sName": "Madhu Road",
        "position": 42.779
    },
    {
        "sLine": 2,
        "sName": "Egoda Uyana",
        "position": 24.8337
    },
    {
        "sLine": 2,
        "sName": "Moratuwa",
        "position": 21.151
    },
    {
        "sLine": 2,
        "sName": "Kathaluwa",
        "position": 135.0076
    },
    {
        "sLine": 2,
        "sName": "Koggala",
        "position": 134.0082
    },
    {
        "sLine": 5,
        "sName": "Radella",
        "position": 212.7252
    },
    {
        "sLine": 9,
        "sName": "Anuradhapura School",
        "position": 130.0308
    },
    {
        "sLine": 11,
        "sName": "Asokapura",
        "position": 8.3903
    },
    {
        "sLine": 11,
        "sName": "Samagipura",
        "position": 2.6461
    },
    {
        "sLine": 1,
        "sName": "Sevanapitiya",
        "position": 51.7473
    },
    {
        "sLine": 9,
        "sName": "Madegama",
        "position": 147.9665
    },
    {
        "sLine": 9,
        "sName": "Saliyapura",
        "position": 137.3372
    },
    {
        "sLine": 9,
        "sName": "Siyabalagawewa",
        "position": 146.5448
    },
    {
        "sLine": 9,
        "sName": "Viralmurippuwa",
        "position": 154.6353
    },
    {
        "sLine": 9,
        "sName": "Senarathgama",
        "position": 96.4938
    },
    {
        "sLine": 7,
        "sName": "Randal's Hill",
        "position": 4.3513
    },
    {
        "sLine": 5,
        "sName": "Geli Oya",
        "position": 123.593
    },
    {
        "sLine": 2,
        "sName": "Andadola",
        "position": 82.3961
    },
    {
        "sLine": 3,
        "sName": "Angampitya",
        "position": 40.1943
    },
    {
        "sLine": 5,
        "sName": "Ella",
        "position": 282.0408
    },
    {
        "sLine": 7,
        "sName": "Elwala",
        "position": 31.1709
    },
    {
        "sLine": 9,
        "sName": "Iratperiya Kulam",
        "position": 176.1441
    },
    {
        "sLine": 3,
        "sName": "Gammana",
        "position": 43.7888
    },
    {
        "sLine": 11,
        "sName": "Hatares Kotuwa",
        "position": 85.5459
    },
    {
        "sLine": 5,
        "sName": "Haputale",
        "position": 258.0935
    },
    {
        "sLine": 2,
        "sName": "Hettimulla",
        "position": 59.1451
    },
    {
        "sLine": 11,
        "sName": "Horiwiala",
        "position": 61.0839
    },
    {
        "sLine": 5,
        "sName": "Hightenford",
        "position": 148.8765
    },
    {
        "sLine": 11,
        "sName": "Kalawewa",
        "position": 40.9283
    },
    {
        "sLine": 2,
        "sName": "Kathaluwa",
        "position": 135.0969
    },
    {
        "sLine": 5,
        "sName": "Keenawala",
        "position": 41.9406
    },
    {
        "sLine": 2,
        "sName": "Koralawella",
        "position": 22.9589
    },
    {
        "sLine": 3,
        "sName": "Liyanwala",
        "position": 35.7222
    },
    {
        "sLine": 10,
        "sName": "Madurankuli",
        "position": 107.1274
    },
    {
        "sLine": 9,
        "sName": "Madegama",
        "position": 147.9665
    },
    {
        "sLine": 9,
        "sName": "Mankulam",
        "position": 226.7772
    },
    {
        "sLine": 2,
        "sName": "Mirissa",
        "position": 152.0785
    },
    {
        "sLine": 11,
        "sName": "Moragollagama",
        "position": 21.3367
    },
    {
        "sLine": 3,
        "sName": "Morakele",
        "position": 44.2977
    },
    {
        "sLine": 5,
        "sName": "Nanu Oya",
        "position": 216.5503
    },
    {
        "sLine": 11,
        "sName": "Negama",
        "position": 32.9
    },
    {
        "sLine": 6,
        "sName": "Neriyakulam",
        "position": 13.2953
    },
    {
        "sLine": 5,
        "sName": "Pallewala",
        "position": 44.2361
    },
    {
        "sLine": 11,
        "sName": "Palugaswewa",
        "position": 65.1435
    },
    {
        "sLine": 3,
        "sName": "Pangiriwatta",
        "position": 12.6378
    },
    {
        "sLine": 9,
        "sName": "Paranthan",
        "position": 263.314
    },
    {
        "sLine": 2,
        "sName": "Pathegamgoda",
        "position": 78.7642
    },
    {
        "sLine": 7,
        "sName": "Patanpaha",
        "position": 23.4266
    },
    {
        "sLine": 5,
        "sName": "Penrose",
        "position": 154.6705
    },
    {
        "sLine": 5,
        "sName": "Peradeniya",
        "position": 118.5553
    },
    {
        "sLine": 7,
        "sName": "Peradeniya",
        "position": 0.3799
    },
    {
        "sLine": 2,
        "sName": "Piyagama",
        "position": 74.9002
    },
    {
        "sLine": 2,
        "sName": "Polwathumodara",
        "position": 150.0358
    },
    {
        "sLine": 9,
        "sName": "Punewa",
        "position": 164.5815
    },
    {
        "sLine": 9,
        "sName": "Puliyankulam",
        "position": 205.5486
    },
    {
        "sLine": 5,
        "sName": "Radella",
        "position": 212.7252
    },
    {
        "sLine": 5,
        "sName": "Rambukkana",
        "position": 85.1181
    },
    {
        "sLine": 9,
        "sName": "Randenigama",
        "position": 68.2601
    },
    {
        "sLine": 1,
        "sName": "Welikanda",
        "position": 59.6947
    },
    {
        "sLine": 9,
        "sName": "Saliyapura",
        "position": 137.3372
    },
    {
        "sLine": 10,
        "sName": "Sawarana",
        "position": 65.4839
    },
    {
        "sLine": 9,
        "sName": "Siyabalagawewa",
        "position": 146.5448
    },
    {
        "sLine": 10,
        "sName": "Thilladiya",
        "position": 119.3453
    },
    {
        "sLine": 9,
        "sName": "Timbiriyagedara",
        "position": 59.062
    },
    {
        "sLine": 5,
        "sName": "Tismalpola",
        "position": 79.6265
    },
    {
        "sLine": 9,
        "sName": "Viralmurippuwa",
        "position": 154.6353
    },
    {
        "sLine": 5,
        "sName": "Walakumbura",
        "position": 70.3674
    },
    {
        "sLine": 5,
        "sName": "Yatagama",
        "position": 82.0937
    },
    {
        "sLine": 6,
        "sName": "Thiruketheeswaram",
        "position": 70.7399
    },
    {
        "sLine": 9,
        "sName": "Kankasanturai",
        "position": 341.3147
    },
    {
        "sLine": 9,
        "sName": "Pallai",
        "position": 285.455
    },
    {
        "sLine": 11,
        "sName": "Konwewa",
        "position": 10.3121
    },
    {
        "sLine": 5,
        "sName": "Polgahanga",
        "position": 125.5696
    },
    {
        "sLine": 9,
        "sName": "Navatkuli",
        "position": 316.7917
    },
    {
        "sLine": 6,
        "sName": "chettikulam Station",
        "position": 21.7471
    },
    {
        "sLine": 5,
        "sName": "Warakawa",
        "position": 143.7323
    },
    {
        "sLine": 5,
        "sName": "Pallegama",
        "position": 141.7464
    },
    {
        "sLine": 7,
        "sName": "Pattam Paha",
        "position": 23.0569
    },
    {
        "sLine": 2,
        "sName": "Ambalangoda",
        "position": 86.0092
    },
    {
        "sLine": 9,
        "sName": "Sangathanai",
        "position": 306.0384
    },
    {
        "sLine": 9,
        "sName": "Thachanthoppu",
        "position": 313.5246
    },
    {
        "sLine": 7,
        "sName": "Rajawatta",
        "position": 2.272
    },
    {
        "sLine": 10,
        "sName": "Kattuwa",
        "position": 27.1724
    },
    {
        "sLine": 10,
        "sName": "Noor Nagar",
        "position": 122.3867
    },
    {
        "sLine": 1,
        "sName": "Aselapura",
        "position": 65.4823
    },
    {
        "sLine": 1,
        "sName": "Rideethenna",
        "position": 69.9531
    },
    {
        "sLine": 1,
        "sName": "Gallella",
        "position": 37.6019
    },
    {
        "sLine": 1,
        "sName": "Hathamuna",
        "position": 20.1712
    },
    {
        "sLine": 9,
        "sName": "Mirusuvil",
        "position": 297.6729
    },
    {
        "sLine": 2,
        "sName": "Katugoda",
        "position": 121.6784
    },
    {
        "sLine": 2,
        "sName": "Kalutara North",
        "position": 42.2908
    },
    {
        "sLine": 2,
        "sName": "Wadduwa",
        "position": 34.7742
    },
    {
        "sLine": 2,
        "sName": "Waskaduwa",
        "position": 38.477
    },
    {
        "sLine": 5,
        "sName": "Kithalella",
        "position": 279.491
    },
    {
        "sLine": 5,
        "sName": "Wallahagoda",
        "position": 133.6001
    },
    {
        "sLine": 5,
        "sName": "Kahatapitiya",
        "position": 130.1168
    },
    {
        "sLine": 5,
        "sName": "Bothalapitiya",
        "position": 129.0554
    },
    {
        "sLine": 5,
        "sName": "Warakapitiya",
        "position": 136.9149
    },
    {
        "sLine": 5,
        "sName": "Pattipola",
        "position": 234.5738
    },
    {
        "sLine": 10,
        "sName": "Erukkalampiddy-Nagavillu",
        "position": 113.9427
    },
    {
        "sLine": 7,
        "sName": "Asgiriya",
        "position": 7.4022
    },
    {
        "sLine": 7,
        "sName": "Palle Talawinna",
        "position": 13.2641
    },
    {
        "sLine": 7,
        "sName": "Uda Talawinna",
        "position": 14.3511
    },
    {
        "sLine": 7,
        "sName": "Meegammana",
        "position": 16.2822
    },
    {
        "sLine": 2,
        "sName": "Angulana",
        "position": 18.1052
    },
    {
        "sLine": 2,
        "sName": "Lunawa",
        "position": 19.51
    },
    {
        "sLine": 5,
        "sName": "Perakumpura Sub Railway",
        "position": 220.7083
    },
    {
        "sLine": 5,
        "sName": "Glenanore",
        "position": 255.5438
    },
    {
        "sLine": 5,
        "sName": "Wadurawa",
        "position": 39.6789
    },
    {
        "sLine": 10,
        "sName": "Battulu Oya",
        "position": 87.4324
    }
]

export const stationData = stationDataRaw.filter((value, index, self) =>
    index === self.findIndex(t => t.sName === value.sName)
)
