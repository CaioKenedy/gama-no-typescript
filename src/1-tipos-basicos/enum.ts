enum permissoes {
  admin,
  editor,
  comum,
}

enum colors {
  red = "#ff0000",
  black = "#000",
}

const users = {
  perfil: colors.red,
  nivel: permissoes.editor,
};

console.log(users);
