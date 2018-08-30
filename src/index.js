import './styles/index.scss';

import Button from '../components/button';
import Col from '../components/col';
import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import Icon from '../components/icon';
import Input from '../components/input';
import Layout from '../components/layout';
import List from '../components/list';
import ListItem from '../components/list-item';
import Row from '../components/row';
import Slider from '../components/slider';
import Transition from '../components/transition';

const components = [
    Button,
    Col,
    Content,
    Footer,
    Header,
    Icon,
    Input,
    Layout,
    List,
    ListItem,
    Row,
    Slider,
    Transition,
]

const install = function (Vue) {
    components.forEach(c => {
        Vue.component(c.name, c);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const b = {
    version: process.env.VERSION,
    install,
    ...components,
}

export default b;