import {FC} from "react";
import {ControllerRenderProps, UseFormWatch} from "react-hook-form";
import {TForm} from "../../globalTypes.ts";
import {getCourseEndTime} from "../../common/utils/dateUtils.ts";
import {format} from "date-fns";
import {DEFAULT_TIME_FORMAT} from "../../common/utils/constants.ts";

export const CourseTimeSelector: FC<{
    field: ControllerRenderProps<TForm>, watch:  UseFormWatch<TForm> }> = ({field, watch}) => {
    const hoursType = watch('hoursType');
    const breakTime = watch("breakTime")
    const hoursPerDay = watch('hoursPerDay')

    return (
        <div className="p-inputgroup flex-1">
            <span className="p-inputgroup-addon bg-white flex-1">{format(field.value as Date, DEFAULT_TIME_FORMAT)}</span>
            <span className="p-inputgroup-addon">до</span>
            <span className="p-inputgroup-addon bg-white flex-1">{format(getCourseEndTime(hoursPerDay, field.value as Date, hoursType, breakTime), DEFAULT_TIME_FORMAT)}</span>
        </div>
    );
};