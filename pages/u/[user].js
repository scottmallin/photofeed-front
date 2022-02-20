import React from 'react';
import { isLoggedIn } from '../../util/auth';

const UserProfile = props => {
    return (
        <div>
            <header>
                <div className="container py-12">
                    <div className="w-full">
                        <h1>{props.userData.name}</h1>
                    </div>

                    {isLoggedIn ? (
                        <div className="w-full">
                            <button>follow</button>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </header>
            <div className="container flex gap-6">
                {props.posts.map(post => {
                    const fileName = post.file_path.split('/').pop();
                    const path =
                        'http://127.0.0.1:8000/storage/postmedia/' + fileName;
                    return (
                        <div className="w-1/3" key={post.id}>
                            {post.file_path ? (
                                <img
                                    className="aspect-square object-cover"
                                    src={path}
                                    alt={post.caption}
                                />
                            ) : (
                                ''
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default UserProfile;

export async function getServerSideProps(context) {
    try {
        const { user } = context.query;
        const [userRes, postsRes] = await Promise.all([
            fetch(`http://127.0.0.1:8000/api/user/${user}`),
            fetch(`http://127.0.0.1:8000/api/user/${user}/posts`)
        ]);

        const [userData, posts] = await Promise.all([
            userRes.json(),
            postsRes.json()
        ]);

        return {
            props: {
                userData,
                posts
            }
        };
    } catch (e) {
        return {
            props: {
                error: 'no user found'
            }
        };
    }
}
