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

User.create!(fullName: "B. F. Skinner", userName: "aircrib", password: "123", avatar: "https://i.ya-webdesign.com/images/pokemon-red-sprite-gen-1-png-10.png", latitude: 40.881757, longitude: -73.854691)
User.create!(fullName: "Jean Piaget", userName: "genejean", password: "123", avatar: "https://i.ya-webdesign.com/images/transparent-sprite-mewtwo-12.png", latitude: 40.862229, longitude: -73.840843)
User.create!(fullName: "Sigmund Freud", userName: "lolconscious", password: "123", avatar: "https://i.ya-webdesign.com/images/transparent-sprite-pacman-14.png", latitude: 40.853313, longitude: -73.863738)
User.create!(fullName: "Albert Bandura", userName: "ohcanada", password: "123", avatar: "https://forums.launchbox-app.com/uploads/monthly_2017_09/Metroid.png.81a4cb0972e2be106a470f5ebc5cbd79.png", latitude: 40.847449, longitude: -73.851692)
User.create!(fullName: "Leon Festinger", userName: "dissonance", password: "123", avatar: "https://static-cdn.jtvnw.net/jtv_user_pictures/tycoonmike-profile_image-88cc5b1c65bf3bb5-300x300.png", latitude: 40.859544, longitude: -73.851996)
User.create!(fullName: "Frasier Crane", userName: "iamlistening", password: "123", avatar: "https://cdn2.scratch.mit.edu/get_image/user/7394452_60x60.png", latitude: 40.861406, longitude: -73.824531)


