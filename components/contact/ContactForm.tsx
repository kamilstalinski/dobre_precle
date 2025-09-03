"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mnqkbdor");

  if (state.succeeded) {
    return <p className='text-h3  mt-8'>Wiadomość została wysłana!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-3 mt-4 [&>*]:px-4 [&>*]:py-3 [&>*]:rounded-lg [&>*]:placeholder:text-[14px] [&>*]:placeholder:text-[#ED8F28] [&>*]:text-text-color [&>*]:text-[14px]'
    >
      <input type='text' id='name' name='name' placeholder='Imię' />
      <input
        type='tel'
        autoComplete='tel'
        id='tel'
        name='tel'
        placeholder='Nr telefonu'
      />
      <input type='email' id='email' name='email' placeholder='e-mail' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <textarea
        name='message'
        id='message'
        placeholder='Napisz do nas'
        className='min-h-[150px]'
      ></textarea>
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <label>
        <input className='mr-2' type='checkbox' required />
        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu nawiązania
        kontaktu za pośrednictwem formularza internetowego lub telefonicznie.
      </label>
      <button
        type='submit'
        disabled={state.submitting}
        className='!text-white !text-p md:!text-p-mobile !p-2 w-2/5 border-2 border-white hover:border-[#971C25] self-end hover:bg-[#971C25] transition-all'
      >
        Wyślij
      </button>
    </form>
  );
}

export default ContactForm;
