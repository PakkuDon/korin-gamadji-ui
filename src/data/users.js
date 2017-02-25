export default [
  {
    id: 1,
    name: 'Bobby Tables',
    email: 'bobby@example.com',
    password: 'cakepudding',
    role: 'mentee',
    mentoring: []
  },
  {
    id: 2,
    name: 'Alba Hurley',
    email: 'a.hurley@myemail.com.au',
    password: 'password',
    role: 'mentee',
    mentoring: []
  },
  {
    id: 3,
    name: 'Shawn',
    email: 'shawn@example.com',
    password: 'password',
    role: 'mentee',
    mentoring: []
  },
  {
    id: 4,
    name: 'Jessica',
    email: 'jesicca@gmail.com',
    password: 'abc123',
    role: 'mentor',
    mentoring: [
      1, 5, 6
    ]
  },
  {
    id: 5,
    name: 'Janine',
    email: 'janine@gmail.com',
    password: 'password',
    role: 'mentor',
    mentoring: [
      2, 4, 5
    ]
  }
];
