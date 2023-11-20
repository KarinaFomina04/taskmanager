import {Dropdown} from "primereact/dropdown";
import {FC} from "react";
import {ControllerRenderProps} from "react-hook-form";
import {TForm} from "../../globalTypes.ts";

export const TeacherNameSelector:FC<{field: ControllerRenderProps<TForm>}> = ({field}) => {
    return (
                <Dropdown
                    id={field.name}
                    value={field.value}
                    className='w-full'
                    optionLabel='name'
                    optionValue='id'
                    placeholder={'Выберите преподавателя на это время'}
                    options={[
                        { name: 'Иванов И.И', id: 234 },
                        { name: 'Сидоров С.В', id: 33 },
                        { name: 'Федоров А.Г', id: 21 },
                    ]}
                    onChange={(e) => field.onChange(e.value)}
                />
    );
};
