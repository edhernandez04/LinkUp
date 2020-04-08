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

User.create!(fullName: "B. F. Skinner", userName: "aircrib", password: "123", avatar: "https://www.ssbwiki.com/images/thumb/d/d3/Pikachu-LibreORAS.png/300px-Pikachu-LibreORAS.png", latitude: 40.881757, longitude: -73.854691)
User.create!(fullName: "Jean Piaget", userName: "genejean", password: "123", avatar: "https://lumiere-a.akamaihd.net/v1/images/avengers-characterpose-hulkbuster_c39cec43.png?region=0%2C0%2C300%2C300", latitude: 40.862229, longitude: -73.840843)
User.create!(fullName: "Sigmund Freud", userName: "lolconscious", password: "123", avatar: "https://blazblue.wiki/images/thumb/3/31/BlazBlue_Cross_Tag_Battle_Yang_Xiao_Long_Main.png/300px-BlazBlue_Cross_Tag_Battle_Yang_Xiao_Long_Main.png", latitude: 40.853313, longitude: -73.863738)
User.create!(fullName: "Albert Bandura", userName: "ohcanada", password: "123", avatar: "https://i.pinimg.com/originals/f4/02/4c/f4024c284f7cd89ad9cadf3d88dc269a.png", latitude: 40.847449, longitude: -73.851692)
User.create!(fullName: "Leon Festinger", userName: "dissonance", password: "123", avatar: "https://i.ya-webdesign.com/images/pokemon-go-characters-png-15.png", latitude: 40.859544, longitude: -73.851996)
User.create!(fullName: "William James", userName: "billydakid", password: "123", avatar: "https://i.pinimg.com/originals/03/b0/a0/03b0a0b0f8b0290c4d8f291bb2fd082c.png", latitude: 40.868184, longitude: -73.853735)
User.create!(fullName: "Ivan Pavlov", userName: "oculus", password: "123", avatar: "https://2.bp.blogspot.com/--A2Nw60cgaw/VPm0RlqbnWI/AAAAAAAAygY/rZBOXqlegD4/s1600/7bhi6iV.png", latitude: 40.856103, longitude: -73.857839)
User.create!(fullName: "Frasier Crane", userName: "iamlistening", password: "123", avatar: "https://i.ya-webdesign.com/images/black-girl-emoji-png-11.png", latitude: 40.861406, longitude: -73.824531)


