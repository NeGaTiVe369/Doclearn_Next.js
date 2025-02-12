"use client"

import type React from "react"
import { useForm } from "react-hook-form"
import { Form, Button, Spinner } from "react-bootstrap"
import styles from "../styles/AuthForm.module.css"
import { validateEmail, validatePassword } from "@/utils/validation"
import { FormInput } from "@/components/Auth/common/FormInput"
import { PasswordInput } from "@/components/Auth/common/PasswordInput"

interface LoginFormData {
  email: string
  password: string
}

interface LoginFormProps {
  onSuccess: (token: string) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Simulated login
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onSuccess("dummy_token")
    } catch (error) {
      setError("root", {
        type: "manual",
        message: "Неверные данные для входа. Проверьте email или пароль.",
      })
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormInput
        name="email"
        label="Почта"
        control={control}
        rules={{ validate: validateEmail }}
        error={errors.email}
        placeholder="Введите свою почту"
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

      {errors.root && <p className={styles.errorMessage}>{errors.root.message}</p>}

      <div className="d-flex justify-content-between align-items-center mb-3">
        <a href="#" className={styles.forgotPassword}>
          Забыли пароль?
        </a>
      </div>

      <Button variant="primary" type="submit" className={styles.btnCustom} disabled={isSubmitting}>
        {isSubmitting ? <Spinner as="span" animation="border" size="sm" /> : "Войти"}
      </Button>
    </Form>
  )
}

export default LoginForm


