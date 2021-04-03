import { MatchData, MatchResult } from '../MatchReader';
import { Analyzer } from '../Summary';

export class WinsAnalyzer implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[5] === MatchResult.Draw) continue;
      const winningTeam =
        match[5] === MatchResult.HomeWin ? match[1] : match[2];
      if (winningTeam === this.team) ++wins;
    }

    return `${this.team} has won ${wins} matches`;
  }
}
