import { MatchData } from './MatchReader';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class SummaryBuilder {
  constructor(public analyzer: Analyzer, public output: OutputTarget) {}

  exec(data: MatchData[]) {
    this.output.print(this.analyzer.run(data));
  }
}
