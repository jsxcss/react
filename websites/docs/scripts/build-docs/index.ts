import generateDocsFromMD from './generateDocsFromMD'

async function main() {
  console.log(':::::::::::  build-docs running...  :::::::::::')

  await Promise.all([generateDocsFromMD()])
  console.log(':::::::::::  build-docs finished!  :::::::::::')
}

main().catch((error) => {
  console.error(error.stack)
  process.exit(1)
})
