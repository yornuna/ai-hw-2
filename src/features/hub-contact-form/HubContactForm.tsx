/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 * 2. Добавить обработчик отправки формы с валидацией
 * 3. Добавить recaptcha при отправке
 * 4. Подключить useContactFormSubmit hook
 */
"use client";

import type { ReactElement } from "react";
import { Button, Flex, Form, FormInput } from "bcc-design";
import { Section } from "@/shared/components/Section";
import { Body, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

interface IHubContactFormData {
  name: string;
  email: string;
  message: string;
}

export function HubContactForm(): ReactElement {
  const form = Form.useForm();

  const handleSubmit = (_data: IHubContactFormData): void => {
    /* TODO: отправка формы */
  };

  return (
    <Section bleed id="hub-contact-form" className={styles.section}>
      <div className={styles.container}>
        <Heading level="m" className={styles.title}>
          Обсудим ваш кейс
        </Heading>
        <div className={styles.formBlock}>
          <Body size="m" tone="muted" className={styles.description}>
            Опишите задачу — мы предложим вариант решения и оценим сроки
            внедрения
          </Body>

          <Form onSubmit={handleSubmit} form={form} className={styles.form}>
            <Flex direction="column" gap={16} width="100%">
              <FormInput
                clear
                fullWidth
                id="hub-contact-name"
                name="name"
                autoComplete="name"
                label="Имя"
                defaultValue=""
                maxLength={50}
                rules={{
                  required: "Введите ваше имя",
                  minLength: {
                    value: 2,
                    message: "Минимальная длина — 2 символа",
                  },
                  maxLength: {
                    value: 50,
                    message: "Максимальная длина — 50 символов",
                  },
                }}
                labelType="inner"
              />

              <FormInput
                clear
                fullWidth
                id="hub-contact-email"
                name="email"
                autoComplete="email"
                label="Email"
                defaultValue=""
                maxLength={50}
                rules={{
                  required: "Введите ваш email",
                  pattern: {
                    value: /^[\w.+-]+@([\w-]+\.)+[\w-]{2,}$/i,
                    message: "Введите корректный email",
                  },
                  maxLength: {
                    value: 50,
                    message: "Максимальная длина — 50 символов",
                  },
                }}
                labelType="inner"
              />

              <FormInput
                clear
                fullWidth
                id="hub-contact-message"
                name="message"
                autoComplete="off"
                label="Сообщение"
                defaultValue=""
                maxLength={500}
                rules={{
                  required: "Введите сообщение",
                  maxLength: {
                    value: 500,
                    message: "Максимальная длина — 500 символов",
                  },
                }}
                labelType="inner"
              />

              <Button
                htmlType="submit"
                fullWidth
                size="l"
                className={styles.submitButton}
              >
                Отправить
              </Button>
            </Flex>
          </Form>

          <div className={styles.responseNote}>
            <Body size="l" weight="bold" tone="muted">
              Мы отвечаем в течение 2 рабочих дней
            </Body>
            <Body size="l" tone="muted">
              Если потребуется больше времени — предупредим.
            </Body>
          </div>
        </div>
      </div>
    </Section>
  );
}
