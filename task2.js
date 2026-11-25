
class MP3Player {
    #volume = 50;

    // 1. Separate getter and setter

    getVolume() {
        return this.#volume;
    }

    setVolume(value) {
        if (typeof value === "number" && value >= 0 && value <= 100) {
            this.#volume = value;
        } else {
            console.log("Volume must be between 0 and 100!");
        }
    }

    // 2. Combined getter-setter

    volume(value) {
        if (value === undefined) {
            return this.#volume;
        }

        if (typeof value === "number" && value >= 0 && value <= 100) {
            this.#volume = value;
        } else {
            console.log("Volume must be between 0 and 100!");
        }
    }
}

// Create MP3 player
const player = new MP3Player();

// Separate getter and setter
player.setVolume(80);
console.log("Volume:", player.getVolume());

// Combined getter-setter
player.volume(40);
console.log("Volume:", player.volume());

// Validation
player.setVolume(120);
console.log("Volume:", player.getVolume());
