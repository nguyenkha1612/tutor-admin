import config from '~/config';
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

export const publicRoutes = [
    {
        path: config.routes.home,
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
];
