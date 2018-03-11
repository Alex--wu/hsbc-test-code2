/**
 * HSBC coding test.
 * Candidate: WU Shengyuan 2018-03-11
 * To Run this project:
 * 1. 'npm install';
 * 2. 'npm run test';
 * 3. The test coverage reports are in the /coverage
 *
 * Key Notes:
 * 1. As I said before, I changes single js file to npm + Babel + Karma + Mocha.
 * 2. Editorconfig + Eslint + Commit-hook to keep the same coding style for all the developers.
 * 3. The coverage reporters support multi browsers.
 * 4. Hungarian notation for the variables.
 * 5. Open the package.json file to see the full list.
 */
const assert = require('assert');
// import {expect} from 'chai';
import {NORTH, EAST, WEST} from '../src/CONST';
import CarPark from '../src/CarPark';
import Car from '../src/Car';

describe('Initialization the car park.', function () {
  const carPark = new CarPark(4, 5);

  /**
   * Criteria 1
   * Given the Car is in position X = 1 and Y = 1 and facing North, when the Car turns clockwise, then the Car is still in the same position but is now facing East.
   */
  describe('#Criteria 1', function () {
    const car1 = new Car(carPark, 1, 1, NORTH);
    car1.turnClockwise();

    it('The states should be: Pos X: 1 | Pos Y: 1 | Orientation: E', function () {
      assert.equal(car1.getPositionX(), 1);
      assert.equal(car1.getPositionY(), 1);
      assert.equal(car1.getOrientation(), EAST);
    });
  });

  /**
   * Criteria 2
   * Given the Car is in position X = 1 and Y = 1 and facing North, when the Car moves forward, then the Car is still facing North but is now in position X = 1 and Y = 2.
   */
  describe('#Criteria 2', function () {
    const car2 = new Car(carPark, 1, 1, NORTH);
    car2.move();

    it('The states should be: Pos X: 1 | Pos Y: 2 | Orientation: N', function () {
      assert.equal(car2.getPositionX(), 1);
      assert.equal(car2.getPositionY(), 2);
      assert.equal(car2.getOrientation(), NORTH);
    });
  });

  /**
   * Criteria 3
   * Given the Car is in position X = 1 and Y = 1 and facing East, when the Car moves forward, then the Car is still facing East but is now in position X = 2 and Y = 1
   */
  describe('#Criteria 3', function () {
    const car3 = new Car(carPark, 1, 1, EAST);
    car3.move();

    it('The states should be: Pos X: 2 | Pos Y: 1 | Orientation: E', function () {
      assert.equal(car3.getPositionX(), 2);
      assert.equal(car3.getPositionY(), 1);
      assert.equal(car3.getOrientation(), EAST);
    });
  });

  /**
   * Criteria 4
   * Given the Car is in position X = 1 and Y = 1 and facing West, when the Car moves forward, then an exception is thrown.
   */
  describe('#Criteria 4', function () {
    const car4 = new Car(carPark, 1, 1, WEST);
    it('It should throw an error when try to move()', function () {
      assert.equal(car4.move(), 'Overflowed');
    });
  });

  /**
   * Criteria 5
   * Given the Car is in position X = 1 and Y = 1 and facing East, when the Car moves forward twice, then the Car is still facing East but is now in position X = 3 and Y = 1.
   */
  describe('#Criteria 5', function () {
    const car5 = new Car(carPark, 1, 1, EAST);
    car5.move();
    car5.move();

    it('The states should be: Pos X: 3 | Pos Y: 1 | Orientation: E', function () {
      assert.equal(car5.getPositionX(), 3);
      assert.equal(car5.getPositionY(), 1);
      assert.equal(car5.getOrientation(), EAST);
    });
  });
});
