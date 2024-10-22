class Ship {
  constructor(length, direction, positionx, positiony) {
    this.length = length;
    this.direction = direction; // indexed by 90 degs;
    this.sunk = false;
    this.positionX = positionx;
    this.positionY = positiony;
    this.segments = this.generateSegments();
    this.hits = 0;
  }

  attack(x, y) {
    for (let segment of this.segments) {
      if (segment.x === x && segment.y === y) {
        this.hits++;
        this.checkSink();
        return true;
      }
    }
    return false;
  }

  checkSink() {
    if (this.hits >= this.length) {
      this.sunk = true;
    }
  }

  generateSegments() {
    let x = this.positionX;
    let y = this.positionY;
    let segments = [];

    function createSegment(x, y) {
      return {
        x,
        y,
        health: 1,
      };
    }

    switch (this.direction) {
      case 0:
        for (x; x < this.positionX + this.length; x++) {
          segments.push(createSegment(x, y));
        }
        break;
      case 1:
        for (y; y < this.positionY + this.length; y++) {
          segments.push(createSegment(x, y));
        }
        break;
      case 2:
        for (x; x > this.positionX - this.length; x--) {
          segments.push(createSegment(x, y));
        }
        break;
      case 3:
        for (y; y > this.positionY - this.length; y--) {
          segments.push(createSegment(x, y));
        }
        break;
    }

    return segments;
  }
}

export default Ship;
