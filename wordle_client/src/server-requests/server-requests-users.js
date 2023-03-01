const endpoint = 'http://localhost:3333';

export async function LogInUser(email, password) {
  const message = {
    email: email,
    password: password,
  };
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  };

  const res = await fetch(`${endpoint}/users/login`, requestOptions);
  if (res.ok === true) {
    const obj = await res.json();
    return obj;
  } else {
    throw new Error('No such user');
  }
}

export async function createUser(email, firstName, lastName, password) {
  const message = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    password: password,
  };
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message),
  };
  const res = await fetch(`${endpoint}/users/newUser`, requestOptions);
  if (res.ok === true) {
    return await res.json();
  } else {
    throw new Error('This user already exists');
  }
}

export async function logInAdmin(userEmail, token) {
  const message = {
    email: userEmail,
  };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: token,
    },
    body: JSON.stringify(message),
  };
  try {
    const res = await fetch(`${endpoint}/admin/login`, requestOptions);
    const a = await res.json();
    return a;
  } catch (e) {
    console.log("Not an admin");
  }
}
