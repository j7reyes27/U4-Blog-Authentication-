import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Profile = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setUser(userData);
      setValue('username', userData.username);
      setValue('email', userData.email);
      setValue('avatar', userData.avatar);
    }
  }, [setValue]);

  const onSubmit = data => {
    console.log(data);
    localStorage.setItem('user', JSON.stringify(data));
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      {user && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Username</label>
          <input type="text" {...register('username', { required: 'Username is required' })} />
          {errors.username && <p>{errors.username.message}</p>}

          <label>Email</label>
          <input type="email" {...register('email', { required: 'Email is required' })} />
          {errors.email && <p>{errors.email.message}</p>}

          <label>New Password</label>
          <input type="password" {...register('password', { minLength: { value: 6, message: 'Minimum length is 6' } })} />
          {errors.password && <p>{errors.password.message}</p>}

          <label>Avatar URL</label>
          <input type="text" {...register('avatar', { required: 'Avatar URL is required' })} />
          {errors.avatar && <p>{errors.avatar.message}</p>}

          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
