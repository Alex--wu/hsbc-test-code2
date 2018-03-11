import {NORTH, EAST, SOUTH, WEST} from './CONST';

export default class Car {
  constructor(objCarPark, iPositionX, iPositionY, sOrientation) {
    if (iPositionX < 1 || iPositionY < 1) throw 'Illegal value';
    this.objCarPark = objCarPark;
    this.iPositionX = iPositionX;
    this.iPositionY = iPositionY;
    this.sOrientation = sOrientation;
  }

  getPositionX() {
    return this.iPositionX;
  }

  getPositionY() {
    return this.iPositionY;
  }

  getOrientation() {
    return this.sOrientation;
  }

  turnClockwise() {
    switch (this.sOrientation) {
      case NORTH:
        this.sOrientation = EAST;
        break;
      case EAST:
        this.sOrientation = SOUTH;
        break;
      case SOUTH:
        this.sOrientation = WEST;
        break;
      case WEST:
        this.sOrientation = NORTH;
        break;
      default:
        throw "Not expectation orientation";
    }
  }

  move() {
    try {
      switch (this.sOrientation) {
        case NORTH:
          this.iPositionY++;
          break;
        case EAST:
          this.iPositionX++;
          break;
        case SOUTH:
          this.iPositionY--;
          break;
        case WEST:
          this.iPositionX--;
          break;
        default:
          throw "Not expectation orientation";
      }
      this.objCarPark.isOverflow(this.getPositionX(), this.getPositionY());
    } catch (err) {
      return err;
    }
  }

  reportStates() {
    console.log('Pos X: ' + this.getPositionX() + ' | Pos Y: ' + this.getPositionY() + ' | Orientation: ' + this.getOrientation());// eslint-disable-line no-console
  }
}
