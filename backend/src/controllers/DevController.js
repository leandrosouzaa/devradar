const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections } = require('../websocket');

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const {
      github_username, techs, latitude, longitude,
    } = req.body;

    const devExist = await Dev.findOne({ github_username });

    if (devExist) {
      return res.json({ error: `Usuário ${github_username} já está cadastrado. ` });
    }

    try {
      var response = await axios.get(`https://api.github.com/users/${github_username}`);
    } catch (error) {
      return res.json({ error: 'Usuário inexsistente na base de dados do GitHub' });
    }


    // eslint-disable-next-line block-scoped-var
    const { name = login, avatar_url, bio = 'O usuário não possui descrição.' } = response.data;

    const techsArray = parseStringAsArray(techs);
    console.log(techsArray);
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    });

    // Filtrar as conexões que estão há no máimo 10km de distância e que o novo
    // dev tenha pelo menos uma das tecnologias filtradas

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      techsArray,
    );
    console.log(sendSocketMessageTo);

    return res.json(dev);
  },

  // Atualizando dados manualmente
  async update(req, res) {
    // Pegando dados do usuáro
    const dev = await Dev.findById(req.params.id);

    // Pegando dados da requisição e previnindo o envio de dados null.
    const {
      name = dev.name,
      bio = dev.bio,
      techs = dev.techs,
      latitude,
      longitude,
      avatar_url = dev.avatar_url,
    } = req.body;

    // Pegando a localização já cadastrada
    let { location } = dev;

    // Verificando se foi enviado latitude e longitude, se foi enviado a location é atualizada
    if (latitude && longitude) {
      location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
    }

    // Convertendo as tecnologias em um array
    const techsArray = parseStringAsArray(techs);

    // Enviando dados
    const response = await Dev.update({ _id: req.params.id }, {
      name,
      bio,
      techs: techsArray,
      location,
      avatar_url,
    });

    // Confirmação de update
    return res.json(response);
  },

  // Sincronizando dados com o GitHub
  async updateByGit(req, res) {
    // Buscando dados do usuário no database.
    const dev = await Dev.findById(req.params.id);

    // Buscando dados do usuário no GitHub com seu username.
    const response = await axios.get(`https://api.github.com/users/${dev.github_username}`);
    const { name = login, avatar_url, bio } = response.data;

    // Pegando a localização que do usuário na resposta
    let { location } = dev;

    // Pegando dados da requisição
    const { techs = dev.techs, latitude, longitude } = req.body;

    // Verificando se foi enviado latitude e longitude e se foi enviado a location é atualizada.
    if (latitude && longitude) {
      location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      };
    }

    // Convertendo as tecnologias em um array
    const techsArray = parseStringAsArray(techs);


    const result = await Dev.update({ _id: req.params.id }, {
      name,
      bio,
      techs: techsArray,
      location,
      avatar_url,
    });

    return res.json(result);
  },
  async destroy(req, res) {
    await Dev.findByIdAndDelete(req.params.id);

    return res.json({ message: 'Usuário excluído com sucesso.' });
  },
};
