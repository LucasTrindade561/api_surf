import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      const { id, nome, email } = novoUser;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index --- listando todos os usuarios
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] }); // Encontrar todos os usuarios na base de dados
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show --- listando apenas um usuario
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id); // Estamos achando pela a primary key

      const { id, nome, email } = user;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update --- atualizar o usuario
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId); // vai retonar um usuario da base de dado

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }

      const novoDados = await user.update(req.body);
      const { id, nome, email } = novoDados;
      return res.json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }

      if (!user) {
        return res.status(400).json({
          errors: ['Usuario não existe'],
        });
      }

      await user.destroy();
      return res.json('Usuario apagado com sucesso');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
