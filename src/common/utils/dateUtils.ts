import {addDays, addMinutes} from 'date-fns';

export const getCourseEndDate = (totalHours: number, hoursPerDay: number, startDate: Date, daysOfWeek: number[]) => {
    while (totalHours > 0 && totalHours >= hoursPerDay) {
            startDate = addDays(startDate, 1)
            if (daysOfWeek.includes(startDate.getDay())) {
                totalHours -= hoursPerDay
            }
    }
    return startDate
}

export const getCourseEndTime = (hoursPerDay: number, startTime: Date, hoursType: number, breakTime: number) => {
    return addMinutes(startTime, (hoursType + breakTime) * hoursPerDay)
}