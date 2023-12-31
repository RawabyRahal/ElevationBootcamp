class APIManager {
    constructor() {
        this.data = {}
    }
    getAllData() {

        // API Users & freinds
        const numberOfUsers = 7
        const promiseUsers = $.get(`https://randomuser.me/api/?results=${numberOfUsers}`)


        return Promise.all([promiseUsers, promiseQuotes, promiseAboutMe, promisePokemon])
            .then(data => {
                console.log(data)
                const mainUser = data[0].results[0]
                // console.log(mainUser)

                const friends = data[0].results.slice(1)
                // console.log(friends)

                const quote = data[1].quote
                // console.log(quote)

                const aboutme = data[2]
                // console.log(aboutme)

                const pokemon = data[3]
                // console.log(pokemon)

                const newObj = {
                    user: mainUser,
                    friends: friends,
                    quote: quote,
                    aboutMe: aboutme,
                    pokemon : pokemon
                }
                console.log(newObj)

                this.data = newObj;
                return this.data
            })
    }
}