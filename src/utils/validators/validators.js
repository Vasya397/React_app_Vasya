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

export const isLatinAlphanumeric = (value) => {
  const regex = /^[a-zA-Z0-9.@]+$/;
  return (
    regex.test(value) || "Логин может содержать только латинские буквы и цифры"
  );
};

export const maxLengthLog = (value) => {
  return value.length <= 10 || "Пароль не должен превышать 10 символов";
};
