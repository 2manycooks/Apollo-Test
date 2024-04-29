const { RESTDataSource } = require("@apollo/datasource-rest")

class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-list-off-rest-api.herokuapp.com/"

    getTracksForHome() {
        return this.getTracksForHome('tracks')
    }

    getAuthor(authorId) {
        return this.getAuthor(`author/${authorId}`)
    }
}

module.exports = TrackAPI