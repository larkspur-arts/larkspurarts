import React from 'react';
import {Menu} from 'primereact/menu';
import { withRouter } from 'react-router-dom';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './style.css';

const Sidebar = (props) => {
    let items = [
        {label: 'Home', icon: 'pi pi-fw pi-home', command:()=>{ window.location.hash="/"; }},
        {label: 'Main Stories', icon: 'pi pi-fw pi-th-large', command:()=>{ window.location.hash="/mainstory"; }},
        {label: 'Short Stories', icon: 'pi pi-fw pi-list',  command:()=>{ window.location.hash="/shortstories"; }},
        {label: 'Spinoff Stories', icon: 'pi pi-fw pi-table', command:()=>{ window.location.hash="/spinoffstories"; }},
        {label: 'Art', icon: 'pi pi-fw pi-image', command:()=>{ window.location.hash="/art"; }}
    ];
    return (
        <Menu model={items} />
    );
};

export default withRouter(Sidebar);