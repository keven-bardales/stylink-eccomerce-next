'use client';

import { FormField, FormGroup } from '@/components/shared/client/forms/form-components';
import FormNotificacion from '@/components/shared/client/forms/form-notification';
import { FadeIn } from '@/components/shared/client/framer/FadeIn';
import { Formik } from 'formik';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import * as Yup from 'yup';
import 'yup-phone-lite';

interface ContactFormState {
  error: string;
  success: boolean;
  isNotificationOpen: boolean;
}

export default function ContactForm() {
  const [state, setstate] = useState<ContactFormState>({
    error: '',
    success: false,
    isNotificationOpen: false,
  });

  const contactFormSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Ingrese un correo valido'),
    phoneNumber: Yup.string().phone(['US', 'HN'], 'Ingrese un numero en formato +504-3335-0423').required('El telefono es requerido'),
    message: Yup.string().required('El mensaje es requerido'),
  });

  const initialFormValues = {
    name: '',
    email: '',
    phoneNumber: '',
    title: '',
    message: '',
    file: '',
  };

  const handleSubmit = (values: typeof initialFormValues) => {
    const formData = new FormData();
    formData.append('file', values.file);
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('phoneNumber', values.phoneNumber);
    formData.append('message', values.message);

    fetch(`${process.env.NEXT_PUBLIC_APP_MAIN_API_URL}/api/contact`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          setstate({ ...state, error: 'Failed to create' });
          return Promise.reject(new Error('Failed to create'));
        }
        return response.json();
      })
      .then((data) => {
        setstate({ ...state, isNotificationOpen: true });

        setTimeout(() => {
          setstate({ ...state, isNotificationOpen: false });
        }, 2000);
      })
      .catch((error) => {
        setstate({ ...state, error: error.message });
        setTimeout(() => {
          setstate({ ...state, error: '' });
        }, 3000);
      });
  };

  return (
    <>
      <FormNotificacion isOpen={state.isNotificationOpen} />
      <Formik
        validationSchema={contactFormSchema}
        onSubmit={(values, formikHelpers) => {
          handleSubmit(values);
          formikHelpers.resetForm();
        }}
        initialValues={initialFormValues}
      >
        {(formik) => (
          <FadeIn as="div" className="w-full lg:w-1/2">
            <form
              encType="multipart/form-data"
              onSubmit={formik.handleSubmit}
              className="flex w-full flex-wrap justify-center gap-y-2 py-5 text-skin-secondary"
            >
              <h2 className="w-full px-5 text-center text-xl font-bold  leading-8 text-skin-primary lg:text-2xl">
                Contactanos y pide tu diseño personalizado
              </h2>

              <FormGroup className="flex basis-full flex-col gap-x-10 gap-y-4 sm:flex-row lg:flex-wrap lg:gap-y-0">
                <FormField className="flex w-full grow flex-col gap-y-2 sm:w-2/5 lg:w-full 2xl:w-2/5">
                  <label className="text-sm font-medium text-skin-primary" htmlFor="name">
                    *Nombre
                  </label>
                  <input
                    className="w-full rounded-full border-gray-300 p-2 shadow-sm ring-0 transition duration-200 focus:border-black focus:ring-black sm:text-sm"
                    type="text"
                    name="name"
                    placeholder="Ingrese su nombre"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.name && formik.touched.name && 'visible')}>
                    {formik.errors.name}
                  </span>
                </FormField>
              </FormGroup>

              <FormGroup className="flex basis-full flex-col gap-x-10 gap-y-4 sm:flex-row lg:flex-wrap lg:gap-y-0">
                <FormField className="flex w-full grow flex-col gap-y-2 sm:w-2/5 lg:w-full 2xl:w-2/5">
                  <label className="text-sm font-medium text-skin-primary" htmlFor="email">
                    *Email
                  </label>
                  <input
                    className="w-full rounded-full border-gray-300 p-2 shadow-sm ring-0 transition duration-200 focus:border-black focus:ring-black sm:text-sm"
                    type="email"
                    name="email"
                    placeholder="user@gmail.com"
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.email && formik.touched.email && 'visible')}>
                    {formik.errors.email}
                  </span>
                </FormField>
                <FormField className="flex w-full grow flex-col gap-y-2 sm:w-2/5 lg:w-full 2xl:w-2/5">
                  <label className="text-sm font-medium text-skin-primary" htmlFor="phone">
                    *Telefono
                  </label>
                  <input
                    className="w-full rounded-full border-gray-300 p-2 shadow-sm ring-0 transition duration-200 focus:border-black focus:ring-black sm:text-sm"
                    type="text"
                    name="phoneNumber"
                    placeholder="+504-3332-2530"
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                  />
                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.phoneNumber && formik.touched.phoneNumber && 'visible')}>
                    {formik.errors.phoneNumber ? formik.errors.phoneNumber : 'a'}
                  </span>
                </FormField>
              </FormGroup>

              <FormGroup className="flex basis-full flex-col gap-x-10 gap-y-4 lg:flex-row lg:gap-y-0">
                <FormField className="flex w-full grow flex-col gap-y-2 lg:w-2/5">
                  <label className="text-sm font-medium text-skin-primary" htmlFor="cv">
                    *Mensaje
                  </label>
                  <textarea
                    className="h-32 w-full border-none p-2 shadow-sm outline-none ring-0 transition duration-200 focus:ring-0 sm:text-sm"
                    name="message"
                    placeholder="Agrega una breve descripcion de que te gustaria en tu diseño"
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  />
                  <span className={twMerge('invisible w-fit text-red-500', formik.errors.message && formik.touched.message && 'visible')}>
                    {formik.errors.message ? formik.errors.message : 'a'}
                  </span>
                </FormField>
              </FormGroup>

              <FormGroup className="flex basis-full flex-col gap-x-10 gap-y-4 lg:flex-row lg:gap-y-0">
                <FormField className="flex w-full grow flex-col items-center justify-center gap-y-2 bg-white py-5 lg:w-2/5">
                  <div className="flex w-full justify-center px-5">
                    <label
                      className="w-full cursor-pointer bg-black px-3 py-2 text-center text-sm font-bold text-white sm:w-[70%] md:w-[40%] lg:w-[20%]"
                      htmlFor="foto"
                    >
                      Seleccionar Archivooo
                    </label>
                    <input
                      className="hidden w-full border-none p-2 shadow-sm outline-none ring-0 transition-all duration-300 focus:ring-0 sm:text-sm"
                      id="foto"
                      type="file"
                      accept=".doc, .docx, .pdf, .jpg, .jpeg, .png"
                      name="foto"
                      onChange={(e) => {
                        if (e.target.files) {
                          const file = e.target.files[0];
                          formik.setFieldValue('file', file);
                        }
                      }}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <span className="text-center text-base font-light leading-6 text-gray-400">
                    Archivos aceptados .doc, .docx, .pdf, .jpg, .jpeg, .png
                  </span>
                  {/* <span
                    className={twMerge(
                      'hidden text-base font-light leading-6 text-gray-500 opacity-0 transition-all duration-300',
                      formik.values && 'block opacity-100'
                    )}
                  >
                    {formik.values.cv?.name}
                  </span> */}
                  {/* <span
                    className={twMerge(
                      'hidden text-red-500 opacity-0 transition-all duration-300',
                      formik.errors && formik.touched && 'block opacity-100'
                    )}
                  >
                    {formik.errors ? formik.errors : 'a'}
                  </span> */}
                </FormField>
              </FormGroup>
              <div className="flex w-full justify-center">
                <button
                  type="submit"
                  disabled={formik.dirty === false || formik.isValid === false || formik.isSubmitting}
                  className={twMerge(
                    'w-full rounded-full border border-skin-main bg-black px-3 py-2 text-sm font-bold text-white opacity-60 transition-all duration-300 enabled:cursor-pointer disabled:cursor-not-allowed lg:w-[100%]',
                    formik.dirty && formik.isValid && !formik.isSubmitting && 'opacity-100'
                  )}
                >
                  Enviar mi diseño
                </button>
              </div>
              {state.error && <span className="text-red-500">Ha ocurrido un error al enviar el formulario</span>}
            </form>
          </FadeIn>
        )}
      </Formik>
    </>
  );
}
