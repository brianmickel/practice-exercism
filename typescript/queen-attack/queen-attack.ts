
interface iQueenPositions {
  white: [number, number];
  black: [number, number];
}

export default class QueenAttack {
  public white: [number, number];
  public black: [number, number];

  constructor(positions: iQueenPositions) {
    let theyOverlap = (positions.white[0] === positions.black[0]) &&
        (positions.white[1] === positions.black[1]);
    if (theyOverlap) {
      throw new Error('Queens cannot share the same space');
    }
    this.white = positions.white;
    this.black = positions.black;
  }

  private canAttackSameRow(): boolean {
    return this.white[1] === this.black[1];
  }

  private canAttackSameColumn(): boolean {
    return this.white[0] === this.black[0];
  }

  private canAttackDiagonally(): boolean {
    const slope =
        (this.white[1] - this.black[1]) / (this.white[0] - this.black[0])
    return slope == 1 || slope == -1;
  }

  canAttack(): boolean {
    return this.canAttackSameRow() || this.canAttackSameColumn() ||
        this.canAttackDiagonally();
  }

  toString(): string {
    const board = Array(8).fill('').map(_ => Array(8).fill('_'));
    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';
    const boardString = board.map(row => row.join(' ')).join('\n') + '\n';
    return boardString;
  }
}