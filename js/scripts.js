export class HungryCassowary {
  constructor(name, difficulty) {
    this.name = name;
    this.difficulty = difficulty;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.moodLevel = 10;
  }

  setHunger() {
    if (this.difficulty === "easy") {
      setInterval(() => {
        this.foodLevel--;
        this.sleepLevel--;
        this.moodLevel--;
        console.log(this.foodLevel);
      }, 2000);
    } else if (this.difficulty === "medium") {
      setInterval(() => {
        this.foodLevel--;
        this.sleepLevel--;
        this.moodLevel--;
        console.log(this.foodLevel);
      }, 1000);
    } else {
      setInterval(() => {
        this.foodLevel--;
        this.sleepLevel--;
        this.moodLevel--;
        console.log(this.foodLevel);
      }, 500);
    }

  }

  didYouGetKickedInTheBalls() {
    if (this.foodLevel > 0 && this.sleepLevel > 0 && this.moodLevel > 0) {
      return false;
    } else {
      // console.log("Kicked in balls");
      return true;
    }
  }

  feed() {
    this.foodLevel = 10;
  }

  putToBed() {
    this.sleepLevel = 10;
  }

  play() {
    this.moodLevel = 10;
  }
}
