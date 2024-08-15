import { Link } from 'react-router-dom';
import {
    EntryContainer,
    FormCheckbox,
    FormInputIcon,
    SubmitBtn
} from '../components';

const Register = () => {
    const paragraph =
        'How ever you want to say it, welcome aboard to Wikibeerdia, the best online encyclopedia for beer! Create your account now, and take advantage of being a member of the best beer community around.';
    return (
        <>
            <div className="relative min-h-screen flex ">
                <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
                    <EntryContainer paragraph={paragraph} />
                    <div className="md:flex md:items-center md:justify-center sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8 md:p-10 lg:p-14 lg:pr-44 sm:rounded-lg md:rounded-none bg-white ">
                        <div className="max-w-md w-full space-y-8 mr-10">
                            <div className="text-center">
                                <h2 className="mt-6 text-3xl font-bold text-gray-900">
                                    Welcome Back!
                                </h2>
                                <p className="mt-2 text-sm text-gray-500">
                                    Use the form below to log in to your account
                                </p>
                            </div>
                            <form className="mt-8 space-y-6" method="POST">
                                <div className="relative">
                                    <FormInputIcon
                                        label="Username/Email"
                                        name="identifier"
                                        type="text"
                                        defaultValue=""
                                    />
                                </div>
                                <div className="relative">
                                    <FormInputIcon
                                        label="Password"
                                        name="password"
                                        type="password"
                                        defaultValue=""
                                    />
                                </div>
                                <div class="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <FormCheckbox
                                            label="Remember Me"
                                            name="rememberMe"
                                            defaultValue={true}
                                        />
                                    </div>
                                    <div className="text-sm">
                                        <Link
                                            to="/forgotpassword"
                                            className="text-indigo-400 hover:text-blue-500"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <SubmitBtn text="Login" />
                                </div>
                                <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                                    <span>Don't have an account yet?</span>
                                    <Link
                                        to="/register"
                                        className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Register;
