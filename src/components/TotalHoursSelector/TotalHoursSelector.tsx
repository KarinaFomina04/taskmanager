import {FC} from "react";
import {ControllerRenderProps} from "react-hook-form";
import {TForm} from "../../globalTypes.ts";
import {Button} from "primereact/button";

export const TotalHoursSelector: FC<{
    field: ControllerRenderProps<TForm> }> = ({field}) => {
    const fieldValue = field.value as number
    return (
        <div className="p-inputgroup flex-1">
            <Button type='button' icon="pi pi-minus" onClick={() => field.onChange(fieldValue > 1 ? fieldValue - 1 : fieldValue)} className="p-button-primary" />
            <span className="p-inputgroup-addon bg-white flex-1">{fieldValue}</span>
            <span style={{fontSize: 15, lineHeight:'.8'}} className="p-inputgroup-addon">Всего <br/> часов</span>
            <Button type='button' icon="pi pi-plus" onClick={() => field.onChange(fieldValue + 1)} className="p-button-primary" />
        </div>
    );
};