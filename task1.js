/
function MP3Player(brand, volume) {
    this.brand = brand;
    this.volume = volume;
}

MP3Player.prototype.play = function() {
    console.log(this.brand + " MP3 Player is playing music.");
};

const player1 = new MP3Player("Sony", 50);

console.log(player1.brand);
console.log(player1.volume);

player1.play();
