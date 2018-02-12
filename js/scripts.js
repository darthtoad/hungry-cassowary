export class HungryCassowary {
  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
      console.log(this.foodLevel);
    }, 1000);
  }

  didYouGetKickedInTheBalls() {
      if (this.foodLevel > 0) {
        return false;
      } else {
        // console.log("Kicked in balls");
        return true;
      }
  }

  feed() {
    this.foodLevel = 10;
  }
}
