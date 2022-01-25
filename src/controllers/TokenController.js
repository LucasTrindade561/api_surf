import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Invalid credentials.'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        errors: ['There is no user.'],
      });
    }

    if (!(await user.isPasswordValid(password))) {
      res.status(400).json({
        errors: ['Password is invalid.'],
      });
    }

    const { id } = user;

    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({
      token,
      user: {
        name: user.name, lastname: user.lastname, id, email,
      },
    });
  }
}

export default new TokenController();
