import { getContentIntegrityReport } from '@/lib/content-validation'

// Valide l'intégrité référentielle des données (slugs dupliqués + références cassées).
// Sort en code ≠ 0 si une anomalie est détectée, pour être branché en CI.
const report = getContentIntegrityReport()

const duplicateEntries = Object.entries(report.duplicateSlugs).filter(([, slugs]) => slugs.length > 0)
const totalDuplicates = duplicateEntries.reduce((total, [, slugs]) => total + slugs.length, 0)
const totalMissing = report.missingReferences.reduce((total, reference) => total + reference.missingSlugs.length, 0)

console.log('Validation de l’intégrité du contenu — Morning Atlas')
console.log('─'.repeat(52))

console.log(`Slugs dupliqués : ${totalDuplicates}`)
for (const [kind, slugs] of duplicateEntries) {
  console.log(`  • ${kind} : ${slugs.join(', ')}`)
}

console.log(`Références manquantes : ${totalMissing}`)
for (const reference of report.missingReferences) {
  console.log(`  • ${reference.ownerSlug} → ${reference.field} : ${reference.missingSlugs.join(', ')}`)
}

if (totalDuplicates > 0 || totalMissing > 0) {
  console.error('\n❌ Intégrité du contenu : anomalies détectées.')
  process.exit(1)
}

console.log('\n✅ Intégrité du contenu : aucune anomalie.')
