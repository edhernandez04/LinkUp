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

User.create!(fullName: "B. F. Skinner", userName: "aircrib", password: "123", avatar: "https://www.mariowiki.com/images/thumb/1/15/MarioNSMB2.png/200px-MarioNSMB2.png", latitude: 40.881757, longitude: -73.854691)
User.create!(fullName: "Jean Piaget", userName: "genejean", password: "123", avatar: "https://www.nairaland.com/attachments/7578128_download_gif7e83e541d848e9a51b29b15ebad5ad3d", latitude: 40.862229, longitude: -73.840843)
User.create!(fullName: "Sigmund Freud", userName: "lolconscious", password: "123", avatar: "https://vignette.wikia.nocookie.net/cpucs-tournament/images/1/10/Zero_Suit_Profile.png/revision/latest?cb=20190211214336", latitude: 40.853313, longitude: -73.863738)
User.create!(fullName: "Albert Bandura", userName: "ohcanada", password: "123", avatar: "https://vignette.wikia.nocookie.net/deathbattle/images/1/12/MutenRoshisama.png/revision/latest/scale-to-width-down/340?cb=20181107185917", latitude: 40.847449, longitude: -73.851692)
User.create!(fullName: "Leon Festinger", userName: "dissonance", password: "123", avatar: "https://lasimagenesdegoku.com/wp-content/uploads/2018/02/goku_limit_breaker_by_naironkr-dbn65tl-239x300.png", latitude: 40.859544, longitude: -73.851996)
User.create!(fullName: "William James", userName: "billydakid", password: "123", avatar: "https://www.ssbwiki.com/images/thumb/0/02/Snake_SSBU.png/250px-Snake_SSBU.png", latitude: 40.868184, longitude: -73.853735)
User.create!(fullName: "Ivan Pavlov", userName: "oculus", password: "123", avatar: "https://www.ssbwiki.com/images/thumb/a/a0/Pikachu_SSB4.png/250px-Pikachu_SSB4.png", latitude: 40.856103, longitude: -73.857839)
User.create!(fullName: "Frasier Crane", userName: "iamlistening", password: "123", avatar: "https://www.ssbwiki.com/images/thumb/c/c1/Charizard_SSB4.png/300px-Charizard_SSB4.png", latitude: 40.861406, longitude: -73.824531)


