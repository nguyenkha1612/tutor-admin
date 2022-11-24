import className from 'classnames/bind';

import styles from './NewUser.module.scss';

const cx = className.bind(styles);

export default function NewUser() {
    return (
        <div className={cx('newUser')}>
            <h1 className={cx('newUserTitle')}>New User</h1>
            <form className={cx('newUserForm')}>
                <div className={cx('newUserItem')}>
                    <label>Username</label>
                    <input type="text" placeholder="john" />
                </div>
                <div className={cx('newUserItem')}>
                    <label>Full Name</label>
                    <input type="text" placeholder="John Smith" />
                </div>
                <div className={cx('newUserItem')}>
                    <label>Email</label>
                    <input type="email" placeholder="john@gmail.com" />
                </div>
                <div className={cx('newUserItem')}>
                    <label>Password</label>
                    <input type="password" placeholder="password" />
                </div>
                <div className={cx('newUserItem')}>
                    <label>Phone</label>
                    <input type="text" placeholder="+1 123 456 78" />
                </div>
                <div className={cx('newUserItem')}>
                    <label>Address</label>
                    <input type="text" placeholder="New York | USA" />
                </div>
                <div className={cx('newUserItem')}>
                    <label>Gender</label>
                    <div className={cx('newUserGender')}>
                        <input type="radio" name="gender" id="male" value="male" />
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className={cx('newUserItem')}>
                    <label>Active</label>
                    <select className={cx('newUserSelect')} name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className={cx('newUserButton')}>Create</button>
            </form>
        </div>
    );
}
