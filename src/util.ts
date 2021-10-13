export function arrayToString(sum:any, el:any){
    return sum + el
}
export function arrayToStringWithSpaces(sum:any, el:any){
    return sum + " " +el
}

export function ifStatment(row:string):string
{
    row = row.trim()
    let pRow = Array.from(row)
    let newRow:string
    pRow.splice(2,0,'(')
    if(row.slice(-2) == "do")
    {
        pRow = pRow.slice(0,-3)
        pRow.push(") {")
        row = pRow.reduce(arrayToString)
        return row
    }
    else
    {
        throw new Error('missing do')
    }
}

export function elseStatment(row:string):string
{
    return '}else{'
}

export function stopStatment(row:string):string
{
    return '}'
}

export function logicOperation(operation:string):string
{

}

function resolveStatment(st:string):string
{
    if(st.includes('"') || st.includes("'"))
        throw new Error("put strings in variables")
    let operator = st.trim().split(' ')
    //pos[0] == variable
    //pos[1 - n] = statment
    //pos[length - 1] = variable
    let negation = ""
    let var1 = operator[0]
    let var2 = operator[operator.length - 1]

    let str = operator.slice(1,-1).reduce(arrayToStringWithSpaces)

    if(str.includes('not'))
    {
        //operation is negate
        negation = '!'
        str = str.slice(4) //cancello 'not '
    }

    let operation = operationMap[str]

    return `${negation}(${var1} ${operation} ${var2})`
}

const operationMap:any = {
    'greater':'>',
    'lower':'<',
    'equals greater':'>=',
    'equals lower':'<=',
    'equals' :'==',
    'and' : '&&',
    'or' : '||',
    'not' : '!',
}

const operationsPossibility = [
    'greater',
    'lower',
    'equals greater',
    'equals lower',
    'equals',
    'and',
    'or',
    'not',
    'not greater',
    'not lower',
    'not equals greater',
    'not equals lower',
    'not equals',
]