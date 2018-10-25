import React from "react";

var flickr = new Flickr(process.env.FLICKR_API_KEY);

flickr.photos.search({
  text: 'doggo'
}).then(function (res) {
  console.log('yay!', res.body);
}).catch(function (err) {
  console.error('bonk', err);
});