import {FC} from "react";
import {ControllerRenderProps} from "react-hook-form";
import {TForm, Weekdays} from "../../globalTypes.ts";
import {SelectButton, SelectButtonChangeEvent} from "primereact/selectbutton";

export const WeekDaysSelector: FC<{
    field: ControllerRenderProps<TForm>
}> = ({field}) => {

    const weekdays = [
        {name: 'ПН/СР/ПТ', value: [Weekdays.MONDAY, Weekdays.WEDNESDAY, Weekdays.FRIDAY]},
        {name: 'ВТ/ЧТ', value: [Weekdays.TUESDAY, Weekdays.THURSDAY]},
        {name: 'ПН', value: Weekdays.MONDAY},
        {name: 'ВТ', value: Weekdays.TUESDAY},
        {name: 'СР', value: Weekdays.WEDNESDAY},
        {name: 'ЧТ', value: Weekdays.THURSDAY},
        {name: 'ПТ', value: Weekdays.FRIDAY},
        {name: 'СБ', value: Weekdays.SATURDAY},
        {name: 'ВС', value: Weekdays.SUNDAY},
    ];

    const handleChange = (e: SelectButtonChangeEvent) => {
        const lastValue = e.value[e.value.length - 1]
        const newValue = Array.isArray(lastValue) ? lastValue : [...new Set(e.value.flat())]
        field.onChange(newValue)
    }

    return (
        <SelectButton
            pt={{button: () => ({className: 'px-2 py-3 text-xs'})}}
            className='flex p-fluid'
            value={field.value}
            onChange={handleChange}
            optionLabel="name"
            options={weekdays}
            multiple
        />
    );
};