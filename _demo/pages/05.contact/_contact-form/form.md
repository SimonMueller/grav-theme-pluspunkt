---
cache_enable: false

form:
  name: contact
  classes: form

  fields:
    - name: name
      label: Name
      outerclasses: form-item
      placeholder: Your name
      autocomplete: on
      type: text
      validate:
        required: true

    - name: email
      label: Email
      outerclasses: form-item
      placeholder: Your email adress
      autocomplete: on
      type: email
      validate:
        required: true

    - name: message
      label: Message
      outerclasses: form-item
      placeholder: Your message
      autocomplete: on
      type: textarea
      rows: 5
      validate:
        required: true

    - name: g-recaptcha-response
      label: Captcha
      type: captcha
      outerclasses: form-item
      recaptcha_not_validated: Captcha not validated
      validate:
        required: true

  buttons:
    - type: submit
      value: Send
      classes: button outline
    - type: reset
      value: Reset
      classes: button secondary outline

  process:
    - display: /formdata
---

## Contact form
