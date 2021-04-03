import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { MatchReader } from './MatchReader';
import { ConsoleOutput } from './outputTargets/ConsoleOutput';
import { HtmlOutput } from './outputTargets/HtmlOutput';
import { SummaryBuilder } from './Summary';

const matchReader = MatchReader.loadFromCsv('football.csv');

new SummaryBuilder(new WinsAnalyzer('Burnley'), new ConsoleOutput()).exec(
  matchReader.matchData
);

new SummaryBuilder(new WinsAnalyzer('Burnley'), new HtmlOutput()).exec(
  matchReader.matchData
);
