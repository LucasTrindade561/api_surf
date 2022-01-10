// import Athlete from '../models/Athlete';
// import Foto from '../models/Foto';

// // athletes --> email nao vai precisar
// class AthleteController {
//   async index(req, res) {
//     const alunos = await Athlete.findAll({ // athletes
//       attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
//       order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
//       include: {
//         model: Foto,
//         attributes: ['url', 'filename'],
//       },
//     });
//     res.json(alunos);
//   }

//   async store(req, res) {
//     try {
//       const aluno = await Athlete.create(req.body);

//       return res.json(aluno);
//     } catch (e) {
//       return res.status(404).json({
//         errors: e.errors.map((err) => err.message),
//       });
//     }
//   }

//   async show(req, res) {
//     try {
//       const { id } = req.params;

//       if (!id) {
//         return res.status(404).json({
//           errors: ['Faltando ID'],
//         });
//       }

//       const aluno = await Athlete.findByPk(id, {
//         attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
//         order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
//         include: {
//           model: Foto,
//           attributes: ['url', 'filename'],
//         },
//       });

//       if (!aluno) {
//         return res.status(404).json({
//           errors: ['Estudante não existe'],
//         });
//       }

//       return res.json(aluno);
//     } catch (e) {
//       return res.status(404).json({
//         errors: e.errors.map((err) => err.message),
//       });
//     }
//   }

//   async delete(req, res) {
//     try {
//       const { id } = req.params;

//       if (!id) {
//         return res.status(404).json({
//           errors: ['Faltando ID'],
//         });
//       }

//       const aluno = await Athlete.findByPk(id);

//       if (!aluno) {
//         return res.status(404).json({
//           errors: ['Estudante não existe'],
//         });
//       }

//       await aluno.destroy();
//       return res.json({
//         apagado: 'true',
//       });
//     } catch (e) {
//       return res.status(404).json({
//         errors: e.errors.map((err) => err.message),
//       });
//     }
//   }

//   async update(req, res) {
//     try {
//       const { id } = req.params;

//       if (!id) {
//         return res.status(404).json({
//           errors: ['Faltando ID'],
//         });
//       }

//       const aluno = await Athlete.findByPk(id);

//       if (!aluno) {
//         return res.status(404).json({
//           errors: ['Estudante não existe'],
//         });
//       }

//       const alunoAtualizado = await aluno.update(req.body);
//       return res.json(alunoAtualizado);
//     } catch (e) {
//       return res.status(404).json({
//         errors: e.errors.map((err) => err.message),
//       });
//     }
//   }
// }

// export default new AthleteController();
