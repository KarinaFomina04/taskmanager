import './App.css'
import {useState} from "react";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {HoursTypeSelector} from "./components/HoursTypeSelector";
import {Controller, useForm} from "react-hook-form";
import {TotalHoursSelector} from "./components/TotalHoursSelector";
import {CourseDatesSelector} from "./components/CourseDatesSelector";
import {WeekDaysSelector} from "./components/WeekDaysSelector";
import {TField, TForm, TSelector, Weekdays} from "./globalTypes.ts";
import {BreakTimeSelector} from "./components/BreakTimeSelector";
import {HoursPerDaySelector} from "./components/HoursPerDaySelector";
import {TeacherNameSelector} from "./components/TeacherNameSelector";
import {AudienceSelector} from "./components/AudienceSelector";
import {CourseTimeSelector} from "./components/CourseTimeSelector";
import {GroupColorSelector} from "./components/GroupColorSelector";
import {getCourseEndDate, getCourseEndTime} from "./common/utils/dateUtils.ts";
import {format, setHours, setMinutes} from "date-fns";
import {DEFAULT_DATE_FORMAT, DEFAULT_TIME_FORMAT} from "./common/utils/constants.ts";

const App = () => {

    const defaultValues: TForm = {
        hoursType: 45,
        totalHours: 3,
        courseStartDate: new Date(),
        weekDays: [Weekdays.MONDAY, Weekdays.WEDNESDAY, Weekdays.FRIDAY],
        breakTime: 0,
        hoursPerDay: 1,
        courseStartTime: setMinutes(setHours(new Date(), 7), 0),
        teacherId: null,
        audience: null,
    };

    const {
        control,
        watch,
        handleSubmit,
        reset
    } = useForm({defaultValues});

    const [visible, setVisible] = useState(false);

    const prepareDataForBackend = (data: TForm) => {
        return {
            ...data,
            courseStartDate: format(data.courseStartDate, DEFAULT_DATE_FORMAT),
            courseEndDate : format(getCourseEndDate(data.totalHours, data.courseStartDate, data.weekDays), DEFAULT_DATE_FORMAT),
            courseStartTime: format(data.courseStartTime, DEFAULT_TIME_FORMAT),
            courseEndTime: format(getCourseEndTime(data.hoursPerDay, data.courseStartTime, data.hoursType, data.breakTime), DEFAULT_TIME_FORMAT)
        }
    }

    const onSubmit = (data: TForm) => {
        console.log(prepareDataForBackend(data))
    }

    const onReset = () => {
        setVisible(false)
        reset()
    }

    const schemas = [
        {
            name: 'hoursType',
            callback: ({field}: TSelector) => <HoursTypeSelector field={field}/>
        },
        {
            name: 'totalHours',
            callback: ({field}: TSelector) => <TotalHoursSelector field={field}/>
        },
        {
            name: 'courseStartDate',
            callback: ({field}: TSelector) => <CourseDatesSelector field={field} watch={watch}/>
        },
        {
            name: 'weekDays',
            callback: ({field}: TSelector) => <WeekDaysSelector field={field}/>
        },
        {
            name: 'breakTime',
            callback: ({field}: TSelector) => <BreakTimeSelector field={field}/>
        },
        {
            name: 'hoursPerDay',
            callback: ({field}: TSelector) => <HoursPerDaySelector field={field} watch={watch}/>
        },
        {
            name: 'courseStartTime',
            callback: ({field}: TSelector) => <CourseTimeSelector field={field} watch={watch}/>
        },
        {
            name: 'teacherId',
            callback: ({field}: TSelector) => <TeacherNameSelector field={field}/>
        },
        {
            name: 'audience',
            callback: ({field}: TSelector) => <AudienceSelector field={field}/>
        },
    ]

    return (
        <div className='card flex justify-content-center'>
            <Button label='Редактировать расписания' icon='pi pi-external-link'
                    onClick={() => setVisible(true)}/>
            <Dialog header='Редактировать расписания' visible={visible} style={{width: '50vw'}}
                    onHide={() => setVisible(false)}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='container'>
                        <InputText
                            className='w-10'
                            style={{gridArea: 'schoolName'}}
                            value='Онлайн школа'
                            disabled
                        />
                        <GroupColorSelector/>
                        {schemas.map(schema => {
                                return (
                                    <div key={schema.name} style={{gridArea: schema.name}}>
                                        <Controller
                                            name={schema.name as TField}
                                            control={control}
                                            render={schema.callback}
                                        />
                                    </div>
                                )
                            }
                        )}
                        <div style={{gridArea: 'validationMessage'}} className='bg-pink-100 pl-3'>
                            <p>Выбор <b>преподавателя</b> и <b>аудитории</b> не обязателен.</p>
                        </div>
                    </div>
                    <div className='p-dialog-footer pb-0 pt-5 pr-0'>
                        <Button type='button' label="Отмена" onClick={onReset} className='p-button-text'/>
                        <Button className='p-button-outlined mr-0' label='Добавить расписание' type="submit"/>
                    </div>
                </form>
            </Dialog>
        </div>
    )
}

export default App;

