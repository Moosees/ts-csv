import { WinsAnalyzer } from './analyzers/WinsAnalyzer';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleOutput } from './outputTargets/ConsoleOutput';
import { HtmlOutput } from './outputTargets/HtmlOutput';
import { SummaryBuilder } from './Summary';

const matchReader = new MatchReader(new CsvFileReader('football.csv'));
matchReader.load();

const burnleyWinsSummary = new SummaryBuilder(
  new WinsAnalyzer('Burnley'),
  new ConsoleOutput()
);

const burnleyWinsHtmlSummary = new SummaryBuilder(
  new WinsAnalyzer('Burnley'),
  new HtmlOutput()
);

burnleyWinsSummary.exec(matchReader.matchData);
burnleyWinsHtmlSummary.exec(matchReader.matchData);
