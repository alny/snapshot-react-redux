var Profile = require('../models/Profile')
var Promise = require('bluebird')

module.exports = {

    get: function(params, isRaw) {
        return new Promise(function(resolve, reject) {

            Profile.find(params, function(err, profiles) {
                if (err) {
                    reject(err)
                    return
                }
                if(isRaw)
                resolve(profiles)
                else{
                  var list = []
                  profiles.forEach(function(post, i){
                    list.push(post.summary())
                  })
                  resolve(list)
                }
            })
        })
    },

    getById: function(id, isRaw) {
        return new Promise(function(resolve, reject) {

            Profile.findById(id, function(err, profile) {
                if (err) {
                    reject(err)
                    return
                }
                if(isRaw)
                resolve(profile)
                else
                resolve(profile.summary())
            })
        })
    },

    post: function(params, isRaw) {
        return new Promise(function(resolve, reject) {

            Profile.create(params, function(err, profile) {
                if (err) {
                    reject(err)
                    return
                }
                if(isRaw)
                resolve(profile)
                else
                resolve(profile.summary())
            })
        })
    }
}
