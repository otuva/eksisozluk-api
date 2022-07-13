const axios = require('axios');
const cheerio = require('cheerio');
const urls = require('../constant/urls');

module.exports = async (nick) => {
    let response;
    try {
        response = await axios.get(`${urls.USER}/${nick}`);
    } catch (err) {
        return { error: err.message };
    }

    const $ = cheerio.load(response.data, { decodeEntities: false });

    const totalEntryCount = $("#entry-count-total").text().trim();
    const userFollowingCount = $("#user-following-count").text().trim();
    const userFollowerCount = $("#user-follower-count").text().trim();
    const karmaLevel = $(".muted").text();
    const pinnedBadges = []
    // fix to the problem stems from eksisozluk -> default picture doesn't have leading 'https:' string in the url
    const _authorProfilePictureSrc = $(".avatar").attr("src")
    const authorProfilePicture = _authorProfilePictureSrc.startsWith("https://") ? _authorProfilePictureSrc : `https:${_authorProfilePictureSrc}`;

    // iterate over pinned badges and push them to the array
    $('.user-profile-badge-item').each((index, element) => {
        const badge = $(element);
        const title = badge.attr('title');
        const imgSrc = badge.find('img').attr('src');

        pinnedBadges.push({
            title,
            imgSrc
        });
    });

    return {
        nick,
        totalEntryCount,
        userFollowingCount,
        userFollowerCount,
        karmaLevel,
        pinnedBadges,
        authorProfilePicture
    };
};