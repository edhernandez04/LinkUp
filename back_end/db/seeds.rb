# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Channel.destroy_all
Message.destroy_all
Avatar.destroy_all

User.create!(fullName: "B. F. Skinner", userName: "aircrib", password: "123", avatar: "https://cdn.shopify.com/s/files/1/1338/2239/products/12219251-1974726958048463_large.png?v=1578028935", latitude: 40.881757, longitude: -73.854691)
User.create!(fullName: "Jean Piaget", userName: "genejean", password: "123", avatar: "https://www.poppular.eu/wp-content/uploads/2019/10/44502_Marvel_80th_BlackWidow_FA_POP_GLAM_WEB-300x300.png", latitude: 40.862229, longitude: -73.840843)
User.create!(fullName: "Sigmund Freud", userName: "lolconscious", password: "123", avatar: "https://www.poppular.eu/wp-content/uploads/2019/09/44155_Marvel_WolverineFirstAppearance_POP_GLAM-WEB-300x300.png", latitude: 40.853313, longitude: -73.863738)
User.create!(fullName: "Albert Bandura", userName: "ohcanada", password: "123", avatar: "https://www.poppular.eu/wp-content/uploads/2019/09/43286_ApexLegends_Gibraltar_POP_GLAM-WEB-300x300.png", latitude: 40.847449, longitude: -73.851692)
User.create!(fullName: "Leon Festinger", userName: "dissonance", password: "123", avatar: "https://marketline-shop.com/wp-content/uploads/2020/04/43343_CrashBandicoot_CrashSpinning_POP_WEB-300x300.png", latitude: 40.859544, longitude: -73.851996)
User.create!(fullName: "William James", userName: "billydakid", password: "123", avatar: "https://www.poppular.eu/wp-content/uploads/2019/12/46953_Marvel_TheVulture_POP_GLAM-WEB-300x300.png", latitude: 40.868184, longitude: -73.853735)
User.create!(fullName: "Ivan Pavlov", userName: "oculus", password: "123", avatar: "https://www.poppular.eu/wp-content/uploads/2019/10/44503_Marvel_80th_ScarletWitch_FA_POP_GLAM_WEB-300x300.png", latitude: 40.856103, longitude: -73.857839)
User.create!(fullName: "Frasier Crane", userName: "iamlistening", password: "123", avatar: "https://www.poppular.eu/wp-content/uploads/2019/09/43288_ApexLegends_Bloodhound_POP_GLAM-WEB-300x300.png", latitude: 40.861406, longitude: -73.824531)

Avatar.create!(name:'Mulan',image: "https://secureservercdn.net/198.71.233.129/ggd.3c5.myftpupload.com/wp-content/uploads/2019/11/45325_Mulan_Ping_POP_WEB-6d71d59f67b35628a708b0ada6579682-300x300.png")
Avatar.create!(name:"Fair God Mother",image:"https://i3.wp.com/mickeyblog.com/wp-content/uploads/2019/11/funkofairygodmother-300x300.png")
Avatar.create!(name: 'Marty McFly',image:"https://www.tapoutcollectables.com.au/wp-content/uploads/2020/02/fun46913-back-future-marty-mcfly-1955-outfit-pop-vinyl-figure-300x300.png" )
Avatar.create!(name: "Scarecrow",image:"https://www.medievalcollectibles.com/wp-content/uploads/2019/04/FK-6291-300x300.png" )
Avatar.create!(name: "Evie Frye",image:"https://www.medievalcollectibles.com/wp-content/uploads/2019/04/FK-7255-300x300.png" )
Avatar.create!(name: "Space Rick",image: "https://s3.thcdn.com/productimg/300/300/12219247-1454726957551195.png" )
Avatar.create!(name: "SS Vegeta",image: "https://www.drunexplained.com/wp-content/uploads/2019/12/vegeta_oob-300x300.png" )
Avatar.create!(name: "Harley Quinn",image: "https://www.getreadycomics.com/wp-content/uploads/2020/04/Birds-of-Prey-Pop-Harley-Quinn-Roller-Derby-Figure-300x300.png")
Avatar.create!(name: "Deadpool The Duck",image: "https://funkopoptees.com/wp-content/uploads/2020/04/dpd-01-300x300.png" )
Avatar.create!(name: "Korg",image: "https://www.poppular.eu/wp-content/uploads/2019/09/45140_Avengers_Gamer_Korg_POP_GLAM_WEB-300x300.png")
Avatar.create!(name: "Wolverine",image: "https://www.medievalcollectibles.com/wp-content/uploads/2019/04/FK-12458-300x300.png")
Avatar.create!(name: "Gumby",image: "https://secureservercdn.net/198.71.233.129/ggd.3c5.myftpupload.com/wp-content/uploads/2019/11/46581_Television_Gumby_POP_GLAM-WEB-bd2a2a661e930f6306f288a052b8f93a-300x300.png")
Avatar.create!(name: "Tsunade",image: "https://s4.thcdn.com/productimg/300/300/12275525-2804730580514359.png" )
Avatar.create!(name: "Cable",image: "https://www.medievalcollectibles.com/wp-content/uploads/2019/04/FK-11694-300x300.png")
Avatar.create!(name: "Mr. Satan",image: "https://www.tapoutcollectables.com.au/wp-content/uploads/2020/02/fun47682-dragon-ball-super-hercule-funko-pop-vinyl-figure-300x300.png")
Avatar.create!(name: "Captain America",image: "https://www.poppular.eu/wp-content/uploads/2019/09/45137_Avengers_CaptainAmerica_ShieldMjolnir_POP_GLAM_WEB-300x300.png" )
Avatar.create!(name: "Thor",image: "https://www.poppular.eu/wp-content/uploads/2019/09/45142_Avengers_Bro_Thor_POP_GLAM_WEB-300x300.png")
Avatar.create!(name: "Orochimaru",image: 'https://s3.thcdn.com/productimg/300/300/12275524-1014730580388842.png')
Avatar.create!(name: "Coco Bandicoot",image: "https://i.ya-webdesign.com/images/crash-bandicoot-coco-png-11.png")
Avatar.create!(name: "Michonne",image: "https://www.poppular.eu/wp-content/uploads/2019/09/43536_TWD_Michonne_POP_GLAM-1-300x300.png")

