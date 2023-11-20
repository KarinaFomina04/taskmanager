import {FC} from "react";
import {ControllerRenderProps, UseFormWatch} from "react-hook-form";
import {TForm} from "../../globalTypes.ts";
import {Calendar} from "primereact/calendar";
import {getCourseEndDate} from "../../common/utils/dateUtils.ts";

export const CourseDatesSelector: FC<{ field: ControllerRenderProps<TForm>, watch:  UseFormWatch<TForm>  }> = ({
 field,
 watch
}) => {
    const weekdays = watch('weekDays');
    const totalHours = watch('totalHours');
    const hoursPerDay = watch('hoursPerDay');

    return (
        <div className='p-inputgroup flex-1'>
            <Calendar pt={{
                input: { root: {className: 'text-center'} }
            }}  inputId={field.name} value={field.value as Date} onChange={field.onChange} dateFormat='dd.mm.yy' />
            <span className="p-inputgroup-addon">до</span>
            <Calendar pt={{
                input: { root: {className: 'text-center opacity-100'} }
            }} value={getCourseEndDate(totalHours, hoursPerDay, field.value as Date, weekdays)} dateFormat='dd.mm.yy' disabled/>
        </div>
    );
};