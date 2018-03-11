export default class CarPark {
  constructor(iLengthX, iLengthY) {
    if (iLengthX < 1 || iLengthY < 1) throw 'Illegal value';
    this.iLengthX = iLengthX;
    this.iLengthY = iLengthY;
  }

  isOverflow(iPositionX, iPositionY) {
    if (iPositionX > this.iLengthX || iPositionX < 1 || iPositionY > this.iLengthY || iPositionY < 1)
      throw "Overflowed";
  }
}
