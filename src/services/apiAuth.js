import supabase from './supabase';

export async function loginApi({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

//1.即使刷新页面（重新检查supabase获取用户数据）也能保持登录状态

export async function getCurrentUser() {
  //检查本地存储，如果有来自supabase的session则执行getUser，没有返回null
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  return data?.user;
}

export async function LogoutApi() {
  let { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
