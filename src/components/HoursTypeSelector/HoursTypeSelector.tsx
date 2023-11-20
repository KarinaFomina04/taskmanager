import {Dropdown} from "primereact/dropdown";
import {FC} from "react";
import {ControllerRenderProps} from "react-hook-form";
import {TForm} from "../../globalTypes.ts";

export const HoursTypeSelector:FC<{field: ControllerRenderProps<TForm>}> = ({field}) => {
    return (
                <Dropdown
                    id={field.name}
                    value={field.value}
                    className='w-full'
                    optionLabel='name'
                    optionValue='timeInMin'
                    options={[
                        { name: 'Академические', timeInMin: 45 },
                        { name: 'Астрономические', timeInMin: 60 },
                    ]}
                    onChange={(e) => field.onChange(e.value)}
                />
    );
};
