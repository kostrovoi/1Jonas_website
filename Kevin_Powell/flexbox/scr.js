var app = new Vue({
  el: '#app',
  data: {
    form: {
      name: '',
      email: '',
      message: '',
    },
    error: '',
    // field: '',
    firstName: '',
    lastName: '',
  },
  methods: {
    validateForm: function () {
      if (
        this.form.name.length &&
        this.form.email.length &&
        this.form.message.length
      ) {
        return (this.error = 'Form Sent!');
      }

      return (this.error = 'Invalid Form');
    },
  },
  computed: {
    fullName: {
      get: function () {
        console.log(this.firstName);
        return this.firstName + ' ' + this.lastName;
      },
      set: function (newValue) {
        var names = newValue.split(' ');

        this.firstName = names[0];
        this.lastName = names[1];
      },
    },
    nameValidation: function () {
      if (!this.form.name.length && this.error) {
        return 'Name Field is Required';
      }
    },
    emailValidation: function () {
      if (!this.form.email.length && this.error) {
        return 'Name Field is Required';
      }
    },
    messageValidation: function () {
      if (!this.form.message.length && this.error) {
        return 'Name Field is Required';
      }
    },
  },
});
