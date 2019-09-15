artwork = function() {
    let imageUrl = document.querySelector("[data-a-target='user-channel-header-item'] img").src;
    return imageUrl.replace(/((?<=-profile_image-)\d+|\d+(?=\.png))/g, '300');
};

if ('mediaSession' in navigator) {
    console.log("MediaSession available");
    navigator.mediaSession.metadata = new MediaMetadata({
        title: document.querySelector("[data-a-target='user-channel-header-item'] h5").textContent,
        artist: document.querySelector("[data-a-target=\'stream-title\']").title,
        artwork: [
            { src: artwork(),   sizes: '300x300',   type: 'image/png' },
        ]
    });

    navigator.mediaSession.setActionHandler('play', function() {document.getElementsByClassName("qa-pause-play-button")[0].click();});
    navigator.mediaSession.setActionHandler('pause', function() {document.getElementsByClassName("qa-pause-play-button")[0].click();});
}