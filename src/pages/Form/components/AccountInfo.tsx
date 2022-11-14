import React from 'react'
import FormInput from 'components/Input/Input'

function AccountInfo() {
  return (
    <>
      <FormInput name="login" type="text" placeholder="Введите ваш логин" />
      <FormInput name="email" type="email" placeholder="Введите ваш email" />
      <FormInput
        name="password"
        type="password"
        placeholder="Введите ваш пароль"
      />
    </>
  )
}

export default AccountInfo
