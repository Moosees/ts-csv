import { CsvFileReader } from './CsvFileReader';

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const reader = new CsvFileReader('football.csv');
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[5] === MatchResult.Draw) continue;
  const winningTeam = match[5] === MatchResult.HomeWin ? match[1] : match[2];
  if (winningTeam === 'Man United') ++manUnitedWins;
}
console.log(manUnitedWins);
