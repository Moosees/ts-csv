import { CsvFileReader } from './CsvFileReader';
import { dateStringToDate } from './utils';

export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matchData: MatchData[] = [];

  constructor(public reader: DataReader) {}

  static loadFromCsv(filename: string): MatchReader {
    const matchReader = new MatchReader(new CsvFileReader(filename));
    matchReader.load();
    return matchReader;
  }

  load(): void {
    this.reader.read();
    this.matchData = this.reader.data.map(this.parseRow);
  }

  private parseRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
