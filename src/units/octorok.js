import * as Util from '../util/util'
import Unit from './unit'
class Octorok extends Unit {
  constructor(pixelPos, grid) {
    let type = Util.random(0, 2)
    super(pixelPos, grid, (type * 96))
    
    // unit stats
    this.hp = type === 0 ? 1 : 2;
    // this.ap = 1;

    this.speed = Util.random(1,3)
    //start action cycle
    this.updateAction();
  }
  
}

export default Octorok;