import { readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const tplDir = join(root, 'templates');

const templates = readdirSync(tplDir)
  .filter(folder => {
    const jsonPath = join(tplDir, folder, 'template.json');
    return existsSync(jsonPath);
  })
  .map(folder => {
    const data = JSON.parse(readFileSync(join(tplDir, folder, 'template.json'), 'utf8'));
    const screenshotPath = `previews/${folder}.jpg`;
    if (existsSync(join(root, screenshotPath))) {
      data.screenshot = screenshotPath;
    }
    return data;
  })
  .sort((a, b) => a.metier.localeCompare(b.metier) || a.formule.localeCompare(b.formule));

const metiers = [...new Set(templates.map(t => t.metier))].sort();

const manifest = {
  version: new Date().toISOString().split('T')[0],
  total: templates.length,
  metiers,
  formules: [
    { id: "serenite", nom: "Sérénité", prix: "49€\/mois", pagesMax: 3, description: "L’essentiel pour être visible et tranquille : hébergement rapide, support email, SEO local avancé, rapport mensuel de visites, petites mises à jour du quotidien." },
    { id: "croissance", nom: "Croissance", prix: "79€\/mois", pagesMax: 5, description: "Pour attirer plus de clients : tout Sérénité + SEO local renforcé, conseils Google Business Profile, rapport mensuel détaillé, mises à jour priorisées, support prioritaire." },
  ],
  templates,
};

writeFileSync(join(root, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`Manifest genere : ${manifest.total} templates, ${metiers.length} metiers`);
console.log(`Metiers : ${metiers.join(', ')}`);
