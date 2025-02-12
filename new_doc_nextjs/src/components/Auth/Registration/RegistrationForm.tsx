"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { Form, Button } from "react-bootstrap"
import styles from "../styles/AuthForm.module.css"
import { validateName, validateEmail, validatePassword } from "@/utils/validation"
import { FormInput } from "@/components/Auth/common/FormInput"
import { PasswordInput } from "@/components/Auth/common/PasswordInput"
import { errorMessages } from "@/utils/errorMessages"

interface RegistrationFormData {
  name: string
  surname: string
  dob: string
  job: string
  email: string
  password: string
  confirmPassword: string
}

interface RegistrationFormProps {
  onSubmit: (data: RegistrationFormData) => void
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationFormData>()

  const password = watch("password")

  const onSubmitForm = (data: RegistrationFormData) => {
    onSubmit(data)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmitForm)} noValidate>
      <FormInput
        name="name"
        label="Имя"
        control={control}
        rules={{ validate: validateName }}
        error={errors.name}
        placeholder="Введите ваше имя"
      />

      <FormInput
        name="surname"
        label="Фамилия"
        control={control}
        rules={{ validate: validateName }}
        error={errors.surname}
        placeholder="Введите вашу фамилию"
      />

      <FormInput
        name="dob"
        label="Дата рождения"
        control={control}
        rules={{ required: errorMessages.required }}
        error={errors.dob}
        type="date"
      />

      <FormInput
        name="job"
        label="Место работы/учёбы"
        control={control}
        rules={{ required: errorMessages.required }}
        error={errors.job}
        placeholder="Введите место вашей работы/учёбы"
      />

      <FormInput
        name="email"
        label="Почта"
        control={control}
        rules={{ validate: validateEmail }}
        error={errors.email}
        placeholder="Введите вашу почту"
        type="email"
      />

      <PasswordInput
        name="password"
        label="Пароль"
        control={control}
        rules={{ validate: validatePassword }}
        error={errors.password}
        placeholder="Введите пароль"
      />

      <PasswordInput
        name="confirmPassword"
        label="Повторите пароль"
        control={control}
        rules={{
          validate: (value: string) => value === password || errorMessages.passwordMismatch,
        }}
        error={errors.confirmPassword}
        placeholder="Повторите пароль"
      />

      <Button variant="primary" type="submit" className={styles.btnCustom}>
        Зарегистрироваться
      </Button>
    </Form>
  )
}

export default RegistrationForm



