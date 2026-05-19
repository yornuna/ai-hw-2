/**
 * TODO для студентов:
 * 1. Подключить i18n через next-intl
 * 2. Добавить обработчик отправки формы с валидацией
 * 3. Подключить useCandidatesContactForm hook
 * 4. Добавить загрузку резюме (dropzone)
 */
"use client";

import type { ReactElement } from "react";
import { Button, Flex, Form, FormInput } from "bcc-design";
import { Section } from "@/shared/components/Section";
import { Body, Heading } from "@/shared/components/Typography";
import styles from "./styles.module.scss";

interface IFormData {
  name: string;
  email: string;
  phone: string;
  position: string;
}

export default function CandidatesContactForm(): ReactElement {
  const form = Form.useForm();

  const handleSubmit = (_data: IFormData): void => {
    /* TODO: отправка формы */
  };

  return (
    <Section bleed className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.formBlock}>
            <div className={styles.header}>
              <Heading level="m" className={styles.title}>
                Не нашли подходящую вакансию?
              </Heading>
              <Body size="m" tone="muted" className={styles.description}>
                Отправьте ваши данные и мы свяжемся с вами в ближайшее время
              </Body>
            </div>

            <Form onSubmit={handleSubmit} form={form}>
              <Flex direction="column" gap={16} width="100%">
                <Flex gap={16} width="100%">
                  <FormInput
                    clear
                    fullWidth
                    id="candidate-name"
                    name="name"
                    autoComplete="name"
                    label="Имя"
                    defaultValue=""
                    rules={{ required: "Введите ваше имя" }}
                    labelType="inner"
                  />
                  <FormInput
                    clear
                    fullWidth
                    id="candidate-email"
                    name="email"
                    autoComplete="email"
                    label="Email"
                    defaultValue=""
                    rules={{
                      required: "Введите email",
                      pattern: {
                        value: /^[\w.+-]+@([\w-]+\.)+[\w-]{2,}$/i,
                        message: "Введите корректный email",
                      },
                    }}
                    labelType="inner"
                  />
                </Flex>
                <FormInput
                  clear
                  fullWidth
                  id="candidate-position"
                  name="position"
                  autoComplete="off"
                  label="Желаемая позиция"
                  defaultValue=""
                  labelType="inner"
                />
                <Button
                  htmlType="submit"
                  fullWidth
                  size="l"
                  className={styles.submitButton}
                >
                  Откликнуться
                </Button>
              </Flex>
            </Form>
          </div>
        </div>
      </div>
    </Section>
  );
}
