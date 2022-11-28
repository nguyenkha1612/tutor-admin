import className from 'classnames/bind';

import styles from './NewCourse.module.scss';

const cx = className.bind(styles);

export default function NewCourse() {
    return (
        <div className={cx('newCourse')}>
            <h1 className={cx('newCourseTitle')}>New Course</h1>
            <form className={cx('newCourseForm')}>
                <div className={cx('newCourseItem')}>
                    <label>Course name</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className={cx('newCourseItem')}>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className={cx('newCourseItem')}>
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className={cx('newCourseItem')}>
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className={cx('newCourseItem')}>
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78" />
                </div>
                <div className={cx('newCourseItem')}>
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className={cx('newCourseItem')}>
                    <label>Gender</label>
                    <div className={cx('newCourseGender')}>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className={cx('newCourseItem')}>
                    <label>Active</label>
                    <select className={cx('newCourseSelect')} name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className={cx('newCourseButton')}>Create</button>
            </form>
        </div>
    );
}
