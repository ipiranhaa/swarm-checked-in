import { promises as fs } from 'fs'
import path from 'path'

import { CHECKINS_SYNC_FOLDER } from './SyncConstants'

const saveJsonDataToFile = (filePath: string, data: unknown) =>
  fs.writeFile(filePath, JSON.stringify(data))

export const saveCheckinsSyncToFile = (fileName: string, data: unknown) => {
  const filePath = path.join(CHECKINS_SYNC_FOLDER, fileName)
  return saveJsonDataToFile(filePath, data)
}
