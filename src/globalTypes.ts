import {ControllerRenderProps} from "react-hook-form";

export type TForm = {
    hoursType: number;
    totalHours: number;
    courseStartDate: Date
    weekDays: Weekdays[]
    breakTime: number;
    hoursPerDay: number;
    courseStartTime: Date;
    teacherId: null | number
    audience: null | number
}

export type TField = 'hoursType' | 'totalHours' | 'courseStartDate' | 'weekDays' | 'breakTime' | 'hoursPerDay' | 'courseStartTime' | 'teacherId' | 'audience' | `weekDays.${number}`

export type TSelector = {
    field: ControllerRenderProps<TForm>
}

export enum Weekdays {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
}