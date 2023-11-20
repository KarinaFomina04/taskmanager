import {Dropdown} from "primereact/dropdown";
import {FC} from "react";
import {ControllerRenderProps} from "react-hook-form";
import {TForm} from "../../globalTypes.ts";

export const BreakTimeSelector:FC<{field: ControllerRenderProps<TForm>}> = ({field}) => {
    return (
                <Dropdown
                    id={field.name}
                    value={field.value}
                    className='w-full'
                    optionLabel='name'
                    optionValue='timeInMin'
                    options={[
                        { name: 'Без перерыва', timeInMin: 0 },
                        { name: 'Перерыв 5 минут', timeInMin: 5 },
                        { name: 'Перерыв 10 минут', timeInMin: 10 },
                        { name: 'Перерыв 20 минут', timeInMin: 20 },
                        { name: 'Перерыв 30 минут', timeInMin: 30 },
                    ]}
                    onChange={(e) => field.onChange(e.value)}
                />
    );
};
