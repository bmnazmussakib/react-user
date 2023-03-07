import React from 'react';
import { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PageTop from '../../components/PageTop';
import ContactSection from '../../components/ContactSection';

const index = () => {
    return (
        <Fragment>
            <PageTop title='contact'/>
            <ContactSection />
        </Fragment>
    );
};

export default index;