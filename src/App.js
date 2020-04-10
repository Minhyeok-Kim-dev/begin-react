import React, {useRef, Fragment, useState} from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'mink',
      email: 'mink@gmail.com',
      active: true
    }, 
    {
      id: 2,
      username: 'juk',
      email: 'juk@gmail.com',
      active: false
    },
    {
      id: 3,
      username: 'tester',
      email: 'tester@gmail.com',
      active: false
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    };

    // 배열 항목추가
    // setUsers([...users, user]);  // spread 연산자
    setUsers(users.concat(user));   // concat()

    setInputs({
      username: '',
      email: ''
    });
    console.log(nextId.current);
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active }
        : user
    ));
  }

  return (
    <Fragment>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </Fragment>

    // <InputSample />

    // <Counter />
    
    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial />
    //   <Hello color="blue" />
    // </Wrapper>


  );
}

export default App;
