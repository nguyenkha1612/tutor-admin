import config from '~/config';
import { HeadlessLayout } from '~/layouts';
import Home from '~/pages/Home';
import User from '~/pages/User';
import NewUser from '~/pages/NewUser';
import UserList from '~/pages/UserList';
import CourseList from '~/pages/CourseList';
import Course from '~/pages/Course';
import NewCourse from '~/pages/NewCourse';
import TransactionList from '~/pages/TransactionList';
import Transaction from '~/pages/Transaction';
import Chart from '~/pages/Chart';
import Login from '~/pages/Login';

export const publicRoutes = [
    {
        path: config.routes.home,
        component: Login,
        layout: HeadlessLayout,
    },
    {
        path: config.routes.home2,
        component: Login,
        layout: HeadlessLayout,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: HeadlessLayout,
    },
];

export const privateRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.home2,
        component: Home,
    },
    {
        path: config.routes.user,
        component: User,
    },
    {
        path: config.routes.newUser,
        component: NewUser,
    },
    {
        path: config.routes.userList,
        component: UserList,
    },
    {
        path: config.routes.course,
        component: Course,
    },
    {
        path: config.routes.newCourse,
        component: NewCourse,
    },
    {
        path: config.routes.courseList,
        component: CourseList,
    },
    {
        path: config.routes.transaction,
        component: Transaction,
    },
    {
        path: config.routes.transactionList,
        component: TransactionList,
    },
    {
        path: config.routes.chart,
        component: Chart,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: HeadlessLayout,
    },
    {
        path: config.routes.logout,
        component: Login,
        layout: HeadlessLayout,
    },
];
