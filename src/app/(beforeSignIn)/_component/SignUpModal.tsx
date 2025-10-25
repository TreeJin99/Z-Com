'use client'

import style from './signup.module.css';
import onSubmit from '../_lib/signup';
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";
import BackButton from "@/app/(afterSignIn)/_component/BackButton";
import {useActionState} from "react";
import {useFormStatus} from "react-dom";

function showMessage(message: string | null | undefined) {
    if (message === 'no_id') {
        return '아이디를 입력하세요.';
    }
    if (message === 'no_name') {
        return '닉네임을 입력하세요.';
    }
    if (message === 'no_password') {
        return '비밀번호를 입력하세요.';
    }
    if (message === 'no_image') {
        return '이미지를 업로드하세요.';
    }
    if (message === 'user_exists') {
        return '이미 사용 중인 아이디입니다.';
    }
    return '';
}

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={style.actionButton}
            disabled={pending}
        >
            {pending ? '가입 중...' : '가입하기'}
        </button>
    );
}

const SignUpModal = () => {
    const [state, formAction] = useActionState(onSubmit, { message: null });
    // const [state, formAction] = useFormState(onSubmit, { message: null });
    const { pending } = useFormStatus();

    const router = useRouter();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    /*
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        setError('');

        const formData = new FormData(e.currentTarget);

        // 유효성 검사
        if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
            setError('아이디를 입력해주세요.');
            setLoading(false);
            return;
        }
        if (!formData.get('name') || !(formData.get('name') as string)?.trim()) {
            setError('닉네임을 입력해주세요.');
            setLoading(false);
            return;
        }
        if (!formData.get('password') || !(formData.get('password') as string)?.trim()) {
            setError('비밀번호를 입력해주세요.');
            setLoading(false);
            return;
        }
        if (!formData.get('image')) {
            setError('프로필 이미지를 선택해주세요.');
            setLoading(false);
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
                method: "POST",
                body: formData,
                credentials: "include",
            });

            console.log('응답 상태:', res.status);

            if (res.status === 200) {
                console.log('회원가입 성공!');
                router.push('/home');
            } else if (res.status === 401) {
                setError('인증에 실패했습니다.');
            } else if (res.status === 403) {
                setError('이미 사용 중인 아이디입니다.');
                console.log('아아아아 앙돼')

            } else {
                const data = await res.json().catch(() => ({}));
                setError(data.message || '회원가입에 실패했습니다.');
            }

            console.log(await res.json());

        } catch (err) {
            console.error('회원가입 에러:', err);
            setError('서버 연결에 실패했습니다.');
        } finally {
            setLoading(false);
        }
    };

     */

    return (
        <>
            <div className={style.modalBackground}>
                <div className={style.modal}>
                    <div className={style.modalHeader}>
                        <BackButton/>
                        <div>계정을 생성하세요.</div>
                    </div>

                    {/* ✅ action → onSubmit 변경 */}
                    <form action={formAction}>
                        <div className={style.modalBody}>
                            {/* ✅ 에러 메시지 표시 */}
                            {error && (
                                <div style={{
                                    color: 'red',
                                    marginBottom: '12px',
                                    padding: '12px',
                                    backgroundColor: '#fee',
                                    borderRadius: '8px',
                                    fontSize: '14px'
                                }}>
                                    ⚠️ {error}
                                </div>
                            )}

                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="id">
                                    아이디
                                </label>
                                <input
                                    id="id"
                                    name="id"
                                    className={style.input}
                                    type="text"
                                    placeholder=""
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="name">
                                    닉네임
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    className={style.input}
                                    type="text"
                                    placeholder=""
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="password">
                                    비밀번호
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    className={style.input}
                                    type="password"
                                    placeholder=""
                                    required
                                    disabled={loading}
                                />
                            </div>

                            <div className={style.inputDiv}>
                                <label className={style.inputLabel} htmlFor="image">
                                    프로필
                                </label>
                                <input
                                    id="image"
                                    name="image"
                                    className={style.input}
                                    type="file"
                                    accept="image/*"
                                    required
                                    disabled={loading}
                                />
                            </div>
                        </div>

                        <div className={style.modalFooter}>
                            <SubmitButton />
                            <div className={style.error}>{showMessage(state?.message)}</div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUpModal;