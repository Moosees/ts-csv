import { OutputTarget } from '../Summary';

export class ConsoleOutput implements OutputTarget {
  print(input: string): void {
    console.log(input);
  }
}
