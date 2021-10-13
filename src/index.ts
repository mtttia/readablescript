import { readFileSync } from 'fs'
import { ifStatment, arrayToString, elseStatment, stopStatment } from './util'
import { RowType, detecteRowType } from './rowChecker'

const filePath = process.argv[2]

const splitString = process.platform == "win32" ? '\r\n' : '\n'

let program = readFileSync(filePath, {encoding:"utf-8"}).split(splitString)

const variableDeclaration: string[] = []
let finalProgram: string[] = []

enum State{
  'main','function', 'if'
}

let state:State = State.main

convert(program)

function convert(program:string[])
{
  for(let row of program)
  {    
    row = row.trim()
    let rowType = detecteRowType(row)
    
    let newRow:string = ""
    let aNewRow:string[]

    switch (rowType)
    {
      case RowType.if:
        state = State.if
        newRow = ifStatment(row)
        break
      case RowType.else:
        newRow = elseStatment(row)
        break
      case RowType.stop:
        newRow = stopStatment(row)
        break
      case RowType.js:
        newRow = row
        break
    }

    finalProgram.push(newRow + "\n")
  }

  console.log(finalProgram.reduce(arrayToString));
  
}