
class MP3Player {
    #volume = 50;

    getVolume() {
        return this.#volume;
    }

    setVolume(volume) {
        if (volume >= 0 && volume <= 100 && typeof volume === "number") {
            this.#volume = volume;
        } else {
            console.log("Wrong volume!");
        }
    }

    volume(value) {
        if (value === undefined) {
            return this.#volume;
        } else if (value >= 0 && value <= 100 && typeof value === "number") {
            this.#volume = value;
        } else {
            console.log("Wrong volume!");
        }
    }
}

let player = new MP3Player();

player.setVolume(70);
console.log(player.getVolume());

player.volume(40);
console.log(player.volume());

player.setVolume(150);
console.log(player.getVolume());
