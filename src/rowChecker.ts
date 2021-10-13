export enum RowType {
    'if', 'assignation', 'object', 'do', 'while', 'function', 'js', 'else', 'stop'
}

export function detecteRowType(row:string):RowType
{
    console.log(row.slice(0,2));
    
    if(row.slice(0,2) == 'if')
    {
        return RowType.if
    }
    else if(row == 'else')
    {
        return RowType.else
    }
    else if(row == 'stop')
    {
        return RowType.stop
    }
    else
    {
        return RowType.js
    }
}