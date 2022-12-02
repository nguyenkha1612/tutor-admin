/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
// import LoadingOverlay from 'react-loading-overlay-ts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/Button';
import { login, reset } from '~/redux/auth/actions';
import RootNavigator from '~/utils/navigate';
import styles from './Login.module.scss';
import background from '~/assets/images/login-background.jpg';

const cx = classNames.bind(styles);

function Login() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [name, setEmail] = useState("")
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    RootNavigator.setNavigate(navigate);
    useEffect(() => {
        dispatch(reset());
        // if (auth.user) {
        //     history.replace('/');
        // }
    }, []);

    const handleLogin = () => {
        dispatch(login(email, password));
    };

    return (
        <div className={cx('loginWrapper')} style={{ backgroundImage: `url(${background})` }}>
            <div className={cx('container')}>
                <div className={cx('rows')}>
                    <div className={cx('col-lg-5', 'col-md-8', 'col-md-offset-4')} style={{ margin: '0 auto' }}>
                        <form
                            className={cx('form-login', 'ng-pristine', 'ng-valid')}
                            onSubmit={handleSubmit(handleLogin)}
                        >
                            <center>
                                <h4 className={cx('heading-title heading-line-bottom ')}>Đăng nhập tài khoản</h4>
                            </center>
                            <center>
                                <p className={cx('text-error', 'font-size-14', 'text-center', 'text-c-red')}>
                                    {auth.error}
                                </p>
                            </center>
                            <div>
                                <input
                                    onInput={(e) => setEmail(e.target.value)}
                                    className={cx(
                                        'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                    )}
                                    placeholder="Email"
                                    ng-model="email"
                                    name="email"
                                    {...register('email', {
                                        required: true,
                                        pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                                    })}
                                ></input>
                                <div className={cx('error')}>
                                    <div className={cx('text-error')}>
                                        {errors.email?.type === 'required' && 'Email là bắt buộc'}
                                        {errors.email?.type === 'pattern' && 'Email sai định dạng'}
                                    </div>
                                </div>
                                <input
                                    onInput={(e) => setPassword(e.target.value)}
                                    className={cx(
                                        'form-control-none-radius ng-pristine ng-untouched ng-valid ng-empty ',
                                    )}
                                    placeholder="Mật khẩu"
                                    type="password"
                                    ng-model="pass"
                                    name="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 3,
                                        maxLength: 20,
                                    })}
                                ></input>
                                <div className={cx('error')}>
                                    <div className={cx('text-error')}>
                                        {errors.password?.type === 'required' && 'Mật khẩu là bắt buộc'}
                                        {errors.password?.type === 'minLength' && 'Mật khẩu không nhỏ hơn 3 ký tự'}
                                        {errors.password?.type === 'maxLength' && 'Mật khẩu không lớn hơn 20 ký tự'}
                                    </div>
                                </div>
                                {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-is-valid,
                            jsx-a11y/anchor-is-valid */}
                                <button
                                    // onClick={handleLogin}
                                    type="submit"
                                    className={cx('btn btn-lg btn-block btn-phone ')}
                                    style={{
                                        backgroundColor: 'var(--primary)',
                                    }}
                                >
                                    <i className="fas fa-phone"></i> Đăng nhập
                                </button>
                            </div>
                            <div className={cx('forgot-span')}>
                                <a
                                    href="https://tutor-website-52add.web.app/forgotPassword"
                                    className={cx('text-forgot')}
                                >
                                    Quên mật khẩu?
                                </a>
                            </div>
                            {/* <div className={cx('register-span')}>
                                <span> Bạn chưa có tài khoản? </span>
                                <Button to="/register" className={cx('text-register')}>
                                    <>Đăng Ký</>
                                </Button>
                            </div> */}

                            <div className={cx('hr-empty')}></div>
                            <button
                                href="#"
                                className={cx('btn btn-lg btn-block btn-facebook')}
                                style={{
                                    backgroundColor: '#3C5A99',
                                }}
                            >
                                <i className="fab fa-facebook-f"></i> Đăng nhập <b>Facebook</b>
                            </button>
                            <button
                                href="#"
                                className={cx('btn btn-lg btn-block btn-google')}
                                style={{
                                    backgroundColor: '#DB4437',
                                }}
                            >
                                <i className="fab fa-google"></i> Đăng nhập <b>Google</b>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
