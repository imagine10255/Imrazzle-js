import React, {useState} from 'react';
import {Container, Col, Row} from 'styled-bs-grid';
import {useForm} from 'react-hook-form';
import readeMe from '@components/atoms/DatePicker/tests/DatePicker.stories.md';
import renderPropsTable from '@test/storybook/addonConfig/renderPropsTable';
import Input from '@components/atoms/Input';
import DatePicker from '../DatePicker';

export default {
    title: 'Atoms|DatePicker',
    parameters: {
        notes: readeMe + renderPropsTable(Input),
    },
};

export const Basic = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleChange = value => {
        setSelectedDate(value);
    };

    return (
        <Container>
            <h2 className="story-title">Date Picker</h2>

            <Row>
                <Col col={24} className="d-flex justify-content-center">
                    selected: {selectedDate}
                </Col>
                <Col col={24} className="pb-3 pt-3">
                    <DatePicker
                        value={selectedDate}
                        onChange={handleChange}
                        isSetTodayVisible
                    />
                </Col>
            </Row>
        </Container>
    );
};

Basic.story = {
    parameters: {
        backgrounds: [
            {name: 'light', value: '#ccc', default: true},
        ],
    },
};

export const UseHookForm = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const {register, handleSubmit} = useForm({
        mode: 'onChange',
    });

    const onSubmit = formData => {
        // eslint-disable-next-line no-console
        console.log('onSubmit', formData);
    };

    const handleChange = value => {
        setSelectedDate(value);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container>
                    <Row>
                        <Col style={{margin: '10px auto'}}>
                            <React.Fragment>
                                <div style={{color: '#000', marginBottom: 40}}>selected: {selectedDate}</div>
                                <DatePicker
                                    forwardRef={register}
                                    name="datePicker"
                                    value={selectedDate}
                                    onChange={handleChange}
                                    isSetTodayVisible
                                    customLocaleWeekDay={['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']}
                                    // customLocaleMonth={['1月', '二月', '3月', '四月', '5月', '六月', '7月', '八月', '9月', '十月', '11月', '十二月']}
                                />
                            </React.Fragment>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <button type="submit">Submit</button>
                        </Col>
                    </Row>
                </Container>
            </form>
        </>
    );
};