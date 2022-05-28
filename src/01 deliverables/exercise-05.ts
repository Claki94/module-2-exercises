console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  coins: number;

  constructor() {
    this.coins = 0;
  }

  play(): void {
    this.addCoin();
    const result: boolean[] = [];

    for (let index = 0; index < 3; index++) {
      const randomNumber: number = this.getRandomNumber();
      result.push(randomNumber % 2 === 0);
    }

    const isWinner = result.every((value) => value);

    console.log(this.getMachineMessage(isWinner));

    if (isWinner) this.resetCoins();
  }

  private addCoin(): void {
    this.coins++;
  }

  private resetCoins(): void {
    this.coins = 0;
  }

  private getRandomNumber(): number {
    return Math.ceil(Math.random() * 100);
  }

  private getMachineMessage(result: boolean): string {
    return result
      ? `Congratulations!!! You won ${this.coins} coins!!`
      : "Good luck next time!!";
  }
}

// const machine1 = new SlotMachine();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
// machine1.play();
