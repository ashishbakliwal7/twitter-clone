<template>
  <div
    id="register"
    class="min-h-screen flex flex-col items-center justify-center bg-gray-100"
  >
    <div
      class="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-50 max-w-md items-center"
    >
      <i class="fab fa-twitter" style="font-size: 48px; color: #1da1f2"></i>
      <div class="font-medium self-center text-xl sm:text-3xl text-gray-800">
        Register here
      </div>
      <div class="mt-4 self-center text-xl sm:text-sm text-gray-800"></div>

      <div class="mt-10">
        <form @submit.prevent="handleSubmit">
          <div class="flex flex-col mb-5">
            <label for="email" class="mb-1 text-xs tracking-wide text-gray-600"
              >First Name:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>

              <input
                id="firstName"
                v-model="user.firstName"
                type="text"
                name="firstName"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your Firstname"
                required
              />
            </div>
          </div>
          <div class="flex flex-col mb-5">
            <label for="email" class="mb-1 text-xs tracking-wide text-gray-600"
              >Last Name:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>

              <input
                id="lastName"
                type="text"
                name="lastName"
                v-model="user.lastName"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your Last Name"
              />
            </div>
          </div>

          <div class="flex flex-col mb-5">
            <label for="email" class="mb-1 text-xs tracking-wide text-gray-600"
              >Phone:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>

              <input
                id="phone"
                type="text"
                name="phone"
                v-model="user.phone"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your phone"
                required
              />
            </div>
          </div>
          <div class="flex flex-col mb-5">
            <label for="email" class="mb-1 text-xs tracking-wide text-gray-600"
              >Username:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>

              <input
                id="userName"
                type="text"
                name="userName"
                v-model="user.userName"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>
          <div class="flex flex-col mb-5">
            <label for="email" class="mb-1 text-xs tracking-wide text-gray-600"
              >E-Mail Address:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <i class="fas fa-at text-blue-500"></i>
              </div>

              <input
                id="email"
                type="email"
                v-model="user.email"
                name="email"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div class="flex flex-col mb-6">
            <label
              for="password"
              class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >Password:</label
            >
            <div class="relative">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
                <span>
                  <i class="fas fa-lock text-blue-500"></i>
                </span>
              </div>

              <input
                id="password"
                type="password"
                v-model="user.password"
                name="password"
                class="text-sm placeholder-gray-500 pl-10 pr-4 rounded-2xl border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <div class="flex w-full">
            <button
              type="submit"
              class="flex mt-2 items-center justify-center focus:outline-none text-black text-sm sm:text-base bg:blue-500 hover:bg-blue-600 rounded-2xl py-2 w-full transition duration-150 ease-in"
            >
              <span class="mr-2 uppercase">Sign Up</span>
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex justify-center items-center mt-6">
      <a
        href="#"
        target="_blank"
        class="inline-flex items-center text-gray-700 font-medium text-xs text-center"
      >
        <span class="ml-2"
          >Already Registered
          <a href="/login" class="text-xs ml-2 text-blue-500 font-semibold"
            >Login here</a
          ></span
        >
      </a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "register",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
      },
      submitted: false,
    };
  },
  computed: {
    ...mapState("account", ["status"]),
  },
  methods: {
    ...mapActions("account", ["register"]),
    handleSubmit(e) {
      this.submitted = true;
      console.log(this.user);
      this.register(this.user);
    },
  },
};
</script>
