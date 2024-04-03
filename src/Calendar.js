import React, { useState } from 'react';
import { format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths } from 'date-fns';
import circleImage from './images/circle.png';

const calendarStyles = {
    calendar: {
        margin: '50px auto',
        padding: '0 20px',
        background: 'transparent',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 'bold',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat, sans-serif',
        color: '#8E8E8E',
    },
    headerTitle: {
        fontWeight: 'bold',
        color: '#8E8E8E',
    },
    headerButton: {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 'large',
        color: '#444',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cell: {
        width: 'calc(100%/7 - 10px)',
        minHeight: '200px',
        margin: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: '#efefef',
        borderRadius: '10px',
    },
    number: {
        alignSelf: 'flex-start', // align to the top left
        margin: '5px',
        fontWeight: 'bold',
    },
    today: {
        fontWeight: 'bold',
    },
    disabled: { // days not in the current month are grayed out
        color: '#d9e1e8',
    },
    event: {
        marginTop: '10px',
        textAlign: 'center',
        fontSize: '0.85em',
        background: 'pink',
        color: 'black',
        borderRadius: '4px',
        padding: '2px 10px',
        maxWidth: '80%',
        margin: '10px auto',
    },

    headerCell: {
        width: 'calc(100%/7)',
        textAlign: 'center',
        margin: '0',
        textTransform: 'uppercase',
        fontFamily: 'Montserrat, sans-serif',
        color: '#8E8E8E',
    },
};
const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [events, setEvents] = useState([]);
    const renderHeader = () => {
        const dateFormat = "MMMM yyyy";
        return (
            <div style={calendarStyles.header}>
                <button style={calendarStyles.headerButton} onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
                    {"<"}
                </button>
                <div style={calendarStyles.headerTitle}>{format(currentMonth, dateFormat)}</div>
                <button style={calendarStyles.headerButton} onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
                    {">"}
                </button>
            </div>
        );
    };
    const onDateClick = day => {
        setSelectedDate(day);
    };


    const renderDays = () => {
        const dateFormat = "EEE";
        const days = [];
        let startDate = startOfWeek(currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div style={calendarStyles.headerCell} key={i}>
                    {format(addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div style={calendarStyles.row}>{days}</div>;
    };


    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                formattedDate = format(day, dateFormat);
                const cloneDay = day;
                const isToday = isSameDay(day, new Date());
                const isDisabled = !isSameMonth(day, monthStart);

                if (day.getDay() === 3 && isSameMonth(day, monthStart)) { // Checks if the day is Wednesday and in the current month
                    days.push(
                        <div
                            style={{
                                ...calendarStyles.cell,
                                ...(isDisabled ? calendarStyles.disabled : {}),
                                ...(isToday ? calendarStyles.today : {}),
                                position: 'relative',
                            }}
                            key={day.toISOString()}
                            onClick={() => onDateClick(cloneDay)}
                        >
                            {isToday && !isDisabled && (
                                <img
                                    src={circleImage}
                                    alt="Circle"
                                    style={{
                                        position: 'absolute',
                                        top: '-2%',
                                        left: '0%',
                                        width: '25%',
                                        height: '25%',
                                    }}
                                />
                            )}
                            <span style={{ ...calendarStyles.number, margin: '10px 0 0 10px' }}>{formattedDate}</span>
                            <div
                                style={{
                                    backgroundColor: 'pink',
                                    color: 'black',
                                    textAlign: 'center',
                                    fontSize: '0.85em',
                                    borderRadius: '4px',
                                    padding: '2px 4px',
                                    position: 'absolute',
                                    top: '20%',
                                    left: '0',
                                    width: '95%',
                                    transform: 'translateY(50%)',
                                }}
                            >
                                formal
                            </div>
                        </div>
                    );
                } else {
                    days.push(
                        <div
                            style={{
                                ...calendarStyles.cell,
                                ...(isDisabled ? calendarStyles.disabled : {}),
                                ...(isToday ? calendarStyles.today : {}),
                                position: 'relative',
                            }}
                            key={day.toISOString()}
                            onClick={() => onDateClick(cloneDay)}
                        >
                            {isToday && !isDisabled && (
                                <img
                                    src={circleImage}
                                    alt="Circle"
                                    style={{
                                        position: 'absolute',
                                        top: '-2%',
                                        left: '0%',
                                        width: '25%',
                                        height: '25%',
                                    }}
                                />
                            )}
                            <span style={{ ...calendarStyles.number, margin: '10px 0 0 10px' }}>{formattedDate}</span>
                        </div>
                    );
                }
                day = addDays(day, 1);
            }
            rows.push(
                <div style={calendarStyles.row} key={day.toISOString()}>{days}</div>
            );
            days = [];
        }
        return <div>{rows}</div>;
    };
    return (
        <div className="background">
            <div style={calendarStyles.calendar}>
                {renderHeader()}
                {renderDays()}
                {renderCells()}
            </div>

        </div>
    );
};

export default Calendar;
