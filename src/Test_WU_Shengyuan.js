/**
 * HSBC coding test.
 * Candidate: WU Shengyuan 2018-03-07
 * This file use pure ES6. So it's easier to read for every programmer.
 * Hungarian notation for the variables.
 * Because I don't know if using libraries is allowed or not, I use pure js and put everything in one js file. I can
 * change it to npm + Babel/TypeScript + Karma if you want. Or event create EditorConfig, Eslint and Readme file.
 */
import {NORTH, EAST, WEST} from './CONST';
import CarPark from './CarPark';
import Car from './Car';

//Initialization the car park.
const carPark = new CarPark(4, 5);

/**
 * Criteria 1
 * Given the Car is in position X = 1 and Y = 1 and facing North, when the Car turns clockwise, then the Car is still in the same position but is now facing East.
 */
const car1 = new Car(carPark, 1, 1, NORTH);
car1.turnClockwise();
car1.reportStates(); //Pos X: 1 | Pos Y: 1 | Orientation: E

/**
 * Criteria 2
 * Given the Car is in position X = 1 and Y = 1 and facing North, when the Car moves forward, then the Car is still facing North but is now in position X = 1 and Y = 2.
 */
const car2 = new Car(carPark, 1, 1, NORTH);
car2.move();
car2.reportStates(); //Pos X: 1 | Pos Y: 2 | Orientation: N

/**
 * Criteria 3
 * Given the Car is in position X = 1 and Y = 1 and facing East, when the Car moves forward, then the Car is still facing East but is now in position X = 2 and Y = 1
 */
const car3 = new Car(carPark, 1, 1, EAST);
car3.move();
car3.reportStates(); //Pos X: 2 | Pos Y: 1 | Orientation: E

/**
 * Criteria 4
 * Given the Car is in position X = 1 and Y = 1 and facing West, when the Car moves forward, then an exception is thrown.
 */
const car4 = new Car(carPark, 1, 1, WEST);
car4.move(); //exception: Overflowed!

/**
 * Criteria 5
 * Given the Car is in position X = 1 and Y = 1 and facing East, when the Car moves forward twice, then the Car is still facing East but is now in position X = 3 and Y = 1.
 */
const car5 = new Car(carPark, 1, 1, EAST);
car5.move();
car5.move();
car5.reportStates(); //Pos X: 3 | Pos Y: 1 | Orientation: E
