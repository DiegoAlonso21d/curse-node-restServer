const { response } = require("express");

const usuariosGet = (req, res = response) => {

    const {q,nombre="No nombre",apellido}=req.query

  res.status(403).json({
    ok: true,
    msg: "getControlador",
    q,
    nombre,
    apellido
  });
};

const usuariosPost = (req, res = response) => {
const {nombre,edad}=req.body;

  res.status(403).json({
    ok: true,
    msg: "postControlador",
    nombre,
    edad
  });
};

const usuariosPut = (req, res = response) => {

    const id=req.params.id;

  res.status(403).json({
    ok: true,
    msg: "putControlador",
    id
  });
};

const usuariosPatch = (req, res = response) => {
  res.status(403).json({
    ok: true,
    msg: "patchControlador",
  });
};

const usuariosDelete = (req, res = response) => {
  res.status(403).json({
    ok: true,
    msg: "deleteControlador",
  });
};
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosPatch,
  usuariosDelete,
};
