<template>
  <div class="main-container">
    <form action="action_page.php" method="post">
      <div class="imgcontainer">
        <img
          src="../../assets/Students/avatar.jpg"
          alt="Avatar"
          class="avatar"
        />
      </div>
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required />

        <label for="psw"><b>Email</b></label>
        <input type="mail" placeholder="Enter Email" name="psw" required />

        <label for="uname"><b>Password</b></label>
        <input type="text" placeholder="Enter Password" name="uname" required />

        <label for="psw"><b>Confirm Password</b></label>
        <input
          type="password"
          placeholder="Confirm Password"
          name="psw"
          required
        />
        <button type="submit">Sign up</button>
        <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label>
      </div>
      <div class="container" style="background-color: #f1f1f1">
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="#">password?</a></span>
      </div>
    </form>
  </div>
</template>

<style scoped>
.main-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Bordered form */
form {
  display: flex;
  flex-direction: column;
  flex-basis: inherit;
  border: 3px solid #f1f1f1;
  width: 40rem;
}

/* Full-width inputs */
input[type="text"],
input[type="password"],
input[type="mail"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
