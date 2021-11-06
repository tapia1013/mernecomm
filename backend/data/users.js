import bcrypt from 'bcryptjs'


const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Cookie Tapia',
    email: 'cookie@example.com',
    password: bcrypt.hashSync('', 10),
  },
  {
    name: 'Nye Rodriguez',
    email: 'nye@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users