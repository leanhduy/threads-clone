import { formatDistanceStrict, formatDistanceToNowStrict } from 'date-fns'

export const convertTimeUnit = (time) => {
    // the time string contain 2 parts: <numeric value> <time unit>. e.g., 2 weeks
    // extract 2 part of the timestamp
    let parts = formatDistanceToNowStrict(new Date(time)).split(' ')
    switch (parts[1]) {
        case 'second':
        case 'seconds':
            return 'just now'
            break
        case 'minute':
        case 'minutes':
            parts[1] = 'm'
            break
        case 'hour':
        case 'hours':
            parts[1] = 'h'
            break
        case 'day':
        case 'days':
            parts[1] = 'd'
            break
        case 'month':
        case 'months':
            parts[1] = 'mon'
            break
        case 'year':
        case 'years':
            parts[1] = 'y'
            break
        default:
    }
    return parts.join('')
}
