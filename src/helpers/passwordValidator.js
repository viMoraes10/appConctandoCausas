export function passwordValidator(password) {
  if (!password) return "A senha não pode ficar vazio."
  if (password.length < 5) return 'A senha deve ter pelo menos 5 caracteres.'
  return ''
}
