import { mkdirSync, statSync } from 'fs'

const createFolder = (folderPath: string) => {
  try {
    statSync(folderPath)
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log(`Sync folder does not exist, creating it at ${folderPath}...`)
      mkdirSync(folderPath)
    } else {
      console.error(`Sync folder creation failed.`)
      throw e
    }
  }
}

export default createFolder
