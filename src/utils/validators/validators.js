export const required = (value) => {
  if (!value) {
    return "Поле не должно быть пустым";
  }
  return undefined;
};

export const maxLength = (max) => (value) => {
  if (value && value.length > max) {
    return `Максимальная длина сообщения — ${max} символов`;
  }
  return undefined;
};
