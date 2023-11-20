import {FC} from "react";
import {ControllerRenderProps, UseFormWatch} from "react-hook-form";
import {TForm} from "../../globalTypes.ts";
import {Button} from "primereact/button";

export const HoursPerDaySelector: FC<{
    field: ControllerRenderProps<TForm>, watch:  UseFormWatch<TForm> }> = ({field, watch}) => {
    const fieldValue = field.value as number
    const totalHours = watch('totalHours')
    return (
        <div className="p-inputgroup flex-1">
            <Button type='button' icon="pi pi-minus" onClick={() => field.onChange(fieldValue > 1 ? fieldValue - 0.5 : fieldValue)} className="p-button-primary" />
            <span className="p-inputgroup-addon bg-white flex-1">{fieldValue}</span>
            <span style={{fontSize: 15, lineHeight:'.8'}} className="p-inputgroup-addon">Часов <br/> в день</span>
            <Button type='button' icon="pi pi-plus" onClick={() => field.onChange((fieldValue < totalHours && fieldValue < 12) ? fieldValue + 0.5 : fieldValue)} className="p-button-primary" />
        </div>
    );
};