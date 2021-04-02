import fs from 'fs';

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

const matches = fs
  .readFileSync('football.csv', { encoding: 'utf-8' })
  .split('\n')
  .map((row: string): string[] => row.split(','));

let manUnitedWins = 0;

for (let match of matches) {
  if (match[5] === MatchResult.Draw) continue;
  const winningTeam = match[5] === MatchResult.HomeWin ? match[1] : match[2];
  if (winningTeam === 'Man United') ++manUnitedWins;
}
console.log(manUnitedWins);
