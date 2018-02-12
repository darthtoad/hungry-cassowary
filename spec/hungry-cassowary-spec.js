import { HungryCassowary } from './../js/scripts.js';

describe('HungryCassowary', function() {
  let kerchov = new HungryCassowary("Kerchov");

  beforeEach(function() {
    jasmine.clock().install();
    kerchov.setHunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(kerchov.name).toEqual("Kerchov");
    expect(kerchov.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(kerchov.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    kerchov.foodLevel = 0;
    expect(kerchov.didYouGetKickedInTheBalls()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(kerchov.didYouGetKickedInTheBalls()).toEqual(true);
  });

  it('should have a food level of ten if it is fed', function() {
    jasmine.clock().tick(9001);
    kerchov.feed();
    expect(kerchov.foodLevel).toEqual(10);
  });
});
