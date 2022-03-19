export const DayOfWeek = new Array('SUN', 'MON', 'TUE', 'WEN', 'TUR', 'FRI', 'SAT')
export function monthToDays(date)
{   
    let result = new Date(date.getFullYear(), date.getMonth(), 0)
    return result.getDate()
}
export function DayOfWeeToNum(DOW) {
    for(let i = 0; i < 7; i++) {
        if(DayOfWeek[i] === DOW) {
            return i
        }
    }
    return -1
}

export function NextDay(date)
{
    let result = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
    return result
}
export function NextMonth(date)
{
    let result = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate())
    return result
}