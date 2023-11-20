import {Dropdown} from "primereact/dropdown";
import {FC} from "react";
import {ControllerRenderProps} from "react-hook-form";
import {TForm} from "../../globalTypes.ts";

export const AudienceSelector:FC<{field: ControllerRenderProps<TForm>}> = ({field}) => {
    return (
                <Dropdown
                    id={field.name}
                    value={field.value}
                    className='w-full'
                    optionLabel='name'
                    optionValue='id'
                    placeholder={'Выберите аудиторию'}
                    options={[
                        { name: 'Аудитория 234', id: 234 },
                        { name: 'Аудитория 567', id: 567 },
                        { name: 'Аудитория 221', id: 221 },
                    ]}
                    onChange={(e) => field.onChange(e.value)}
                />
    );
};
