import { readFileSync } from 'fs'

const filePath = process.argv[2]

const splitString = process.platform == "win32" ? '\r\n' : '\n'

console.log(readFileSync(filePath, {encoding:"utf-8"}).split(splitString));

const variableDeclaration: string[] = []

enum State{
  'main','function'
}