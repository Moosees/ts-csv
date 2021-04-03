import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlOutput implements OutputTarget {
  print(input: string): void {
    const html = `
      <div>
        <h1>Analysis Output</h1>
        <div>${input}</div>
      </div>
    `;

    fs.writeFileSync('report.html', html);
  }
}
