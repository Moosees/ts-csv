import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleOutput } from './outputTargets/ConsoleOutput';
import { SummaryBuilder } from './Summary';

const matchReader = new MatchReader(new CsvFileReader('football.csv'));
matchReader.load();

const burnleyWinsSummary = new SummaryBuilder(
  new WinsAnalyzer('Burnley'),
  new ConsoleOutput()
);

burnleyWinsSummary.exec(matchReader.matchData);
